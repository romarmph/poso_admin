import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { message, setError, superValidate } from "sveltekit-superforms";
import ActionResultModals from "$lib/enums/ActionResultModals";
import { zod } from "sveltekit-superforms/adapters";
import { deleteSchema, paymentSchema } from "$lib/schemas/app";
import type { SupabaseClient } from "@supabase/supabase-js";
import makeDateRangeFilter from "$lib/utils/makeDateRangeFilter";

async function fetchTickets(
  supabase: SupabaseClient,
  month: number,
  year: number,
  search: string,
) {
  const dateRange = makeDateRangeFilter(month, year);

  if (search.length) {
    const { data } = await supabase.rpc("search_tickets", {
      search_value: search,
    });
    return data;
  } else {
    let { data } = await supabase
      .from("tickets")
      .select()
      .is("deleted_by", null)
      .lte("violation_date", dateRange.end)
      .gte("violation_date", dateRange.start)
      .order("violation_date");
    return data;
  }
}

export const load: PageServerLoad = async ({ url, locals: { supabase } }) => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
  let search = "";

  if (url.search.length) {
    let tempMonth = Number(url.searchParams.get("month"));
    year = Number(url.searchParams.get("year")) || year;
    month = typeof tempMonth === "number" ? tempMonth : month;
    search = url.searchParams.get("search") || search;
  }
  let { data: months } = await supabase.rpc("get_months_with_tickets", {
    ticket_year: year,
  });

  if (months.length === 0) {
    const { data: retry } = await supabase.rpc("get_months_with_tickets", {
      ticket_year: year - 1,
    });

    months = retry;
  }
  const { data: years } = await supabase.rpc("get_unique_years", {
    column_name: "violation_date",
    table_name: "tickets",
  });
  const form = await superValidate(zod(deleteSchema));
  const paymentForm = await superValidate(zod(paymentSchema));
  return {
    form,
    paymentForm,
    months: months,
    years: years,
    query: {
      year,
      month,
    },
    lazy: {
      tickets: fetchTickets(supabase, month, year, search),
    },
  };
};

export const actions: Actions = {
  delete: async ({ request, locals: { supabase } }) => {
    const form = await superValidate(request, zod(deleteSchema));

    const { error } = await supabase
      .from("tickets")
      .delete()
      .eq("id", form.data.id);

    if (error) {
      return message(form, {
        success: false,
        action: ActionResultModals.FailDelete,
      });
    }

    return message(form, {
      success: true,
      action: ActionResultModals.SuccessDelete,
    });
  },
  pay: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(paymentSchema));
    const user = await getCurrentUser();

    if (!form.valid) {
      return message(form, {
        success: false,
        action: "",
      });
    }

    const { data } = await supabase
      .from("tickets")
      .select("or_number")
      .eq("or_number", form.data.or_number);

    if (data && data.length > 0 && form.data.or_number.length) {
      return setError(form, "or_number", "OR Number already exists");
    }

    const { data: updateData, error } = await supabase
      .from("tickets")
      .update({
        or_number: form.data.or_number,
        amount_paid: form.data.amount_paid,
        paid_at: form.data.paid_at,
        discounted: form.data.discounted,
        discounted_by: form.data.discounted_by,
        updated_by: user.id,
        updated_at: new Date(),
        status: "paid",
      })
      .eq("id", form.data.id)
      .select();

    if (error) {
      return message(form, {
        success: false,
        action: ActionResultModals.FailUpdate,
      });
    }

    return message(form, {
      success: false,
      action: ActionResultModals.SuccessCreate,
    });
  },
};
