import { deleteSchema, trafficPostSchema,  violationSchema } from "$lib/schemas/app";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, message, fail } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import DbActions from "$lib/enums/DbActions";
import ActionResultModals from "$lib/enums/ActionResultModals";

export const load: PageServerLoad = async ({
  locals: { supabase },
}) => {
  const trafficPostForm = await superValidate(zod(trafficPostSchema));
  const deleteForm = await superValidate(zod(deleteSchema));
  const trafficPost = await supabase.from("traffic_posts").select().is("deleted_by", null);

  return {
    trafficPost: trafficPost.data,
    trafficPostForm,
    deleteForm,
  };
};

export const actions: Actions = {
  add: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const trafficPostForm = await superValidate(request, zod(trafficPostSchema));

    if (!trafficPostForm.valid) {
      return message(trafficPostForm, {
        success: false,
        action: DbActions.CREATE,
      });
    }
    const user = await getCurrentUser();

    const trafficPost = {
      name: trafficPostForm.data.name,
      address: trafficPostForm.data.address,
      longitude: 120.567162810886,
      latitude:15.9761921069076,
      created_by: user!.id,
      updated_by: user!.id,
      deleted_by: null,
    }

    const { error } = await supabase.from("traffic_posts").insert(trafficPost);

    if (error) {
      return message(trafficPostForm, {
        success: false,
        action: ActionResultModals.FailCreate,
      });
    }

    return message(
      trafficPostForm,
      {
        success: true,
        action: ActionResultModals.SuccessCreate,
      }
    )
  },
  update: async ({ request, url, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(trafficPostSchema));

    if (!form.valid) {
      return message(form, {
        success: false,
        action: ""
      });
    }
    const user = await getCurrentUser();

    const trafficPost = {
      name: form.data.name,
      address: form.data.address,
      longitude: 120.567162810886,
      latitude:15.9761921069076,
      created_by: user!.id,
      updated_by: user!.id,
      deleted_by: null,
    }

    const updateTrafficPost = {
      ...trafficPost,
      updated_at: new Date(),
      updated_by: user!.id,
    }
    const { error } = await supabase.from("traffic_posts").update(updateTrafficPost).eq("id", form.data.id);

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

    const { error } = await supabase.from("traffic_posts").update({
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
