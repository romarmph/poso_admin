<script lang="ts">
  import { Menu } from "lucide-svelte";
  import type { ComponentType } from "svelte";
  import RowActionButton from "./RowActionButton.svelte";
  export let id: string;
  export let primaryAction: {
    icon: ComponentType;
    label: string;
    action: () => void;
  };

  export let actions: {
    hidden?: boolean;
    icon: ComponentType;
    label: string;
    action: () => void;
  }[] = [];

  let showMenu = false;
</script>

<div class="px-6 py-1.5 flex justify-end">
  <div
    class="group inline-flex items-center divide-x divide-gray-300 border border-gray-300 bg-white shadow-sm rounded-lg transition-all dark:divide-neutral-700 dark:bg-neutral-700 dark:border-neutral-700"
  >
    <div class="hs-tooltip inline-block">
      <button
        class="hs-tooltip-toggle py-1.5 px-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-s-md bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        on:click={primaryAction.action}
      >
        <svelte:component this={primaryAction.icon} size="16" />
        <span
          class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
          role="tooltip"
        >
          <span>{primaryAction.label}</span>
        </span>
      </button>
    </div>
    <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
      <button
        id="hs-table-dropdown-{id}"
        type="button"
        class="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        on:click={() => (showMenu = !showMenu)}
      >
        <Menu size="16" />
      </button>
      {#if showMenu}
        <div
          class="absolute top-4 right-2 z-10 hs-dropdown-menu bg-white shadow-lg rounded-lg mt-2 w-48 dark:bg-neutral-700 dark:border-neutral-700 dark:shadow-lg dark:text-white"
        >
          <div class="py-2 first:pt-0 last:pb-0 w-full">
            <span
              class="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-neutral-600"
            >
              Options
            </span>
            {#each actions as action}
              {#if !action.hidden}
                <RowActionButton {action} />
              {/if}
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
