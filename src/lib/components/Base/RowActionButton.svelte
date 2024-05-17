<script lang="ts">
  import type { ComponentType } from "svelte";

  export let action: {
    icon: ComponentType;
    label: string;
    action: () => void;
  };
</script>

<button
  class="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
  on:click={action.action}
>
  <svelte:component this={action.icon} size="16" />
  {action.label}
</button>
