import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ request, locals: { supabase } }) => {
	const { data, error } = await supabase.rpc('get_incentives_by_quarter', { year: 2024 });

	return {
		incentives: data,
	};
}
