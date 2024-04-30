<script lang="ts">
  import { Button, TicketStatus, TanTable } from "$lib/Components";
  import { DataList } from "$lib/components/Supabase/Supabase";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import { Overlay, ViewTickets } from "$lib/components/Overlays/Overlays";
  import { overlayStore } from "$lib/stores/overlayStore.js";
  import { getSupabaseContext } from "$lib/stores/clientStore.js";
  import VehicleTypeColumn from "$lib/components/Customs/VehicleTypeColumn.svelte";
  import EnforcerColumn from "$lib/components/Customs/EnforcerColumn.svelte";
  import TicketNumberColumn from "$lib/components/Customs/TicketNumberColumn.svelte";
  import ViolationsColumn from "$lib/components/Customs/ViolationsColumn.svelte";
  import TicketRowActions from "$lib/components/Table/Partials/TicketRowActions.svelte";
  import { goto } from "$app/navigation";
  import { superForm } from "sveltekit-superforms";
  import ConfirmDelete from "$lib/components/Overlays/Modal/Delete/ConfirmDelete.svelte";
  const { open, close } = overlayStore;
  const { supabase } = getSupabaseContext();
  const columns: ColumnDef<Types.Ticket>[] = [
    {
      accessorKey: "id",
      cell: (info) => flexRender(TicketNumberColumn, { id: info.getValue() }),
      footer: (info) => info.column.id,
      header: "Ticket No",
    },
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
      accessorKey: "id",
      cell: (info) => flexRender(ViolationsColumn, { id: info.getValue() }),
      footer: (info) => info.column.id,
      header: "Violations",
    },
    {
      accessorKey: "fine",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Fine",
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
      accessorKey: "vehicle_type",
      cell: (info) => flexRender(VehicleTypeColumn, { id: info.getValue() }),
      footer: (info) => info.column.id,
      header: "Vehicle Type",
    },
    {
      accessorKey: "enforcer",
      cell: (info) => flexRender(EnforcerColumn, { id: info.getValue() }),
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
      accessorKey: "id",
      cell: (info) =>
        flexRender(TicketRowActions, {
          status: info.row.original.status,
          fireEdit: () => {
            goto(`/tickets/edit?id=${info.getValue()}`);
          },
          fireView: () => {
            open({
              props: {
                info: info.row.original as Types.Ticket,
              },
              id: "viewTicket",
            });
          },
          fireDelete: () => {
            open({
              props: {
                info: info.row.original.id,
              },
              id: "deleteTicket",
            });
          },
        }),
      header: "Actions",
      enableSorting: false,
    },
  ];

  export let data;

  const { form, message, enhance } = superForm(data.form, {
    dataType: "json",
  });

  $: if ($message) {
    close();
    open({
      id: $message.action,
    });
  }
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

<Overlay let:data title="View Ticket" id="viewTicket">
  <ViewTickets info={data} {supabase} />
</Overlay>

<Overlay let:data title="" id="deleteTicket" type="modal">
  <form
    action="?/delete"
    method="POST"
    use:enhance
    class="flex flex-col justify-center items-center text-red-500"
    on:submit={close}
  >
    <ConfirmDelete info={data} {form} on:close={close}></ConfirmDelete>
  </form>
</Overlay>
