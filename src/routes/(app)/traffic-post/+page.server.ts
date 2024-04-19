import { trafficPostSchema, vehicleTypesSchema } from "$lib/schemas/app";
import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, message } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
}) => {
  const form = await superValidate(zod(vehicleTypesSchema));
  const trafficPost = await supabase.from("traffic_posts").select();

  return {
    trafficPost: trafficPost.data,
    form,
  };
};

export const actions: Actions = {
  add: async ({ request }) => {
    const form = await superValidate(request, zod(trafficPostSchema));
    if (!form.valid) {
      return message(form, 'Invalid form');
    }
    return message(
      form,
      "success",
    )
  }
}
