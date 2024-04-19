import { employeeSchema, trafficPostSchema, vehicleTypesSchema } from "$lib/schemas/app";
import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, message } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
}) => {
  const form = await superValidate(zod(employeeSchema));
  const enforcer = await supabase.from("employees").select().eq('role', 1);

  return {
    enforcer: enforcer.data,
    form,
  };
};

export const actions: Actions = {
  add: async ({ request }) => {
    const form = await superValidate(request, zod(employeeSchema));
    if (!form.valid) {
      return message(form, 'Invalid form');
    }
    return message(
      form,
      "success",
    )
  }
}
