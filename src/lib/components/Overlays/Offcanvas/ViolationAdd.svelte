<script lang="ts">
	import Button from "$lib/components/Base/Button.svelte";
	import ComboInput from "$lib/components/Base/ComboInput.svelte";
	import TextInput from "$lib/components/Forms/TextInput.svelte";
	import { createEventDispatcher } from "svelte";

	export let superForm;
	export let errors;

	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch("close");
	}
</script>

<div class="flex-1">
	<div>
		<label for="">Violation Name</label>
		<TextInput id="name" bind:value={$superForm.name} required />
	</div>
	<h3 class="my-3">Big Vehicle Offenses</h3>
	<ul>
		<li class="mb-3">
			<ComboInput
				id="big_1"
				type="number"
				label="1st Offense"
				placeholder="0"
				bind:value={$superForm.big.a}
			/>
			{#if $errors.big}
				<span class="text-red-500 text-sm">
					{$errors.big.a}
				</span>
			{/if}
		</li>
		<li class="mb-3">
			<ComboInput
				id="big_2"
				type="number"
				label="2nd Offense"
				placeholder="0"
				bind:value={$superForm.big.b}
			/>
			{#if $errors.big}
				<span class="text-red-500 text-sm">
					{$errors.big.b}
				</span>
			{/if}
		</li>
		<li class="mb-3">
			<ComboInput
				id="big_3"
				type="number"
				label="3rd Offense"
				placeholder="0"
				bind:value={$superForm.big.c}
			/>
			{#if $errors.big}
				<span class="text-red-500 text-sm">
					{$errors.big.c}
				</span>
			{/if}
		</li>
	</ul>
	<h3 class="my-3">Small Vehicle Offenses</h3>
	<ul>
		<li class="mb-3">
			<ComboInput
				id="small_1"
				type="number"
				label="1st Offense"
				placeholder="0"
				bind:value={$superForm.small.a}
			/>
			{#if $errors.small}
				<span class="text-red-500 text-sm">
					{$errors.small.a}
				</span>
			{/if}
		</li>
		<li class="mb-3">
			<ComboInput
				id="small_2"
				type="number"
				label="2nd Offense"
				placeholder="0"
				bind:value={$superForm.small.b}
			/>
			{#if $errors.small}
				<span class="text-red-500 text-sm">
					{$errors.small.b}
				</span>
			{/if}
		</li>
		<li class="mb-3">
			<ComboInput
				id="small_3"
				type="number"
				label="3rd Offense"
				placeholder="0"
				bind:value={$superForm.small.c}
			/>
			{#if $errors.small}
				<span class="text-red-500 text-sm">
					{$errors.small.c}
				</span>
			{/if}
		</li>
	</ul>
</div>
<div class="flex justify-stretch items-center gap-4">
	<Button
		type="button"
		style="soft"
		color="gray"
		fullWidth={true}
		on:click={handleClose}>Close</Button
	>
	<Button fullWidth={true} type="submit">Save</Button>
</div>
