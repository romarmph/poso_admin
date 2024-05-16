<script lang="ts">
	import Button from "$lib/components/Base/Button.svelte";
	import TextInput from "$lib/components/Forms/TextInput.svelte";
	import { getSupabaseContext } from "$lib/stores/clientStore";
	import { overlayStore } from "$lib/stores/overlayStore";
	import { z } from "zod";

	export let info;
	const ticket: Types.Ticket = info.info as Types.Ticket;
	const { supabase } = getSupabaseContext();
	const { close } = overlayStore;

	let orNumberAlreadyExists: boolean = false;
	let or_number: string;
	let amount_paid: number;
	let paid_at: Date;
	let discounted: boolean;
	let discounted_by: string;

	async function payTicket() {
		const { data, error } = await supabase
			.from("tickets")
			.update({ status: "paid" })
			.eq("id", ticket.id);
		if (error) {
			console.error(error);
		} else {
			close();
		}
	}

	async function checkOrNumber() {
		const { data, error } = await supabase
			.from("tickets")
			.select("or_number")
			.eq("or_number", or_number);
		if (error) {
			console.error(error);
		}
		if (data && data.length > 0 && or_number.length) {
			orNumberAlreadyExists = true;
		} else {
			orNumberAlreadyExists = false;
		}
	}
</script>

<div
	class="px-2 py-3 mb-2 bg-gray-50 border border-gray-200 text-gray-400 rounded-lg flex justify-between"
>
	<span>Ticket Number</span>
	<span class="text-gray-700 font-medium"> {ticket.ticket_no} </span>
</div>
<div
	class="px-2 py-3 mb-2 bg-gray-50 border border-gray-200 text-gray-400 rounded-lg flex justify-between"
>
	<span>Violator</span>
	<span class="text-gray-700 font-medium"> {ticket.violator} </span>
</div>
<div class="mb-2">
	<TextInput
		id="or_number"
		placeholder="OR Number"
		bind:value={or_number}
		callback={checkOrNumber}
	/>
	{#if orNumberAlreadyExists}
		<p class="text-red-500">OR Number already exists</p>
	{/if}
</div>
<div class="mb-2">
	<TextInput
		id="amount_paid"
		placeholder="Amount Paid"
		type="number"
		bind:value={amount_paid}
	/>
</div>
<div class="mb-2">
	<TextInput
		id="paid_at"
		placeholder="Amount Paid"
		type="date"
		bind:value={paid_at}
	/>
</div>
<div class="relative flex items-start w-full mb-2">
	<div class="flex items-center h-5 mt-1">
		<input
			id="discounted"
			name="discounted"
			type="checkbox"
			class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
			aria-describedby="discounted-description"
			bind:checked={discounted}
		/>
	</div>
	<label for="discounted" class="ms-3">
		<span
			class="block text-lg font-semibold text-gray-800 dark:text-neutral-300"
			>Discounted</span
		>
		<span
			id="discounted-description"
			class="block text-sm text-gray-600 dark:text-neutral-500"
			>Check if the payment is discounted</span
		>
	</label>
</div>
<div class="mb-2">
	<TextInput id="discounted_by" placeholder="Note" bind:value={discounted_by} />
</div>
<div class="flex gap-3">
	<Button color="gray" style="ghost" fullWidth={true} on:click={close}
		>Cancel</Button
	>
	<Button
		color="teal"
		fullWidth={true}
		on:click={() => {
			checkOrNumber();
			console.log({
				or_number,
				amount_paid,
				paid_at,
				discounted,
				discounted_by,
			});
		}}>Pay</Button
	>
</div>
