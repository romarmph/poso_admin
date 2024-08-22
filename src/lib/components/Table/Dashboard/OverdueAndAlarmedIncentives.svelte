<script lang="ts">
  import { type ColumnDef } from "@tanstack/svelte-table";
  import TanTable from "../TanTable.svelte";
  import {
    Select,
    SelectTrigger,
    SelectItem,
    SelectValue,
    SelectContent,
  } from "$lib/components/ui/select";
  import { goto } from "$app/navigation";
  import exportData from "$lib/helpers/xlxs.js";
  import { Button } from "$lib/Components";

  export let incentives: Types.OverdueAndAlarmedIncentive[] = [];
  export let query;
  export let filters;
  let selectedYear = {
    value: query.year,
    label: query.year?.toString(),
  };
  const columnDefs: ColumnDef<Types.OverdueAndAlarmedIncentive>[] = [
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

<TanTable data={incentives} columns={columnDefs} showGrid={true}>
  <svelte:fragment slot="right-side">
    <Select
      name="year"
      selected={selectedYear}
      onSelectedChange={(v) => {
        if (v) {
          selectedYear = {
            value: v?.value,
            label: v.label ?? "",
          };
        }
        goto(`/?year=${selectedYear.value}`);
      }}
    >
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Quarter" />
      </SelectTrigger>
      <SelectContent>
        {#each filters.years as year}
          <SelectItem value={year.year}>{year.year}</SelectItem>
        {/each}
      </SelectContent>
    </Select>

    <Button
      on:click={() => {
        let fileName = `total-overdue-and-alarmed-incentives-${query.year}`;
        let incentivesExportable = incentives.map((item) => {
          return {
            ...item,
          };
        });
        exportData(incentivesExportable, fileName);
      }}>Export</Button
    >
  </svelte:fragment>
</TanTable>
