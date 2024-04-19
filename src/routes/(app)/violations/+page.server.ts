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
  add: async ({ request, locals: { supabase, getSession, getCurrentUser } }) => {
    const form = await superValidate(request, zod(violationSchema));
    if (!form.valid) {
      return message(form, 'Invalid form');
    }
    const user = await getCurrentUser();

    const violation = {
      name: form.data.name,
      fine: {
        big: {
          a: form.data.big_1,
          b: form.data.big_2,
          c: form.data.big_3,
        },
        small: {
          a: form.data.small_1,
          b: form.data.small_2,
          c: form.data.small_3,
        }
      },
      enabled: true,
      created_by: user!.id,
      updated_by: user!.id,
      deleted_by: null,
    }

    const { error } = await supabase.from("violations").insert(violation);

    if (error) {
      console.log(error);
      return message(form, 'Error adding violation');
    }

    return message(
      form,
      "success",
    )
  }
}
