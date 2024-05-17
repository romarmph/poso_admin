<script lang="ts">
  import { TanTable } from "$lib/Components";
  import { Overlay, ViewTickets } from "$lib/components/Overlays/Overlays";
  import { DataList } from "$lib/components/Supabase/Supabase";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import { overlayStore } from "$lib/stores/overlayStore.js";
  import { getSupabaseContext } from "$lib/stores/clientStore.js";
  import { Eye, Pencil } from "lucide-svelte";
  import RowAction from "$lib/components/Base/RowAction.svelte";

  const { supabase } = getSupabaseContext();
  const { open } = overlayStore;
  export let payments: any[];
  const columns: ColumnDef<Types.Ticket>[] = [
    {
      accessorKey: "ticket_no",
      cell: (info) => info.getValue(),
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
      accessorKey: "violator",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Violator",
    },
    {
      accessorKey: "amount_paid",
      cell: (info) => info.getValue(),
      header: "Amount Paid",
    },
    {
      accessorKey: "discounted",
      cell: (info) => (info.getValue() ? "Yes" : "No"),
      header: "Discounted",
    },
    {
      accessorKey: "discounted_by",
      cell: (info) => info.getValue(),
      header: "Note",
    },

    {
      accessorKey: "paid_at",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Paid At",
      accessorFn: (row) => new Date(row.paid_at ?? "").toDateString(),
    },
    {
      accessorKey: "created_at",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Created At",
      accessorFn: (row) => new Date(row.created_at).toDateString(),
    },
    {
      accessorKey: "status",
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
            icon: Pencil,
            label: "Update Payment",
            action: () =>
              open({
                id: "updatePayment",
                props: {
                  info: info.row.original,
                },
              }),
          },
          {
            icon: Eye,
            label: "Cancel Payment",
            action: () =>
              open({
                id: "cancelPayment",
                props: {
                  info: info.row.original.id,
                },
              }),
          },
        ];

        return flexRender(RowAction, {
          actions: actions,
          primaryAction: mainAction,
          id: info.row.original.id + "paid",
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
