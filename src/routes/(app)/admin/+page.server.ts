import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({
  locals: { supabase },
}) => {

  const employees = await supabase.from("employees").select().neq('role', 1);
  return {
    employees: employees.data,
  };
};
