<script lang="ts">
  import { Button, TextInput, Label } from "$lib/Components";
  import DataList from "$lib/components/Supabase/DataList.svelte";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import TanTable from "$lib/components/Table/TanTable.svelte";
  import EnabledStatus from "$lib/components/Base/EnabledStatus.svelte";
  import ViolationFines from "$lib/components/Customs/ViolationFines.svelte";
  import RowActions from "$lib/components/Table/Partials/RowActions.svelte";

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
          id: info.getValue(),
          fireEdit: () => {
            console.log("Edit");
          },
          fireView: () => {
            console.log("View");
          },
          fireDelete: () => {
            console.log("Delete");
          },
        }),
      header: "Actions",
      enableSorting: false,
    },
  ];

  export let data;
</script>

<header style="display: flex; align-items: center;">
  <h1 style="font-weight: bold;">Violation</h1>
  <div style="margin-left:auto">
    <!-- <Button data-hs-overlay="#hs-add-violation-modal">Add Violation</Button> -->
    <Button>Add Violation</Button>
  </div>
</header>

<DataList table="violations" let:data initData={data.violations ?? []}>
  <TanTable {data} {columns}></TanTable>
</DataList>
