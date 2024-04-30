<script lang="ts">
	import { getSupabaseContext } from "$lib/stores/clientStore";
	export let id: number;
	const { supabase } = getSupabaseContext();
	async function fetchEnforcer(): Promise<Types.Employees | null> {
		const { data, error } = await supabase
			.from("employees")
			.select()
			.eq("id", id);
		if (error) {
			return null;
		}
		return data[0];
	}
</script>

{#await fetchEnforcer()}
	<p>Loading...</p>
{:then response}
	{#if response}
		<p>{response.first_name} {response.last_name}</p>
	{:else}
		<p>Error</p>
	{/if}
{:catch}
	<p>Error</p>
{/await}
