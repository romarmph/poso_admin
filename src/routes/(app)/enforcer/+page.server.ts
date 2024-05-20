import { deleteSchema, enforcerSchema, } from "$lib/schemas/app";
import { type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, message, setError } from "sveltekit-superforms";
import { zod, } from "sveltekit-superforms/adapters";
import ActionResultModals from "$lib/enums/ActionResultModals";
import Roles from "$lib/enums/Roles";

export const load: PageServerLoad = async ({
  locals: { supabase },
}) => {
  const enforcerForm = await superValidate(zod(enforcerSchema));
  const deleteForm = await superValidate(zod(deleteSchema));
  const enforcer = await supabase.from("employees").select().eq('role', Roles.ENFORCER).is('deleted_by', null);

  return {
    enforcer: enforcer.data,
    enforcerForm,
    deleteForm,
  };
};

export const actions: Actions = {
  add: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(enforcerSchema));
    if (!form.valid) {
      return message(form, {
        success: false,
        action: "",
      });
    }
    const author = await getCurrentUser();

    const user = {
      first_name: form.data.first_name,
      last_name: form.data.last_name,
      role: Roles.ENFORCER,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
      created_by: author!.id,
      updated_by: author!.id,
      deleted_by: null,
    }
    const { error } = await supabase.from("employees").insert(user)

    if (error) {
      return message(form, {
        success: false,
        action: ActionResultModals.FailCreate,
      })
    }

    return message(
      form, {
      success: true,
      action: ActionResultModals.SuccessCreate,
    }
    )
  },
  update: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(enforcerSchema));
    if (!form.valid) {
      return message(form, {
        success: false,
        action: "",
      });
    }
    const author = await getCurrentUser();

    const user = {
      first_name: form.data.first_name,
      last_name: form.data.last_name,
      status: form.data.status,
      updated_at: new Date(),
      updated_by: author!.id,
    }
    const { error } = await supabase.from("employees").update(user).eq("id", form.data.id!);

    if (error) {
      return message(form, {
        success: false,
        action: ActionResultModals.FailUpdate,
      })
    }

    return message(
      form, {
      success: true,
      action: ActionResultModals.SuccessUpdate,
    }
    )
  },
  delete: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(deleteSchema));
    const user = await getCurrentUser();

    const { error } = await supabase.from("employees").update({
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

