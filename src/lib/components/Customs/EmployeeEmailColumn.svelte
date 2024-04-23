<script lang="ts">
	import { onMount } from "svelte";
	import { getEmployeeAccount } from "$lib/utils/employeeDetails";

	export let user_id: string;
	let user: Types.Account;

	onMount(async () => {
		user = await getEmployeeAccount(user_id);
	});
</script>

<label for="" class="flex">
	{#if user}
		{user.email}
	{/if}
</label>
