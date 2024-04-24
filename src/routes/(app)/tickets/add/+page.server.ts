import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { zod } from "sveltekit-superforms/adapters";
import { message, setError, superValidate } from "sveltekit-superforms";
import { ticketSchema } from "$lib/schemas/app";
import ActionResultModals from "$lib/enums/ActionResultModals";

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  const ticketForm = await superValidate(zod(ticketSchema));
  const { data: violations } = await supabase.from("violations").select().is("deleted_by", null);
  const { data: vehicleTypes } = await supabase.from("vehicle_types").select().is("deleted_by", null);
  const { data: enforcers } = await supabase.from("employees").select().is("deleted_by", null).eq("role", 1);
  return {
    ticketForm,
    violations,
    vehicleTypes,
    enforcers,
  };
}

export const actions: Actions = {
  create: async ({ request, locals: { supabase } }) => {
    const form = await superValidate(request, zod(ticketSchema));

    if (!form.valid) {
      return message(form, {
        success: false,
        action: "",
      });
    }

    const { data: ticket_numbers } = await supabase.from("ticket_numbers_manual").select().eq("ticket_number", form.data.ticket_no);

    if (!ticket_numbers) {
      return message(form, {
        success: false,
        action: ActionResultModals.FailCreate,
      })
    }

    if (ticket_numbers.length) {
      return setError(form, "ticket_no", "Ticket Number already exists");
    }

    const formData = form.data;
    const ticket = {
      id: "",
      first_name: formData.first_name,
      middle_name: formData.middle_name,
      last_name: formData.last_name,
      suffix: formData.suffix,
      address: formData.address ?? "",
      birtdate: formData.birthdate ?? null,
      status: "unpaid",
    }

    return redirect(302, "/tickets")
  }
}
