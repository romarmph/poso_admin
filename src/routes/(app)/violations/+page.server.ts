import { deleteSchema, violationSchema } from "$lib/schemas/app";
import { type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, message } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import ActionResultModals from "$lib/enums/ActionResultModals";

export const load: PageServerLoad = async ({
  locals: { supabase },
}) => {
  const violationForm = await superValidate(zod(violationSchema));
  const deleteForm = await superValidate(zod(deleteSchema));
  const violations = await supabase.from("violations").select().is("deleted_by", null);

  return {
    violations: violations.data,
    violationForm,
    deleteForm,
  };
};

export const actions: Actions = {
  add: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const violationForm = await superValidate(request, zod(violationSchema));

    if (!violationForm.valid) {
      return message(violationForm, {
        success: false,
        action: "",
      });
    }
    const user = await getCurrentUser();

    const violation = {
      name: violationForm.data.name,
      created_by: user!.id,
      updated_by: user!.id,
    }

    const { error } = await supabase.from("violations").insert(violation);

    if (error) {
      return message(violationForm, {
        success: false,
        action: ActionResultModals.FailCreate,
      });
    }

    return message(
      violationForm,
      {
        success: true,
        action: ActionResultModals.SuccessCreate,
      }
    )
  },
  update: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(violationSchema));

    if (!form.valid) {
      return message(form, {
        success: false,
        action: ""
      });
    }
    const user = await getCurrentUser();

    const violation = {
      name: form.data.name,
      updated_by: user!.id,
      updated_at: new Date(),
    }

    const { error } = await supabase.from("violations").update(violation).eq("id", form.data.id);

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

    const { error } = await supabase.from("violations").update({
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
