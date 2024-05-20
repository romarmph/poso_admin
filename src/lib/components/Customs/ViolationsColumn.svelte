<script lang="ts">
	import { writable } from "svelte/store";
	import { getSupabaseContext } from "$lib/stores/clientStore";
	import { fade } from "svelte/transition";
	export let violations: number[];
	const { supabase } = getSupabaseContext();

	let showTooltip: boolean = false;
	let violationNames = writable<string[]>([]);

	Promise.all(
		violations.map(async (id) => {
			const { data, error } = await supabase
				.from("violations")
				.select("name")
				.eq("id", id)
				.single();
			if (error) {
				console.error(error);
			} else {
				return data.name;
			}
		}),
	).then((names) => {
		violationNames.set(names);
	});
</script>

<div
	class=" relative"
	on:mouseenter={() => (showTooltip = !showTooltip)}
	on:mouseleave={() => (showTooltip = !showTooltip)}
	role="group"
>
	<p class="truncate max-w-40">
		{$violationNames.join(", ")}
	</p>
	{#if showTooltip}
		<div
			transition:fade
			class="absolute left-0 right-0 bottom-4 z-[9999] w-fit max-w-72"
		>
			<p
				class="bg-white p-2 border-2 border-gray-200 shadow-lg text-md text-wrap rounded-lg"
			>
				{$violationNames.join(", ")}
			</p>
		</div>
	{/if}
</div>
