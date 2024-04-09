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

<table>
  <thead>
    {#each $table.getHeaderGroups() as headerGroup}
      <tr>
        {#each headerGroup.headers as header}
          <th>
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
  <tbody>
    {#each $table.getRowModel().rows as row}
      <tr>
        {#each row.getVisibleCells() as cell}
          <td>
            <svelte:component
              this={flexRender(cell.column.columnDef.cell, cell.getContext())}
            />
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
