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

<table></table>
