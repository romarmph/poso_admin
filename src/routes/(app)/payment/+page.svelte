<script lang="ts">
  import { Card, TanTable } from "$lib/Components";
  import DataList from "$lib/components/Supabase/DataList.svelte";
  import { TrendingDown } from "lucide-svelte";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import TicketNumberColumn from "$lib/components/Customs/TicketNumberColumn.svelte";
  import ViolationsColumn from "$lib/components/Customs/ViolationsColumn.svelte";
  import TicketStatus from "$lib/components/Base/TicketStatus.svelte";
  import PaymentRowActions from "$lib/components/Table/Partials/PaymentRowActions.svelte";
  import ViewTickets from "$lib/components/Overlays/Offcanvas/ViewTickets.svelte";
  import { goto } from "$app/navigation";
  import { overlayStore } from "$lib/stores/overlayStore.js";
  import Overlay from "$lib/components/Overlays/Overlay.svelte";
  import { getSupabaseContext } from "$lib/stores/clientStore.js";

  export let data;
  const { supabase } = getSupabaseContext();
  const { open } = overlayStore;
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
      accessorKey: "status",
      cell: (info) => flexRender(TicketStatus, { status: info.getValue() }),
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
      accessorKey: "due_date",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Due Date",
      accessorFn: (row) => new Date(row.due_date).toDateString(),
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
            goto(`/payment/pay?id=${info.getValue()}`);
          },
        }),
      header: "Actions",
      enableSorting: false,
    },
  ];
</script>

<svelte:head><title>Payment</title></svelte:head>

<header class="flex items-center">
  <h1 class="text-2xl text-gray-700 font-bold">Payment</h1>
</header>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>
  </div>
</div>

<DataList table="tickets" let:data initData={data.payments ?? []}>
  <TanTable {data} {columns}></TanTable>
</DataList>

<Overlay id="viewTicket" type="canvas" title="View Ticket" let:data>
  <ViewTickets {supabase} info={data}></ViewTickets>
</Overlay>
