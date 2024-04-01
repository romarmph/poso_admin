import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
}) => {
  const violations = await supabase.from("users").select();

  const employees = await supabase.auth.admin.listUsers();

  const user = await supabase.auth.admin.getUserById(
    employees.data.users[0].id
  );

  console.log(user.data.user?.user_metadata.first_name);

  violations.data?.forEach((row) => {
    console.log(row.fine.small.a);
  });

  return {
    violations: violations.data,
    employees: employees.data.users,
  };
};
