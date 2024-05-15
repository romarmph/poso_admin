<script lang="ts">
	import Button from "$lib/components/Base/Button.svelte";
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
		};
	}
</script>

<div class="pb-2">
	<label for="">Violation Name</label>
	<TextInput id="name" bind:value={$form.name} required />
	{#if $errors.name}
		<p class="text-red-500 text-sm">{$errors.name}</p>
	{/if}
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
