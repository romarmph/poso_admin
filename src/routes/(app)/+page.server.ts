import type { PageServerLoad } from "./$types";
import makeDateRangeFilter from "$lib/utils/makeDateRangeFilter";

export const load: PageServerLoad = async ({ url, locals: { supabase } }) => {
  const { data: years } = await supabase.rpc('get_unique_years', { column_name: 'violation_date', table_name: 'tickets' });

  let year = new Date().getFullYear();
  if (url.search.length) {
    year = Number(url.searchParams.get('year')) || year;
  }
  return {
    filters: {
      years,
    }
  };
}
