import { deleteSchema, adminSchema, } from "$lib/schemas/app";
import { type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, message, setError } from "sveltekit-superforms";
import { zod, } from "sveltekit-superforms/adapters";
import ActionResultModals from "$lib/enums/ActionResultModals";
import Roles from "$lib/enums/Roles";

export const load: PageServerLoad = async ({
  locals: { supabase },
}) => {
  const adminForm = await superValidate(zod(adminSchema));
  const deleteForm = await superValidate(zod(deleteSchema));
  const admin = await supabase.from("employees").select().eq('role', Roles.STAFF).is('deleted_by', null);
  return {
    admin: admin.data,
    adminForm,
    deleteForm,
  };
};

export const actions: Actions = {
  add: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(adminSchema));
    if (!form.valid) {
      return message(form, {
        success: false,
        action: "",
      });
    }

    const { data: userData, error: emailError } = await supabase.auth.admin.createUser({ email: form.data.email, password: form.data.password, email_confirm: true });
    if (emailError) {
      if (emailError.message.search('already been registered')) {
        return setError(form, "email", emailError.message)
      }
      return message(form, {
        success: false,
        action: ActionResultModals.FailCreate,
      });
    }

    const author = await getCurrentUser();

    const user = {
      first_name: form.data.first_name,
      last_name: form.data.last_name,
      user_id: userData.user.id,
      role: Roles.STAFF,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
      created_by: author!.id,
      updated_by: author!.id,
      deleted_by: null,
    }
    const { error } = await supabase.from("employees").insert(user)

    if (error) {
      await supabase.auth.admin.deleteUser(userData.user.id, false);
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
    const updateSchema = adminSchema.extend({
      password: adminSchema.shape.password.optional(),
    })
    const form = await superValidate(request, zod(updateSchema));


    if (!form.valid) {
      return message(form, {
        success: false,
        action: "",
      });
    }


    const { data: userData } = await supabase.auth.admin.getUserById(form.data.user_id!);
    if (userData.user!.email !== form.data.email) {
      const { error } = await supabase.auth.admin.updateUserById(form.data.user_id!, {
        email: form.data.email,
      });

      if (error) {
        return setError(form, "email", "Email already exists")

      }
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

