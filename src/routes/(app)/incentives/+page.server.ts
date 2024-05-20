import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ request, url, locals: { supabase } }) => {
	const year = url.search.length ? url.searchParams.get('year') : 2024;
	const quarter = url.search.length ? url.searchParams.get('quarter') : 1;
	const { data: uniqueYears, error: uniqueYearsError } = await supabase.rpc('get_unique_years', { column_name: 'violation_date', table_name: 'tickets' });
	const { data: employeeIncentives, error: employeeIncentivesError } = await supabase.rpc('get_employee_stats', { year: Number(year), quarter: Number(quarter) });

	return {
		uniqueYears,
		employeeIncentives,
		query: {
			year,
			quarter,
		}
	};
}
