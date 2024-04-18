<script lang="ts">
  import {
    Button,
    TanTable,
    EnabledStatus,
    RowActions,
    ViolationFines,
  } from "$lib/Components";
  import { DataList } from "$lib/components/Supabase/Supabase";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import { overlayStore } from "$lib/stores/overlayStore";
  import {
    ViewViolation,
    ViolationAdd,
  } from "$lib/components/Overlays/Overlays";
  import { getSupabaseContext } from "$lib/stores/clientStore.js";
  const { open } = overlayStore;

  const { supabase } = getSupabaseContext();

  const columns: ColumnDef<Types.Violation>[] = [
    {
      accessorKey: "name",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Name",
    },
    {
      accessorKey: "fine",
      cell: (info) => flexRender(ViolationFines, { fine: info.getValue() }),
      footer: (info) => info.column.id,
      header: "Fine",
    },
    {
      accessorKey: "enabled",
      cell: (info) => flexRender(EnabledStatus, { enabled: info.getValue() }),
      footer: (info) => info.column.id,
      header: "Status",
    },
    {
      accessorKey: "created_at",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Created At",
      accessorFn: (row) => new Date(row.created_at).toDateString(),
    },
    {
      accessorKey: "updated_at",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Updated At",
      accessorFn: (row) => new Date(row.updated_at).toDateString(),
    },
    {
      accessorKey: "deleted_at",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Deleted At",
      accessorFn: (row) => {
        if (row.deleted_at) {
          return new Date(row.deleted_at).toDateString();
        }
      },
    },
    {
      accessorKey: "id",
      cell: (info) =>
        flexRender(RowActions, {
          fireEdit: () => {},
          fireView: () =>
            open({
              title: "View Violation",
              component: ViewViolation,
              props: { info: info.row.original, supabase },
            }),
          fireDelete: () => {},
        }),
      header: "Actions",
      enableSorting: false,
    },
  ];

  export let data;
</script>

<svelte:head><title>Violations</title></svelte:head>

<header style="display: flex; align-items: center;">
  <h1 style="font-weight: bold;">Violation</h1>
  <div style="margin-left:auto">
    <Button
      on:click={() =>
        open({
          title: "Add Violation",
          props: {},
          component: ViolationAdd,
        })}>Add Violation</Button
    >
  </div>
</header>

<DataList table="violations" let:data initData={data.violations ?? []}>
  <TanTable {data} {columns}></TanTable>
</DataList>
