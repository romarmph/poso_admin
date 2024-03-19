<script lang="ts">
  export let type: "info" | "danger" | "success" | "warning" | "default" =
    "default";
</script>

{#if type == "info"}
  <div
    class="bg-blue-100 border border-blue-200 text-sm text-blue-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-blue-500"
    role="alert"
  >
    <slot />
  </div>
{:else if type == "success"}
  <div
    class="bg-teal-100 border border-teal-200 text-sm text-teal-800 rounded-lg p-4 dark:bg-teal-800/10 dark:border-teal-900 dark:text-teal-500"
    role="alert"
  >
    <slot />
  </div>
{:else if type == "danger"}
  <div
    class="bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500"
    role="alert"
  >
    <slot />
  </div>
{:else if type == "warning"}
  <div
    class="bg-yellow-100 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500"
    role="alert"
  >
    <slot />
  </div>
{:else}
  <div
    class="bg-gray-50 border border-gray-200 text-sm text-gray-600 rounded-lg p-4 dark:bg-white/[.05] dark:border-white/10 dark:text-gray-400"
    role="alert"
  >
    <slot />
  </div>
{/if}
