<script lang="ts">
	import Button from "$lib/components/Base/Button.svelte";
	import TextInput from "$lib/components/Forms/TextInput.svelte";
	import { overlayStore } from "$lib/stores/overlayStore";
	import { dateProxy } from "sveltekit-superforms";

	export let info;
	export let form;
	export let errors;
	const ticket: Types.Ticket = info.info as Types.Ticket;
	const { close } = overlayStore;

	const proxy = dateProxy(form, "paid_at", {
		format: "date",
	});

	$: $form.id = ticket.id;
</script>

<input type="number" class="hidden" bind:value={$form.id} />
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
		bind:value={$form.or_number}
		required
	/>
	{#if $errors.or_number}
		<span class="text-red-500 text-sm"> {$errors.or_number} </span>
	{/if}
</div>
<div class="mb-2">
	<input
		type="number"
		id="amount_paid"
		placeholder="Amount Paid"
		class="py-3 px-4 block border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 w-full"
		bind:value={$form.amount_paid}
		required
	/>
</div>
<div class="mb-2">
	<TextInput
		id="paid_at"
		placeholder="Paid at"
		type="date"
		bind:value={$proxy}
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
			bind:checked={$form.discounted}
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
	<TextInput
		id="discounted_by"
		placeholder="Note"
		bind:value={$form.discounted_by}
	/>
</div>
<div class="flex gap-3">
	<Button
		type="button"
		color="gray"
		style="ghost"
		fullWidth={true}
		on:click={close}>Cancel</Button
	>
	<Button color="teal" fullWidth={true}>Pay</Button>
</div>
