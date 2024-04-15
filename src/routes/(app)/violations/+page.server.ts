import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
}) => {
  const violations = await supabase.from("users").select();

  return {
    violations: violations.data,
  };
};
