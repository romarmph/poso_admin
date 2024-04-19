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
  add: async ({ request, locals: { supabase, getSession, getCurrentUser } }) => {
    const form = await superValidate(request, zod(trafficPostSchema));
    if (!form.valid) {
      return message(form, 'Invalid form');
    }
    const user = await getCurrentUser();
    const TrafficPost ={
      name: form.data.name,
      address: form.data.address,
      longitude: 120.567162810886,
      latitude:15.9761921069076,
      created_by: user!.id,
      updated_by: user!.id,
      deleted_by: null,

    }


    const { error } = await supabase.from("traffic_posts").insert(TrafficPost);

    if (error) {
      console.log(error);
      return message(form, 'Error adding Traffic Post');
    }

    return message(
      form,
      "success",
    )
  }
}

