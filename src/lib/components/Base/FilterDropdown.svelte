<script lang="ts">
    import { Pencil } from "lucide-svelte";
</script>
<div class="hs-dropdown relative inline-block [--placement:bottom-right]" data-hs-dropdown-auto-close="inside">
    <button id="hs-as-table-table-filter-dropdown" type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <slot/>
        Filter
      <span class="ps-2 text-xs font-semibold text-blue-600 border-s border-gray-200 dark:border-gray-700 dark:text-blue-500">
        1
      </span>
    </button>
    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-10 bg-white shadow-md rounded-lg mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-as-table-table-filter-dropdown">
      <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <label for="hs-as-filters-dropdown-all" class="flex py-2.5 px-3">
          <input type="checkbox" class="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-all" checked>
          <span class="ms-3 text-sm text-gray-800 dark:text-gray-200">All</span>
        </label>
        <label for="hs-as-filters-dropdown-paid" class="flex py-2.5 px-3">
          <input type="checkbox" class="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-paid">
          <span class="ms-3 text-sm text-gray-800 dark:text-gray-200">Paid</span>
        </label>
        <label for="hs-as-filters-dropdown-pending" class="flex py-2.5 px-3">
          <input type="checkbox" class="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-pending">
          <span class="ms-3 text-sm text-gray-800 dark:text-gray-200">Pending</span>
        </label>
        <label for="hs-as-filters-dropdown-declined" class="flex py-2.5 px-3">
          <input type="checkbox" class="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-declined">
          <span class="ms-3 text-sm text-gray-800 dark:text-gray-200">Declined</span>
        </label>
      </div>
    </div>
  </div>