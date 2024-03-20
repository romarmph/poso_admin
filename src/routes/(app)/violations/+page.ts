import type { PageLoad } from "./$types";
import { supabaseClient as supabase } from "$lib/Server";

export const load: PageLoad = async () => {
  const violations = await supabase
    .from("violations")
    .select()
    .order("id", { ascending: true });

  return {
    violations: violations.data,
  };
};
