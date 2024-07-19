<script lang="ts">
  import { type ColumnDef } from "@tanstack/svelte-table";
  import TanTable from "../TanTable.svelte";
  export let ticketsPerMonth: Types.TicketsPerMonthByYear[] = [];

  const columnDefs: ColumnDef<Types.TicketsPerMonthByYear>[] = [
    {
      accessorKey: "enforcer_name",
      cell: (info) => info.getValue(),
      header: "Enforcer",
    },
    {
      accessorKey: "january",
      cell: (info) => info.getValue(),
      header: "Jan",
    },
    {
      accessorKey: "february",
      cell: (info) => info.getValue(),
      header: "Feb",
    },
    {
      accessorKey: "march",
      cell: (info) => info.getValue(),
      header: "Mar",
    },
    {
      accessorKey: "april",
      cell: (info) => info.getValue(),
      header: "Apr",
    },
    {
      accessorKey: "may",
      cell: (info) => info.getValue(),
      header: "May",
    },
    {
      accessorKey: "june",
      cell: (info) => info.getValue(),
      header: "Jun",
    },
    {
      accessorKey: "july",
      cell: (info) => info.getValue(),
      header: "Jul",
    },
    {
      accessorKey: "august",
      cell: (info) => info.getValue(),
      header: "Aug",
    },
    {
      accessorKey: "september",
      cell: (info) => info.getValue(),
      header: "Sep",
    },
    {
      accessorKey: "october",
      cell: (info) => info.getValue(),
      header: "Oct",
    },
    {
      accessorKey: "november",
      cell: (info) => info.getValue(),
      header: "Nov",
    },
    {
      accessorKey: "december",
      cell: (info) => info.getValue(),
      header: "Dec",
    },
  ];
</script>

<TanTable
  data={ticketsPerMonth}
  columns={columnDefs}
  showGrid={true}
></TanTable>
