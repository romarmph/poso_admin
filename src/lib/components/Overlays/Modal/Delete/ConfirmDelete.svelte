<script lang="ts">
	import { Button } from "$lib/Components";
	import { createEventDispatcher } from "svelte";
	import { AlertTriangle } from "lucide-svelte";
	export let form;
	export let info;
	$form.id = info.info;
	const dispatch = createEventDispatcher();
</script>

<AlertTriangle size={64} />
<h3 class="text-red-500 text-2xl font-bold text-center mt-4">Deleting Item</h3>
<p class="text-lg text-gray-600 text-center mt-2 mb-12">
	Are you sure you want to continue?
</p>
<input type="number" bind:value={$form.id} name="id" class="hidden" />
<div class="flex gap-3 justify-stretch w-full">
	<Button
		type="button"
		style="ghost"
		color="gray"
		fullWidth={true}
		on:click={() => dispatch("close")}>No, cancel</Button
	>
	<Button fullWidth={true} type="submit" color="red">Yes, delete</Button>
</div>
