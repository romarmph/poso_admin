<script lang="ts">
	import { getSupabaseContext } from "$lib/stores/clientStore";
	export let id: number;
	const { supabase } = getSupabaseContext();
	async function fetchTicketNumber(): Promise<{
		ticket_id: number;
		ticket_number: number;
	} | null> {
		const { data: manual, error: manualError } = await supabase
			.from("ticket_numbers_manual")
			.select()
			.eq("ticket_id", id);

		const { data: auto, error: autoError } = await supabase
			.from("ticket_numbers_auto")
			.select()
			.eq("ticket_id", id);

		if (manualError || autoError) {
			return null;
		}

		if (manual.length) {
			return manual[0];
		}
		return auto[0];
	}
</script>

{#await fetchTicketNumber()}
	<p>Loading...</p>
{:then response}
	{#if response}
		{response.ticket_number}
	{:else}
		<p>Error</p>
	{/if}
{:catch}
	<p>Error</p>
{/await}
