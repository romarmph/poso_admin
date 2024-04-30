import { redirect, type Actions } from "@sveltejs/kit";
import { zod } from "sveltekit-superforms/adapters";
import { fail, message, setError, superValidate } from "sveltekit-superforms";
import { ticketSchema } from "$lib/schemas/app";
import ActionResultModals from "$lib/enums/ActionResultModals";
import Roles from "$lib/enums/Roles";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ url, locals: { supabase } }) => {
  const id = url.searchParams.get("id");
  const { data: oldTicket } = await supabase
    .from('tickets')
    .select(`
    *,
    ticket_numbers_manual(ticket_number),
    ticket_violations(violation_id)
  `).eq("id", id);

  const form = await superValidate({
    ...oldTicket![0],
    birthdate: new Date(oldTicket![0].birthdate),
    violation_date: new Date(oldTicket![0].violation_date),
    ticket_no: oldTicket![0].ticket_numbers_manual.ticket_number.toString(),
    violations: oldTicket![0].ticket_violations.map((item: { violation_id: number }) => item.violation_id),
  }, zod(ticketSchema));
  const { data: violations } = await supabase
    .from("violations")
    .select()
    .is("deleted_by", null);
  const { data: vehicleTypes } = await supabase
    .from("vehicle_types")
    .select()
    .is("deleted_by", null);
  const { data: enforcers } = await supabase
    .from("employees")
    .select()
    .is("deleted_by", null)
    .eq("role", Roles.ENFORCER);

  return {
    form,
    violations,
    vehicleTypes,
    enforcers,
  };
};

export const actions: Actions = {
  update: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(ticketSchema));
    const failMessage = message(form, {
      success: false,
      action: ActionResultModals.FailUpdate,
    });

    if (!form.valid) {
      return message(form, {
        success: false,
        action: "",
      });
    }

    const { data: ticket_numbers } = await supabase
      .from("ticket_numbers_manual")
      .select()
      .eq("ticket_number", form.data.ticket_no);

    if (!ticket_numbers) {
      return failMessage;
    }

    if (ticket_numbers.length && ticket_numbers[0].ticket_number != form.data.ticket_no) {
      return setError(form, "ticket_no", "Ticket Number already exists");
    }

    const formData = form.data;
    const currentUser = await getCurrentUser();
    const ticket = {
      first_name: formData.first_name,
      middle_name: formData.middle_name,
      last_name: formData.last_name,
      suffix: formData.suffix,
      address: formData.address ?? "",
      birthdate:
        formData.birthdate == new Date(1900, 0, 1, 12, 0, 0)
          ? null
          : formData.birthdate,
      status: "unpaid",
      violation_date: formData.violation_date,
      violation_time: formData.violation_time,
      vehicle_type: formData.vehicle_type,
      enforcer: formData.enforcer,
      violation_location: formData.location,
      identification_type: formData.identification_type,
      identification: formData.identification,
      updated_at: new Date(),
      updated_by: currentUser?.id,
      offense: formData.offense,
      previous_offense: formData.previous_offense,
      fine: formData.fine,
    };

    const { data: ticketData, error: ticketError } = await supabase
      .from("tickets")
      .update(ticket)
      .eq("id", form.data.id);

    if (ticketError) {
      return failMessage;
    }


    const { error: ticketNumberError } = await supabase
      .from("ticket_numbers_manual")
      .update({
        ticket_number: formData.ticket_no,
      }).eq("ticket_id", form.data.id);

    if (ticketNumberError) {
      return failMessage;
    }

    // Delete all violations
    await supabase.from("ticket_violations").delete().eq("ticket_id", form.data.id);

    const fails: {
      ticket_id: number;
      violation_id: number;
    }[] = [];
    form.data.violations.forEach(async (violation) => {
      const { error: ticketViolationsError } = await supabase
        .from("ticket_violations")
        .insert({
          ticket_id: form.data.id,
          violation_id: violation,
          offense: form.data.offense,
        });
    });

    if (fails.length) {
      return failMessage;
    }

    return redirect(302, '/tickets');
  },
};
