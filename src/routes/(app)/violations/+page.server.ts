import { violationSchema } from "$lib/schemas/app";
import { type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, message } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async ({
  locals: { supabase },
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
          a: form.data.big.a,
          b: form.data.big.b,
          c: form.data.big.c,
        },
        small: {
          a: form.data.small.a,
          b: form.data.small.b,
          c: form.data.small.c,
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
