<script lang="ts">
	import Button from "$lib/components/Base/Button.svelte";
	import ComboInput from "$lib/components/Base/ComboInput.svelte";
	import TextInput from "$lib/components/Forms/TextInput.svelte";
	import CloseButton from "../CloseButton.svelte";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	let form;

	function handleClose() {
		dispatch("close");
	}

	function handleSubmit() {
		dispatch("submit");
	}
</script>

<form bind:this={form} class="w-[500px] h-full flex flex-col">
	<div class="flex-1">
		<div>
			<label for="">Violation Name</label>
			<TextInput id="violation_name" required />
		</div>
		<h3 class="my-3">Big Vehicle Offenses</h3>
		<ul>
			<li class="mb-3">
				<ComboInput
					id="big-1st-offense"
					type="number"
					label="1st Offense"
					placeholder="0"
					min="1"
				/>
			</li>
			<li class="mb-3">
				<ComboInput
					id="big-2nd-offense"
					type="number"
					label="2nd Offense"
					placeholder="0"
					min="1"
				/>
			</li>
			<li class="mb-3">
				<ComboInput
					id="big-3rd-offense"
					type="number"
					label="3rd Offense"
					placeholder="0"
					min="1"
				/>
			</li>
		</ul>
		<h3 class="my-3">Small Vehicle Offenses</h3>
		<ul>
			<li class="mb-3">
				<ComboInput
					id="small-1st-offense"
					type="number"
					label="1st Offense"
					placeholder="0"
					min="1"
				/>
			</li>
			<li class="mb-3">
				<ComboInput
					id="small-2nd-offense"
					type="number"
					label="2nd Offense"
					placeholder="0"
					min="1"
				/>
			</li>
			<li class="mb-3">
				<ComboInput
					id="small-2rd-offense"
					type="number"
					label="3rd Offense"
					placeholder="0"
					min="1"
				/>
			</li>
		</ul>
	</div>
	<div class="flex justify-stretch items-center gap-4">
		<CloseButton on:close={handleClose}>Close</CloseButton>
		<Button fullWidth={true} on:click={handleSubmit}>Save</Button>
	</div>
</form>
