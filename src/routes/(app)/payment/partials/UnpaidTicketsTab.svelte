<script lang="ts">
  import { DataList } from "$lib/components/Supabase/Supabase";
  import { CreditCard, Eye } from "lucide-svelte";
  import { TanTable, TicketStatus } from "$lib/Components";
  import RowAction from "$lib/components/Base/RowAction.svelte";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import ViolationsColumn from "$lib/components/Customs/ViolationsColumn.svelte";
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
      cell: (info) => {
        const mainAction = {
          icon: Eye,
          label: "View Ticket",
          action: () =>
            open({
              id: "viewTicket",
              props: {
                info: info.row.original,
              },
            }),
        };

        const actions = [
          {
            icon: CreditCard,
            hidden: info.getValue() === "paid",
            label: "Pay Ticket",
            action: () =>
              open({
                id: "payTicket",
                props: {
                  info: info.row.original,
                },
              }),
          },
        ];

        return flexRender(RowAction, {
          actions: actions,
          primaryAction: mainAction,
          id: info.row.original.id + "unpaid",
        });
      },
      header: "Actions",
      enableSorting: false,
    },
  ];
</script>

<DataList table="tickets" let:data initData={unpaidTickets}>
  <TanTable {data} {columns}></TanTable>
</DataList>

<Overlay id="viewTicket" type="canvas" title="View Ticket" let:data>
  <ViewTickets {supabase} info={data}></ViewTickets>
</Overlay>
