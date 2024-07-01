import type { PageServerLoad } from "./$types";

function makeDateRangeFilter(month: number, year: number) {
	return {
		start: new Date(year, month, 2).toISOString().split('T')[0],
		end: new Date(year, month + 1, 1).toISOString().split('T')[0],
	}
}

export const load: PageServerLoad = async ({ request, url, locals: { supabase } }) => {
	let year = new Date().getFullYear();
	let month = new Date().getMonth() - 1;
	let search = "";

	if (url.search.length) {
		year = Number(url.searchParams.get('year')) || year;
		month = Number(url.searchParams.get('month')) || month;
		search = url.searchParams.get('search') || search;
	}
	const dateRange = makeDateRangeFilter(month, year);
	const { data: uniqueYears } = await supabase.rpc('get_unique_years', { column_name: 'violation_date', table_name: 'tickets' });
	const { data: employeeIncentives } = await supabase.rpc('calculate_monthly_incentives', { start_date: dateRange.start, end_date: dateRange.end });
	const { data: months } = await supabase.rpc('get_months_with_tickets', { ticket_year: new Date().getFullYear() })
	console.log(employeeIncentives);
	return {
		uniqueYears,
		employeeIncentives,
		months,
		query: {
			year,
			month,
		}
	};
}
