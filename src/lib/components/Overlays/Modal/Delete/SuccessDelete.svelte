<script lang="ts">
	import { Button } from "$lib/Components";
	import { createEventDispatcher } from "svelte";
	import { CheckCircle } from "lucide-svelte";
	import { overlayStore } from "$lib/stores/overlayStore";
	const dispatch = createEventDispatcher();
</script>

<div class="flex flex-col justify-center items-center text-teal-500">
	<CheckCircle size={64} />
	<h3 class="text-teal-500 text-2xl font-bold text-center mt-4">Success</h3>
	<p class="text-lg text-gray-600 text-center mt-2 mb-12">
		Item was deleted successfully.
	</p>
	<Button
		type="button"
		style="soft"
		color="teal"
		on:click={() => dispatch("close")}>Okay, thanks</Button
	>
</div>
