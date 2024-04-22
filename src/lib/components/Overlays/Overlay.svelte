<script lang="ts">
	import { X } from "lucide-svelte";
	import { overlayStore } from "$lib/stores/overlayStore";
	import { fade, slide } from "svelte/transition";

	const { close } = overlayStore;

	export let title: string;
	export let id: string;
	export let type: "modal" | "canvas" = "canvas";
</script>

<svelte:window
	on:keydown={(event) => (event.key === "Escape" ? close() : {})}
/>
{#if $overlayStore && $overlayStore.id === id && type === "canvas"}
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
{/if}

{#if $overlayStore && $overlayStore.id === id && type === "modal"}
	<div
		{id}
		in:fade={{ duration: 300, delay: 100 }}
		class="hs-overlay open size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
	>
		<div
			class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center"
		>
			<div
				class="w-full max-h-full overflow-hidden flex flex-col bg-white shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70"
			>
				<div class="flex justify-between items-center py-3 px-4">
					<h3 class="font-bold text-gray-800 dark:text-white">
						{title}
					</h3>
					<button
						type="button"
						class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
						on:click={close}
					>
						<span class="sr-only">Close</span>
						<X />
					</button>
				</div>
				<div class="p-4 overflow-y-auto">
					<slot data={$overlayStore.props} />
				</div>
			</div>
		</div>
	</div>
{/if}

{#if $overlayStore && $overlayStore.id === id}
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
