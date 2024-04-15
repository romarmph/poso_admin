<script lang="ts">
	export let fine: {
		big: {
			[key: string]: any;
		};
		small: {
			[key: string]: any;
		};
	};
</script>

{#if Object.keys(fine.big).length > 0}
	<div class="bg-white p-1 rounded-md mx-2 shadow border border-gray-200">
		<span class="text-dark text-center text-xs">Big </span>
		{#each Object.values(fine.big) as value, index}
			<span class="mx-2 text-xs text-red-500"
				>{index == 0 ? "1st" : index == 1 ? "2nd" : "3rd"} {value}</span
			>
		{/each}
	</div>
{/if}
{#if Object.keys(fine.small).length > 0}
	<div class="bg-white p-1 rounded-md mx-2 shadow border border-gray-200">
		<span class="text-dark text-center text-xs">Small </span>
		{#each Object.values(fine.small) as value, index}
			<span class="mx-2 text-xs text-blue-500"
				>{index == 0 ? "1st" : index == 1 ? "2nd" : "3rd"} {value}</span
			>
		{/each}
	</div>
{/if}
