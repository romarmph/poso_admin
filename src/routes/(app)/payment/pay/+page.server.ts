import { message, setError, superValidate } from "sveltekit-superforms";
import type { PageServerLoad } from "./$types";
import { zod } from "sveltekit-superforms/adapters";
import { paymentSchema } from "$lib/schemas/app";
import type { Actions } from "@sveltejs/kit";
import ActionResultModals from "$lib/enums/ActionResultModals";
import { _ } from "$env/static/private";

export const load: PageServerLoad = async ({ url, locals: { supabase } }) => {
	const id = url.searchParams.get("id");
	const ticket = await supabase.from("tickets").select().eq("id", id);
	const form = await superValidate(zod(paymentSchema));

	const { data: violations } = await supabase
		.from('tickets')
		.select(`
		ticket_violations (
		  violations (name, fine)
		)
	`).eq("id", id);
	const { data: vehicle_type } = await supabase.from("vehicle_types").select().eq("id", ticket.data![0].vehicle_type);
	const { data: enforcer } = await supabase.from("employees").select().eq("id", ticket.data![0].enforcer);

	return {
		ticket: ticket.data![0],
		violations: violations![0].ticket_violations,
		vehicleType: vehicle_type![0],
		enforcer: enforcer![0],
		form,
	}
}


export const actions: Actions = {
	pay: async ({ request, locals: { supabase, getCurrentUser } }) => {
		const form = await superValidate(request, zod(paymentSchema));
		const ticket = await supabase.from("tickets").select().eq("id", form.data.ticket_id);
		const user = await getCurrentUser();
		const failMessage = message(form, {
			action: ActionResultModals.FailCreate,
			success: false,
		});

		if (!ticket.data) {
			return message(form, {
				action: ActionResultModals.FailCreate,
				success: false,
			})
		}

		if (!form.valid) {
			return message(form, {
				action: "",
				success: false,
			})
		}

		if (form.data.discounted && form.data.discount_amount < 1) {
			return setError(form, "discount_amount", "Discount amount is required")
		}

		let amountPaid = form.data.amount_paid;
		if (form.data.discounted) {
			amountPaid += form.data.discount_amount;
		}

		if (amountPaid != ticket.data[0].fine) {
			return setError(form, "amount_paid", "Amount is not equal to total fine")
		}

		const payment = {
			ticket_id: form.data.ticket_id,
			or_number: form.data.or_number,
			discounted: form.data.discounted,
			discount_amount: form.data.discount_amount,
			amount_paid: form.data.amount_paid,
			cashier: 1,
			paid_at: new Date(),
			created_at: new Date(),
			created_by: parseInt(user!.id),
			updated_at: new Date(),
			updated_by: parseInt(user!.id),
		}

		console.log(payment);
		const { error } = await supabase.from("ticket_payment").insert(payment);

		if (error) {
			console.log(failMessage);
			return failMessage;
		}

		const { error: updateTicketError } = await supabase.from("tickets").update({
			status: "paid",
		}).eq("id", form.data.ticket_id);

		return message(form, {
			success: true,
			action: ActionResultModals.SuccessCreate,
		})
	},
}

