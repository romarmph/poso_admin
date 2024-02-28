<script lang="ts">
  import { getContext } from "svelte";

  const modalId = getContext("modalId");
</script>

<div
  class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700"
>
  <slot>
    <button
      type="button"
      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      data-hs-overlay="#{modalId}"
    >
      Close
    </button>
    <button
      type="button"
      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      Save changes
    </button>
  </slot>
</div>
