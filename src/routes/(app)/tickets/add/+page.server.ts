import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { zod } from "sveltekit-superforms/adapters";
import { superValidate } from "sveltekit-superforms";
import { ticketSchema } from "$lib/schemas/app";

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
    const ticketForm = await superValidate(request, zod(ticketSchema));

    console.log(ticketForm);
    return {
      ticketForm,
    }
  }
}
