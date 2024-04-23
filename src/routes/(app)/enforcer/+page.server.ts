import { deleteSchema, employeeSchema, } from "$lib/schemas/app";
import { type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, message, setError } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import ActionResultModals from "$lib/enums/ActionResultModals";

export const load: PageServerLoad = async ({
  locals: { supabase },
}) => {
  const enforcerForm = await superValidate(zod(employeeSchema));
  const deleteForm = await superValidate(zod(deleteSchema));
  const enforcer = await supabase.from("employees").select().eq('role', 1).is('deleted_by', null);

  return {
    enforcer: enforcer.data,
    enforcerForm,
    deleteForm,
  };
};

export const actions: Actions = {
  add: async ({ request, locals: { supabase, getCurrentUser } }) => {
    const form = await superValidate(request, zod(employeeSchema));

    console.log(form);

    if (!form.valid) {
      return message(form, {
        success: false,
        action: "",
      });
    }

    const { data: userDetails, error: detailError } = await supabase.from("employees").select().eq("employee_no", form.data.employee_no);
    if (detailError) {
      return message(form, {
        success: false,
        action: ActionResultModals.FailCreate,
      }
      );
    }

    if (userDetails.length > 0) {
      return setError(form, "employee_no", "Employee number already exists")
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
      middle_name: form.data.middle_name,
      last_name: form.data.last_name,
      suffix: form.data.suffix,
      birthdate: form.data.birthdate,
      employee_no: form.data.employee_no,
      user_id: userData.user.id,
      role: 1,
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
    const form = await superValidate(request, zod(employeeSchema));

    if (!form.valid) {
      return message(form, {
        success: false,
        action: "",
      });
    }

    const { error: userError } = await supabase.auth.admin.updateUserById(form.data.id!, {
      email: form.data.email,
      password: form.data.password,
    });

    if (userError) {
      return message(form, {
        success: false,
        action: ActionResultModals.FailUpdate,
      });
    }

    const author = await getCurrentUser();

    const user = {
      first_name: form.data.first_name,
      middle_name: form.data.middle_name,
      last_name: form.data.last_name,
      suffix: form.data.suffix,
      birthdate: form.data.birthdate,
      employee_no: form.data.employee_no,
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

