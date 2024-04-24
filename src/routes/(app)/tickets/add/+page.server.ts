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
  create: async ({ request, locals: { supabase, getCurrentUser } }) => {
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
    const currentUser = await getCurrentUser();
    const ticket = {
      id: "",
      first_name: formData.first_name,
      middle_name: formData.middle_name,
      last_name: formData.last_name,
      suffix: formData.suffix,
      address: formData.address ?? "",
      birthdate: formData.birthdate ?? null,
      status: "unpaid",
      violation_date: formData.violation_date,
      violation_time: formData.violation_time,
      vehicle_type: formData.vehicle_type,
      enforcer: formData.enforcer,
      violation_location: formData.location,
      identification_type: formData.identification_type,
      identification: formData.identification,
      created_at: new Date(),
      created_by: currentUser?.id,
      updated_at: new Date(),
      updated_by: currentUser?.id,
      deleted_at: null,
      deleted_by: null,
    }

    const {
      data: ticketData,error: ticketError
    } = await supabase.from("tickets").insert(ticket);
    console.log(ticketError)
    if(ticketError){
      return message(form,{
        success:false, 
        action: ActionResultModals.FailCreate,

      })
    }
console.log(ticketData)
    // const {
    //   data,error
    // } = await supabase.from("ticket_numbers_manual").insert({
    //   // ticket_id: ticketData?.id,
    // })
    return redirect(302, "/tickets")
  }
}
