import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
}) => {

  const employees = await supabase.from("employees").select().eq('role', 1);
console.log(employees.data)
  return {
    employees: employees.data,
  };
};