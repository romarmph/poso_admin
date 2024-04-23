<script lang="ts">
	import Button from "$lib/components/Base/Button.svelte";
	import ComboInput from "$lib/components/Base/ComboInput.svelte";
	import TextInput from "$lib/components/Forms/TextInput.svelte";
	import { createEventDispatcher } from "svelte";

	export let initData: any | null;
	export let form;
	export let errors;

	const dispatch = createEventDispatcher();

	if (Object.keys(initData).length) {
		$form = {
			...initData.info.fine,
			name: initData.info.name,
			id: initData.info.id,
			enabled: initData.info.enabled,
		};
	}
</script>

<div class="flex-1">
	<div>
		<label for="">Violation Name</label>
		<TextInput id="name" bind:value={$form.name} required />
	</div>
	<h3 class="my-3">Big Vehicle Offenses</h3>
	<ul>
		<li class="mb-3">
			<ComboInput
				id="big_1"
				type="number"
				label="1st Offense"
				placeholder="0"
				bind:value={$form.big.a}
			/>
			{#if $errors.big && $errors.big.a}
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
				bind:value={$form.big.b}
			/>
			{#if $errors.big && $errors.big.b}
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
				bind:value={$form.big.c}
			/>
			{#if $errors.big && $errors.big.c}
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
				bind:value={$form.small.a}
			/>
			{#if $errors.small && $errors.small.a}
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
				bind:value={$form.small.b}
			/>
			{#if $errors.small && $errors.small.b}
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
				bind:value={$form.small.c}
			/>
			{#if $errors.small && $errors.small.c}
				<span class="text-red-500 text-sm">
					{$errors.small.c}
				</span>
			{/if}
		</li>
		{#if $form.id}
			<li class="mb-3">
				<div class="flex">
					<input
						type="checkbox"
						class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
						id="enabled"
						name="enabled"
						bind:checked={$form.enabled}
					/>
					<label
						for="hs-default-checkbox"
						class="text-sm text-gray-500 ms-3 dark:text-neutral-400"
						>Enable</label
					>
					<pre></pre>
				</div>
			</li>
		{/if}
	</ul>
</div>
<div class="flex justify-stretch items-center gap-4">
	<Button
		type="button"
		style="soft"
		color="gray"
		fullWidth={true}
		on:click={() => dispatch("close")}>Close</Button
	>
	<Button fullWidth={true} type="submit">Save</Button>
</div>
