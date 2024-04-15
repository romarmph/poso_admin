<script lang="ts">
  export let pageOptions: number[];
  export let goToPrev: () => void;
  export let goToNext: () => void;
  export let setPageIndex: (page: number) => void;
  export let canGoPrev: boolean;
  export let canGoNext: boolean;
</script>

<nav class="flex items-center gap-x-1">
  {#if canGoPrev}
    <button
      type="button"
      class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      on:click={goToPrev}
    >
      <svg
        class="flex-shrink-0 size-3.5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m15 18-6-6 6-6"></path>
      </svg>
      <span>Previous</span>
    </button>
  {/if}
  <div class="flex items-center gap-x-1">
    {#each pageOptions as page}
      <button
        type="button"
        class="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        aria-current="page"
        on:click={() => setPageIndex(page)}
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
      <svg
        class="flex-shrink-0 size-3.5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </button>
  {/if}
</nav>
