<script lang="ts">
	import { getSupabaseContext } from "$lib/stores/clientStore";
	import { slide, fade } from "svelte/transition";
	export let id: number;
	const { supabase } = getSupabaseContext();
	let showTooltip: boolean = false;
	async function fetchViolations() {
		const { data, error } = await supabase
			.from("ticket_violations")
			.select(
				`
				violations(*)
			`,
			)
			.eq("ticket_id", id);

		if (error) {
			return null;
		}

		const violations: Types.Violation[] = data.map((item) => {
			const violation: Types.Violation = JSON.parse(
				JSON.stringify(item.violations),
			);
			return violation;
		});

		return violations.map((violation) => violation.name).join(", ");
	}
</script>

{#await fetchViolations()}
	<p>Loading...</p>
{:then response}
	{#if response}
		<div
			class=" relative"
			on:mouseenter={() => (showTooltip = !showTooltip)}
			on:mouseleave={() => (showTooltip = !showTooltip)}
			role="group"
		>
			<p class="truncate max-w-40">
				{response}
			</p>
			{#if showTooltip}
				<div
					transition:fade
					class="absolute left-0 right-0 bottom-4 z-[9999] w-fit max-w-72"
				>
					<p
						class="bg-white p-2 border-2 border-gray-200 shadow-lg text-md text-wrap rounded-lg"
					>
						{response}
					</p>
				</div>
			{/if}
		</div>
	{:else}
		<p>Error</p>
	{/if}
{:catch}
	<p>Error</p>
{/await}
