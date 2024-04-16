import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({
  locals: { supabase, getSession },
}) => {
  const tickets = await supabase.from("tickets").select();

  return {
    tickets: tickets.data,
  };
};