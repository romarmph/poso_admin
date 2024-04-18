import { violationSchema } from "$lib/schemas/app";
import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, message } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
}) => {
  const form = await superValidate(zod(violationSchema));
  const violations = await supabase.from("users").select();

  return {
    violations: violations.data,
    form,
  };
};

export const actions: Actions = {
  add: async ({ request }) => {
    const form = await superValidate(request, zod(violationSchema));
    if (!form.valid) {
      return message(form, 'Invalid form');
    }
    return message(
      form,
      "success",
    )
  }
}
