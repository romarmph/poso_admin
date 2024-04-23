import { deleteSchema, vehicleTypesSchema, violationSchema } from "$lib/schemas/app";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, message, fail } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import DbActions from "$lib/enums/DbActions";
import ActionResultModals from "$lib/enums/ActionResultModals";

export const load: PageServerLoad = async ({
  locals: { supabase },
}) => {
  const vehicleTypeForm = await superValidate(zod(vehicleTypesSchema));
  const deleteForm = await superValidate(zod(deleteSchema));
  const vehicleType = await supabase.from("vehicle_types").select().is("deleted_by", null);

  return {
    vehicleType: vehicleType.data,
    vehicleTypeForm,
    deleteForm,
  };
};

export const actions: Actions = {
  add: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const vehicleTypeForm = await superValidate(request, zod(vehicleTypesSchema));

    if (!vehicleTypeForm.valid) {
      return message(vehicleTypeForm, {
        success: false,
        action: "",
      });
    }
    const user = await getCurrentUser();

    const vehicleType = {
      type: vehicleTypeForm.data.type,
      big_vehicle: vehicleTypeForm.data.big_vehicle,
      enabled:true,
      created_by: user!.id,
      updated_by: user!.id,
      deleted_by: null,
    }

    const { error } = await supabase.from("vehicle_types").insert(vehicleType);

    if (error) {
      return message(vehicleTypeForm, {
        success: false,
        action: ActionResultModals.FailCreate,
      });
    }

    return message(
      vehicleTypeForm,
      {
        success: true,
        action: ActionResultModals.SuccessCreate,
      }
    )
  },
  update: async ({ request, url, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(vehicleTypesSchema));

    if (!form.valid) {
      return message(form, {
        success: false,
        action: ""
      });
    }
    const user = await getCurrentUser();

    const vehicleType = {
      type: form.data.type,
      big_vehicle: form.data.big_vehicle,
      enabled: true,
      created_by: user!.id,
      updated_by: user!.id,
      deleted_by: null,
    }

    const updateVehicleType = {
      ...vehicleType,
      updated_at: new Date(),
      updated_by: user!.id,
    }
    const { error } = await supabase.from("vehicle_types").update(updateVehicleType).eq("id", form.data.id);

    if (error) {
      return message(form, {
        success: false,
        action: ActionResultModals.FailUpdate,
      });
    }

    return message(form, {
      success: true,
      action: ActionResultModals.SuccessUpdate,
    })
  },

  delete: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(deleteSchema));
    const user = await getCurrentUser();

    const { error } = await supabase.from("vehicle_types").update({
      deleted_by: user!.id,
      deleted_at: new Date(),
    }).eq("id", form.data.id)

    if (error) {
      return message(form, {
        success: false,
        action: ActionResultModals.FailDelete,
      })
    }
    return message(form, {
      success: true,
      action: ActionResultModals.SuccessDelete,
    })
  }
}

