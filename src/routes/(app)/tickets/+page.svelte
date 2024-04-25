<script lang="ts">
  import { Button, TicketStatus, TanTable, RowActions } from "$lib/Components";
  import { DataList } from "$lib/components/Supabase/Supabase";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import { ViewTickets } from "$lib/components/Overlays/Overlays";
  import { overlayStore } from "$lib/stores/overlayStore.js";
  import { getSupabaseContext } from "$lib/stores/clientStore.js";
  const { open } = overlayStore;
  const { supabase } = getSupabaseContext();
  const columns: ColumnDef<Types.Ticket>[] = [
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
      accessorFn: (row) => new Date(row.birtdate).toDateString(),
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
          fireEdit: () => {},
          fireView: () => {
            open({
              props: {
                info: info.row.original as Types.Ticket,
              },
              id: "viewViolation",
            });
          },
          fireDelete: () => {},
        }),
      header: "Actions",
      enableSorting: false,
    },
  ];

  export let data;
</script>

<svelte:head><title>Tickets</title></svelte:head>

<header style="display: flex; align-items: center;">
  <h1 style="font-weight: bold;">Tickets</h1>
  <div style="margin-left:auto">
    <a href="/tickets/add">
      <Button color="teal">Add Ticket</Button>
    </a>
  </div>
</header>

<DataList table="tickets" let:data initData={data.tickets ?? []}>
  <TanTable {data} {columns}></TanTable>
</DataList>
