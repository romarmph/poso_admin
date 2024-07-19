import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, locals: { supabase } }) => {
  const { data: years } = await supabase.rpc('get_unique_years', { column_name: 'violation_date', table_name: 'tickets' });

  let year = new Date().getFullYear();
  if (url.search.length) {
    year = Number(url.searchParams.get('year')) || year;
  }

  const { data: tickets } = await supabase.rpc('get_enforcer_tickets', { year: year });
  return {
    tickets,
    filters: {
      years,
    }
  };
}
