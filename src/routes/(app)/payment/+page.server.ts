import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const unpaidTickets = await supabase.from("tickets").select().in("status", ["unpaid", "overdue", "transferred"]);
	const payments = await supabase.from("ticket_payment").select(`*, tickets(*)`);
	return {
		unpaidTickets: unpaidTickets.data,
		payments: payments.data,
	}
}
