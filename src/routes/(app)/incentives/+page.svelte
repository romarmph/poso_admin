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
    import { Button } from "$lib/Components.js";

    export let data;

    let selectedYear = {
        value: data.query.year,
        label: data.query.year?.toString(),
    };
    let selectedMonth = {
        value: data.query.month,
        label: data.months.find(
            (month: { month_name: string; month_number: number }) =>
                month.month_number === data.query.month,
        ).month_name,
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
    <svelte:fragment slot="right-side">
        <Select
            name="month"
            selected={selectedMonth}
            onSelectedChange={(v) => {
                if (v) {
                    selectedMonth = {
                        value: v?.value,
                        label: v.label ?? "",
                    };
                }
                goto(
                    `/incentives?year=${selectedYear.value}&month=${selectedMonth.value}`,
                );
            }}
        >
            <SelectTrigger class="w-[180px]">
                <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
                {#each data.months as month}
                    <SelectItem value={month.month_number}
                        >{month.month_name}</SelectItem
                    >
                {/each}
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
                    `/incentives?year=${selectedYear.value}&month=${selectedMonth.value}`,
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
        <Button>Export</Button>
    </svelte:fragment>
</TanTable>
