<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Button from "../Base/Button.svelte";

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch("close");
	}
</script>

<Button fullWidth={true} style="soft" color="red" on:click={handleClick}>
	<slot>
		<span>Close</span>
	</slot>
</Button>
