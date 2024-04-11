<script lang="ts" generics="T">
  import { writable } from "svelte/store";

  import {
    createSvelteTable,
    flexRender,
    getCoreRowModel,
  } from "@tanstack/svelte-table";
  import type { ColumnDef, TableOptions } from "@tanstack/svelte-table";

  export let data: T[];
  export let columns: ColumnDef<T>[];

  const options = writable<TableOptions<T>>({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const rerender = (updated: T[]) => {
    options.update((options) => ({
      ...options,
      data: updated,
    }));
  };

  $: rerender(data);

  const table = createSvelteTable(options);
</script>

<div class="mt-2">
  <!-- Card -->
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div
          class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
        >
          <input type="text" />
          <table
            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          >
            <thead class="bg-gray-50 dark:bg-slate-800">
              {#each $table.getHeaderGroups() as headerGroup}
                <tr class="py-3">
                  {#each headerGroup.headers as header}
                    <th
                      scope="col"
                      class="text-xs py-4 px-4 font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200 text-nowrap"
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
        </div>
      </div>
    </div>
  </div>
</div>
