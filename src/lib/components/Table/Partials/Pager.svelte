<script lang="ts">
  import {
    ChevronRight,
    ChevronLeft,
    ChevronsRight,
    ChevronsLeft,
  } from "lucide-svelte";
  export let tableOptions;
  export let pageOptions: number[];
  export let goToPrev: () => void;
  export let goToNext: () => void;
  export let setPageIndex: (page: number) => void;
  export let canGoPrev: boolean;
  export let canGoNext: boolean;
  let maxNumberOfPages = pageOptions.slice(0, 10);
  let currentPage = $tableOptions.getState().pagination.pageIndex;

  $: currentPage = $tableOptions.getState().pagination.pageIndex;

  $: if (currentPage < 5) {
    maxNumberOfPages = pageOptions.slice(0, 10);
  } else {
    maxNumberOfPages = pageOptions.slice(currentPage - 5, currentPage + 5);
  }
</script>

<nav class="flex items-center gap-x-1">
  {#if currentPage + 1 > 10}
    <button
      type="button"
      class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      on:click={() => setPageIndex(0)}
    >
      <ChevronsLeft class="size-3.5" />
      <span>Go to first</span>
    </button>
  {/if}
  {#if canGoPrev}
    <button
      type="button"
      class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      on:click={goToPrev}
    >
      <ChevronsLeft class="size-3.5" />
      <span>Previous</span>
    </button>
  {/if}
  <div class="flex items-center gap-x-1">
    {#each maxNumberOfPages as page}
      <button
        type="button"
        class={`min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none disabled:opacity-50 dark:text-white ${currentPage === page ? "bg-blue-400 hover:bg-blue-500" : ""}`}
        aria-label={`Go to page ${page + 1}`}
        on:click={() => {
          if (currentPage !== page) setPageIndex(page);
        }}
      >
        {page + 1}
      </button>
    {/each}
  </div>
  {#if canGoNext}
    <button
      type="button"
      class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      on:click={goToNext}
    >
      <span>Next</span>
      <ChevronRight class="size-3.5" />
    </button>
  {/if}
  {#if currentPage + 1 < pageOptions.length - 10}
    <button
      type="button"
      class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      on:click={() => setPageIndex(pageOptions.length - 1)}
    >
      <span>Go to last</span>
      <ChevronsRight class="size-3.5" />
    </button>
  {/if}
</nav>
