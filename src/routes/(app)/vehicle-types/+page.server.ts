import { vehicleTypesSchema } from "$lib/schemas/app";
import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, message } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
}) => {
  const form = await superValidate(zod(vehicleTypesSchema));
  const vehicleTypes = await supabase.from("vehicle_types").select();

  return {
    vehicleTypes: vehicleTypes.data,
    form,
  };
};

export const actions: Actions = {
  add: async ({ request, locals: { supabase, getSession, getCurrentUser } }) => {
    const form = await superValidate(request, zod(vehicleTypesSchema));
    if (!form.valid) {
      return message(form, 'Invalid form');
    }
    const user = await getCurrentUser();
    const vehicleTypes ={
      type: form.data.type,
      big_vehicle: form.data.big_vehicle,
      enabled:true,
      created_by: user!.id,
      updated_by: user!.id,
      deleted_by: null,

    }


    const { error } = await supabase.from("vehicle_types").insert(vehicleTypes);

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

