<script lang="ts" generics="T">
  import { writable } from "svelte/store";

  import {
    createSvelteTable,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
  } from "@tanstack/svelte-table";
  import type {
    ColumnDef,
    TableOptions,
    FilterFn,
  } from "@tanstack/svelte-table";
  import { rankItem } from "@tanstack/match-sorter-utils";
  import Pager from "./Pager.svelte";
  import TextInput from "../Forms/TextInput.svelte";

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

  const options = writable<TableOptions<T>>({
    data: data,
    columns: columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    enableMultiRowSelection: true,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  const rerender = (updated: T[]) => {
    options.update((options) => ({
      ...options,
      data: updated,
    }));
  };

  let filter = "";

  $: rerender(data);
  $: $table.setGlobalFilter(filter);

  const table = createSvelteTable(options);
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
                      class="text-xs text-left py-4 px-4 font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200 text-nowrap"
                    >
                      {#if !header.isPlaceholder}
                        <svelte:component
                          this={flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        />
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
