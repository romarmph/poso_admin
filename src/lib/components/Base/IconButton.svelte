<script lang="ts">
  export let style: "solid" | "outline" | "ghost" | "soft" | "white" = "solid";
  export let size: "small" | "default" | "large" = "default";
  export let color: "blue" | "teal" | "green" | "red" | "yellow" | "gray" =
    "blue";

  let buttonSize = {
    small: "size-[38px]",
    default: "size-[46px]",
    large: "size-[62px]",
  };

  const base = `${buttonSize[size]} flex flex-shrink-0 justify-center items-center gap-2 text-sm font-semibold rounded-lg border border-transparent`;
</script>

{#if style === "solid"}
  <button class="{base} bg-{color}-600 text-white hover:bg-{color}-700">
    <slot />
  </button>
{:else if style === "outline"}
  <button
    class="{base} border-gray-200 text-gray-500 hover:border-{color}-600 hover:text-{color}-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-{color}-500 dark:hover:border-{color}-600"
  >
    <slot />
  </button>
{:else if style === "ghost"}
  <button
    class="{base} text-{color}-600 hover:bg-{color}-100 hover:text-{color}-800 dark:text-{color}-500 dark:hover:bg-{color}-800/30 dark:hover:text-{color}-400"
  >
    <slot />
  </button>
{:else if style === "soft"}
  <button
    class="{base} bg-{color}-100 text-{color}-800 hover:bg-{color}-200 dark:hover:bg-{color}-900 dark:text-{color}-400"
  >
    <slot />
  </button>
{:else if style === "white"}
  <button
    class="{base} border-gray-200 bg-white text-{color}-800 shadow-sm hover:bg-gray-50 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
  >
    <slot />
  </button>
{/if}
