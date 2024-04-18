<script lang="ts">
	import { X } from "lucide-svelte";
	import { overlayStore } from "$lib/stores/overlayStore";
	import { fade, slide } from "svelte/transition";

	const { close } = overlayStore;

	export let title: string;
	export let id: string;
</script>

<svelte:window
	on:keydown={(event) => (event.key === "Escape" ? close() : {})}
/>
{#if $overlayStore && $overlayStore.id === id}
	<div
		{id}
		transition:slide={{ duration: 250, axis: "x" }}
		class={`translate-x-0 open fixed top-0 end-0 transition-all duration-300 transform h-full flex flex-col z-[80] bg-white border-s dark:bg-gray-800 dark:border-gray-700`}
		tabindex="-1"
	>
		<div
			class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"
		>
			<h3 class="font-bold text-gray-800 dark:text-white">
				{title}
			</h3>
			<button
				type="button"
				class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700"
				on:click={close}
			>
				<span class="sr-only">Close modal</span>
				<X />
			</button>
		</div>
		<div class="p-4 flex-1">
			<slot data={$overlayStore.props} />
		</div>
	</div>
	<div
		transition:fade={{ duration: 250 }}
		data-hs-overlay-backdrop-template=""
		style="z-index: 79;"
		class="hs-overlay-backdrop transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900"
		on:click={close}
		role="button"
		on:keydown={(event) => (event.key === "Escape" ? close() : {})}
		tabindex="-1"
	></div>
{/if}
