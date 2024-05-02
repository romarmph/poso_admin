import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const payments = await supabase.from("tickets").select().in("status", ["unpaid", "overdue", "transferred"]);

	return {
		payments: payments.data,
	}
}
