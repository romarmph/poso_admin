<script lang="ts">
  import { TanTable } from "$lib/Components";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import ViolationsColumn from "$lib/components/Customs/ViolationsColumn.svelte";
  import TicketStatus from "$lib/components/Base/TicketStatus.svelte";
  import PaymentRowActions from "$lib/components/Table/Partials/PaymentRowActions.svelte";
  import { goto } from "$app/navigation";
  import { Overlay, ViewTickets } from "$lib/components/Overlays/Overlays";
  import { overlayStore } from "$lib/stores/overlayStore.js";
  import { getSupabaseContext } from "$lib/stores/clientStore.js";

  export let unpaidTickets: Types.Ticket[];

  const { supabase } = getSupabaseContext();
  const { open } = overlayStore;

  const columns: ColumnDef<Types.Ticket>[] = [
    {
      accessorKey: "ticket_no",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Ticket No",
    },
    {
      accessorKey: "violator",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Violator",
    },
    {
      accessorKey: "violations",
      cell: (info) =>
        flexRender(ViolationsColumn, { violations: info.getValue() }),
      footer: (info) => info.column.id,
      header: "Violations",
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
      header: "Apprehension Date",
      accessorFn: (row) => new Date(row.violation_date).toDateString(),
    },
    {
      accessorKey: "due_date",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Due Date",
      accessorFn: (row) => new Date(row.due_date).toDateString(),
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
        flexRender(PaymentRowActions, {
          status: info.row.original.status,
          fireView: () => {
            open({
              props: {
                info: info.row.original as Types.Ticket,
              },
              id: "viewTicket",
            });
          },

          firePay: () => {
            open({
              props: {
                info: info.row.original as Types.Ticket,
              },
              id: "payTicket",
            });
          },
        }),
      header: "Actions",
      enableSorting: false,
    },
  ];
  import { DataList } from "$lib/components/Supabase/Supabase";
</script>

<DataList table="tickets" let:data initData={unpaidTickets}>
  <TanTable {data} {columns}></TanTable>
</DataList>

<Overlay id="viewTicket" type="canvas" title="View Ticket" let:data>
  <ViewTickets {supabase} info={data}></ViewTickets>
</Overlay>
