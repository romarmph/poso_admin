import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { zod } from "sveltekit-superforms/adapters";
import { message, setError, superValidate } from "sveltekit-superforms";
import { ticketSchema } from "$lib/schemas/app";
import ActionResultModals from "$lib/enums/ActionResultModals";
import Roles from "$lib/enums/Roles";

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
  const form = await superValidate(zod(ticketSchema));
  const { data: violations } = await supabase.from("violations").select().is("deleted_by", null);
  const { data: vehicleTypes } = await supabase.from("vehicle_types").select().is("deleted_by", null);
  const { data: enforcers } = await supabase.from("employees").select().is("deleted_by", null).eq("role", Roles.ENFORCER);

  vehicleTypes?.sort((a, b) => a.type.localeCompare(b.type));
  violations?.sort((a, b) => a.name.localeCompare(b.name));
  enforcers?.sort((a, b) => a.first_name.localeCompare(b.first_name));
  return {
    form,
    violations,
    vehicleTypes,
    enforcers,
  };
}

export const actions: Actions = {
  create: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(ticketSchema));
    const failMessage = message(form, {
      success: false,
      action: ActionResultModals.FailCreate,
    });

    if (!form.valid) {
      return message(form, {
        success: false,
        action: "",
      });
    }

    const { data: ticket_numbers } = await supabase.from("tickets").select().eq("ticket_no", form.data.ticket_no);

    if (!ticket_numbers) {
      return failMessage;
    }

    if (ticket_numbers.length) {
      return setError(form, "ticket_no", "Ticket Number already exists");
    }

    const formData = form.data;
    const currentUser = await getCurrentUser();
    const timestamp = new Date();
    const ticket = {
      violator: formData.violator,
      address: formData.address ?? "",
      status: "unpaid",
      violation_date: formData.violation_date,
      vehicle_type: Number(formData.vehicle_type.split(':')[1]),
      enforcer: Number(formData.enforcer?.split(':')[1]),
      violation_location: formData.violation_location ?? "",
      created_at: timestamp,
      created_by: currentUser?.id,
      updated_at: timestamp,
      updated_by: currentUser?.id,
      deleted_at: null,
      deleted_by: null,
      offense: formData.offense,
      previous_offense: formData.previous_offense,
      due_date: new Date(formData.violation_date.setDate(formData.violation_date.getDate() + 7)),
      plate_no: formData.plate_no,
      license_no: formData.license_no,
      engine_no: formData.engine_no,
      chassis_no: formData.chassis_no,
      ticket_no: formData.ticket_no,
      violations: formData.violations,
    }

    const {
      data: ticketData, error: ticketError
    } = await supabase.from("tickets").insert(ticket).select();

    if (ticketError) {
      return failMessage;
    }

    return redirect(302, "/tickets")
  }
}
