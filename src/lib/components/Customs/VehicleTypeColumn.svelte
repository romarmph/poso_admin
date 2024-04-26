<script lang="ts">
	import { getSupabaseContext } from "$lib/stores/clientStore";
	export let id: number;
	const { supabase } = getSupabaseContext();
	async function fetchVehicleType(): Promise<Types.VehicleTypes | null> {
		const { data, error } = await supabase
			.from("vehicle_types")
			.select()
			.eq("id", id);

		if (error) {
			return null;
		}
		return data[0];
	}
</script>

{#await fetchVehicleType()}
	<p>Loading...</p>
{:then response}
	{#if response}
		<p>{response.type}</p>
	{:else}
		<p>Error</p>
	{/if}
{:catch}
	<p>Error</p>
{/await}
