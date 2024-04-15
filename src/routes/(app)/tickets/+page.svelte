<script lang="ts">
  import { Button } from "$lib/Components";
  import DataList from "$lib/components/Supabase/DataList.svelte";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import TanTable from "$lib/components/Table/TanTable.svelte";
  import EnabledStatus from "$lib/components/Base/EnabledStatus.svelte";
  import ViolationFines from "$lib/components/Customs/ViolationFines.svelte";
  import RowActions from "$lib/components/Table/Partials/RowActions.svelte";
  import TicketStatus from "$lib/components/Base/TicketStatus.svelte";

  const columns: ColumnDef<Types.Tickets>[] = [
    {
      accessorKey: "first_name",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "First Name",
    },
    {
      accessorKey: "middle_name",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Middle Name",
    },
    {
      accessorKey: "last_name",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Last Name",
    },
    {
      accessorKey: "suffix",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Suffix",
    },
    {
      accessorKey: "birthdate",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Birth Date",
      accessorFn: (row) => new Date(row.birthdate).toDateString(),
    },
    {
      accessorKey: "status",
      cell: (info) => flexRender(TicketStatus, { status: info.getValue() }),
      footer: (info) => info.column.id,
      header: "Status",
    },
    {
      accessorKey: "violation_date",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Violation Date",
      accessorFn: (row) => new Date(row.violation_date).toDateString(),
    },
    {
      accessorKey: "violation_time",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Violation Time",
    },
    {
      accessorKey: "vehicle_type_id",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Vehicle Type",
    },
    {
      accessorKey: "enforcer_id",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Enforcer",
    },

    {
      accessorKey: "created_at",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Created At",
      accessorFn: (row) => new Date(row.created_at).toDateString(),
    },
    {
      accessorKey: "created_by",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Created By",
    },
    {
      accessorKey: "updated_at",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Updated At",
      accessorFn: (row) => new Date(row.updated_at).toDateString(),
    },
    {
      accessorKey: "updated_by",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Updated By",
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
  <h1 style="font-weight: bold;">Tickets</h1>
  <div style="margin-left:auto">
    <Button color="teal">Add Ticket</Button>
  </div>
</header>

<DataList table="tickets" let:data initData={data.tickets ?? []}>
  <TanTable {data} {columns}></TanTable>
</DataList>
