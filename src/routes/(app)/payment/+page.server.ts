import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { message, setError, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { paymentSchema } from "$lib/schemas/app";
import ActionResultModals from "$lib/enums/ActionResultModals";

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const unpaidTickets = await supabase.from("tickets").select().in("status", ["unpaid", "overdue", "transferred"]);
	const payments = await supabase.from("tickets").select().in("status", ["paid"]);
	const paymentForm = await superValidate(zod(paymentSchema));

	return {
		unpaidTickets: unpaidTickets.data,
		payments: payments.data,
		paymentForm,
	}
}

export const actions: Actions = {
	pay: async ({ request, locals: { supabase, getCurrentUser } }) => {
		const form = await superValidate(request, zod(paymentSchema));
		const user = await getCurrentUser();

		if (!form.valid) {
			return message(form, {
				success: false,
				action: "",
			});
		}

		const { data } = await supabase
			.from("tickets")
			.select("or_number")
			.eq("or_number", form.data.or_number);

		if (data && data.length > 0 && form.data.or_number.length) {
			return setError(form, 'or_number', 'OR Number already exists')
		}

		const { data: updateData, error } = await supabase.from("tickets").update({
			or_number: form.data.or_number,
			amount_paid: form.data.amount_paid,
			paid_at: form.data.paid_at,
			discounted: form.data.discounted,
			discounted_by: form.data.discounted_by,
			updated_by: user.id,
			updated_at: new Date(),
			status: "paid",
		}).eq("id", form.data.id).select();

		if (error) {
			return message(form, {
				success: false,
				action: ActionResultModals.FailUpdate,
			})
		}

		return message(form, {
			success: false,
			action: ActionResultModals.SuccessCreate,
		})
	}
}
