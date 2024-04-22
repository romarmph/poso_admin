import { employeeSchema, trafficPostSchema, vehicleTypesSchema } from "$lib/schemas/app";
import { fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { superValidate, message } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
}) => {
  const form = await superValidate(zod(employeeSchema));
  const admin = await supabase.from("employees").select().eq('role', 2);

  return {
    admin: admin.data,
    form,
  };
};

export const actions: Actions = {
  add: async ({ request, locals: { supabase, getSession, getCurrentUser } }) => {
    const form = await superValidate(request, zod(employeeSchema));
    
console.log(form)
    if (!form.valid) {
      return message(form, 'Invalid form');
    }
    const user = await getCurrentUser();
    const Admin ={
      first_name: form.data.first_name,
      middle_name: form.data.middle_name,
      last_name: form.data.last_name,
      suffix: form.data.suffix,
      birthdate: form.data.birthdate,
      employee_no: form.data.employee_no,
      role: 2,
      created_by: user!.id,
      updated_by: user!.id,
      deleted_by: null,

    }

    const { error } = await supabase.from("employees").insert(Admin);

    if (error) {
      console.log(error);
      return message(form, 'Error adding Employees');
    }

    return message(
      form,
      "success",
    )
  }
}
