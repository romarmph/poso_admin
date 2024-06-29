<script lang="ts">
    import TanTable from "$lib/components/Table/TanTable.svelte";
    import {
        Select,
        SelectTrigger,
        SelectItem,
        SelectValue,
        SelectContent,
    } from "$lib/components/ui/select";
    import { type ColumnDef } from "@tanstack/svelte-table";
    import { goto } from "$app/navigation";

    export let data;

    let selectedYear = {
        value: data.query.year,
        label: data.query.year?.toString(),
    };
    let selectedQuarter = {
        value: data.query.quarter,
        label: data.query.quarter?.toString(),
    };
    const columns: ColumnDef<Types.QuarterlyIncentive>[] = [
        {
            accessorKey: "first_name",
            cell: (info) => info.getValue(),
            header: "First Name",
        },
        {
            accessorKey: "last_name",
            cell: (info) => info.getValue(),
            header: "Last Name",
        },
        {
            accessorKey: "total_tickets",
            cell: (info) => info.getValue(),
            header: "Total Tickets",
        },
        {
            accessorKey: "total_paid_tickets",
            cell: (info) => info.getValue(),
            header: "Total Paid Tickets",
        },
        {
            accessorKey: "total_amount_paid",
            cell: (info) => info.getValue(),
            header: "Total Amount Paid",
        },
        {
            accessorKey: "incentive",
            cell: (info) => info.getValue(),
            header: "Total Incentive",
        },
    ];
</script>

<svelte:head>
    <title>Incentives</title>
</svelte:head>
<header class="flex items-center">
    <h1 class="text-2xl text-gray-700 font-bold">Incentives</h1>
</header>
<TanTable data={data.employeeIncentives} {columns} showGrid={true}>
    <Select
        name="quarter"
        selected={selectedQuarter}
        onSelectedChange={(v) => {
            if (v) {
                selectedQuarter = {
                    value: v?.value,
                    label: v.label ?? "",
                };
            }
            goto(
                `/incentives?year=${selectedYear.value}&quarter=${selectedQuarter.value}`,
            );
        }}
    >
        <SelectTrigger class="w-[180px]">
            <SelectValue placeholder="Quarter" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value={1}>{1}</SelectItem>
            <SelectItem value={2}>{2}</SelectItem>
            <SelectItem value={3}>{3}</SelectItem>
            <SelectItem value={4}>{4}</SelectItem>
        </SelectContent>
    </Select>
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
            goto(
                `/incentives?year=${selectedYear.value}&quarter=${selectedQuarter.value}`,
            );
        }}
    >
        <SelectTrigger class="w-[180px]">
            <SelectValue placeholder="Quarter" />
        </SelectTrigger>
        <SelectContent>
            {#each data.uniqueYears as year}
                <SelectItem value={year.year}>{year.year}</SelectItem>
            {/each}
        </SelectContent>
    </Select>
</TanTable>
