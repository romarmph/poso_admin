import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
}) => {
  const violations = await supabase
    .from("violations")
    .select()
    .order("id", { ascending: true });

  return {
    violations: violations.data,
  };
};
