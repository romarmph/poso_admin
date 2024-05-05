<script lang="ts">
  import { TanTable } from "$lib/Components";
  import TicketNumberColumn from "$lib/components/Customs/TicketNumberColumn.svelte";
  import { Overlay, ViewTickets } from "$lib/components/Overlays/Overlays";
  import { DataList } from "$lib/components/Supabase/Supabase";
  import PaymentRowActions from "$lib/components/Table/Partials/PaymentRowActions.svelte";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import { overlayStore } from "$lib/stores/overlayStore.js";
  import { getSupabaseContext } from "$lib/stores/clientStore.js";

  const { supabase } = getSupabaseContext();
  const { open } = overlayStore;
  export let payments: any[];
  const columns: ColumnDef<Types.Payment>[] = [
    {
      accessorKey: "tickets",
      cell: (info) =>
        flexRender(TicketNumberColumn, { id: info.row.original.ticket_id }),
      footer: (info) => info.column.id,
      header: "Ticket No",
    },
    {
      accessorKey: "or_number",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "OR Number",
    },
    {
      accessorKey: "tickets",
      cell: (info) => {
        const ticket: Types.Ticket = JSON.parse(
          JSON.stringify(info.getValue()),
        );
        return `${ticket.first_name} ${ticket.middle_name} ${ticket.last_name} ${ticket.suffix}`;
      },
      footer: (info) => info.column.id,
      header: "Violator",
    },
    {
      accessorKey: "tickets",
      cell: (info) => {
        const ticket: Types.Ticket = JSON.parse(
          JSON.stringify(info.getValue()),
        );
        return ticket.fine;
      },
      header: "Fine",
    },
    {
      accessorKey: "discount_amount",
      cell: (info) => info.getValue(),
      header: "Discount",
    },
    {
      accessorKey: "amount_paid",
      cell: (info) => info.getValue(),
      header: "Amount Paid",
    },
    {
      accessorKey: "paid_at",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Paid At",
      accessorFn: (row) => new Date(row.paid_at).toDateString(),
    },
    {
      accessorKey: "created_at",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Created At",
      accessorFn: (row) => new Date(row.created_at).toDateString(),
    },
    {
      accessorKey: "tickets",
      cell: (info) => {
        const ticket: Types.Ticket = JSON.parse(
          JSON.stringify(info.getValue()),
        );
        return flexRender(PaymentRowActions, {
          status: ticket.status,
          fireView: () =>
            open({
              id: "viewTicket",
              props: {
                info: ticket,
              },
            }),
        });
      },
      header: "View Ticket",
      enableSorting: false,
    },
  ];
</script>

<DataList table="tickets" let:data initData={payments}>
  <TanTable {data} {columns}></TanTable>
</DataList>

<Overlay id="viewTicket" type="canvas" title="View Ticket" let:data>
  <ViewTickets {supabase} info={data}></ViewTickets>
</Overlay>
