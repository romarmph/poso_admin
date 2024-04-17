<script lang="ts" generics="T">
  import { writable } from "svelte/store";

  import {
    createSvelteTable,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
  } from "@tanstack/svelte-table";
  import type {
    ColumnDef,
    TableOptions,
    FilterFn,
    SortingState,
    OnChangeFn,
  } from "@tanstack/svelte-table";
  import { rankItem } from "@tanstack/match-sorter-utils";
  import Pager from "./Partials/Pager.svelte";
  import TextInput from "../Forms/TextInput.svelte";
  import { ChevronDown, ChevronUp } from "lucide-svelte";

  export let data: T[];
  export let columns: ColumnDef<T>[];

  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({ itemRank });
    return itemRank.passed;
  };

  columns = columns.map((col) => {
    return {
      ...col,
      filterFn: fuzzyFilter,
    };
  });

  let sorting: SortingState = [];

  const setSorting: OnChangeFn<SortingState> = (updater) => {
    if (updater instanceof Function) {
      sorting = updater(sorting);
    } else {
      sorting = updater;
    }
    options.update((old) => ({
      ...old,
      state: {
        ...old.state,
        sorting,
      },
    }));
  };

  const options = writable<TableOptions<T>>({
    data: data,
    columns: columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    enableMultiRowSelection: true,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  const rerender = (updated: T[]) => {
    options.update((options) => ({
      ...options,
      data: updated,
    }));
  };

  let filter = "";

  const table = createSvelteTable(options);
  let pageSizes = [10, 25, 50, 100];
  let currentPageSize = pageSizes[0];

  function handlePageSize(size: number) {
    currentPageSize = size;
    $table.setPageSize(size);
  }

  function getCurrentPageRowCount() {}

  $: rerender(data);
  $: $table.setGlobalFilter(filter);
</script>

<div class="mt-2">
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div
          class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
        >
          <div class="flex justify-between p-4">
            <TextInput id="search" placeholder="Search" bind:value={filter} />
          </div>
          <table
            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          >
            <thead class="bg-gray-50 dark:bg-slate-800">
              {#each $table.getHeaderGroups() as headerGroup}
                <tr class="py-3">
                  {#each headerGroup.headers as header}
                    <th
                      scope="col"
                      class="text-xs text-left font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200 text-nowrap"
                    >
                      {#if !header.isPlaceholder}
                        <button
                          class="p-4 w-full text-left flex gap-6 hover:bg-gray-100 active:bg-gray-200"
                          class:cursor-pointer={header.column.getCanSort()}
                          class:select-none={header.column.getCanSort()}
                          on:click={header.column.getToggleSortingHandler()}
                        >
                          <svelte:component
                            this={flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                          />
                          {#if header.column.getIsSorted().toString() === "asc"}
                            <ChevronUp size={16} />
                          {:else if header.column
                            .getIsSorted()
                            .toString() === "desc"}
                            <ChevronDown size={16} />
                          {/if}
                        </button>
                      {/if}
                    </th>
                  {/each}
                </tr>
              {/each}
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              {#each $table.getRowModel().rows as row}
                <tr>
                  {#each row.getVisibleCells() as cell}
                    <td class="size-px whitespace-nowrap">
                      <div class="px-4 py-2">
                        <label for="hs-at-with-checkboxes-1" class="flex">
                          <svelte:component
                            this={flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          />
                        </label>
                      </div>
                    </td>
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>
          <div class="flex justify-between p-4">
            <div
              class="hs-dropdown relative inline-flex [--placement:top-left]"
            >
              <button
                id="hs-dropup"
                type="button"
                class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              >
                {currentPageSize}
                <svg
                  class="hs-dropdown-open:rotate-180 size-4"
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
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </button>

              <div
                class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
                aria-labelledby="hs-dropup"
              >
                {#each pageSizes as size}
                  <button
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    on:click={() => handlePageSize(size)}
                  >
                    {size}
                  </button>
                {/each}
              </div>
            </div>

            <Pager
              pageOptions={$table.getPageOptions()}
              goToNext={$table.nextPage}
              goToPrev={$table.previousPage}
              canGoNext={$table.getCanNextPage()}
              canGoPrev={$table.getCanPreviousPage()}
              setPageIndex={$table.setPageIndex}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
