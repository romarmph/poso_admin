<script lang="ts">
    import TanTable from "$lib/components/Table/TanTable.svelte";
    import { rankItem } from "@tanstack/match-sorter-utils";
    import { type ColumnDef, type FilterFn } from "@tanstack/svelte-table";
    import { writable } from "svelte/store";
    export let data;

    const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
        console.log(columnId, value);
        const itemRank = rankItem(row.getValue(columnId), value);
        addMeta({ itemRank });
        return itemRank.passed;
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
            header: "Quarter 1",
            columns: [
                {
                    accessorKey: "total_tickets",
                    cell: (info) => info.row.original.quarter_1.total_tickets,
                    header: "Total Tickets",
                },
                {
                    accessorKey: "total_paid_tickets",
                    cell: (info) =>
                        info.row.original.quarter_1.total_tickets_paid,
                    header: "Total Paid Tickets",
                },
                {
                    accessorKey: "total_fine",
                    cell: (info) => info.row.original.quarter_1.total_fine,
                    header: "Total Fine",
                },
                {
                    accessorKey: "total_amount_paid",
                    cell: (info) =>
                        info.row.original.quarter_1.total_amount_paid,
                    header: "Total Amount Paid",
                },
                {
                    accessorKey: "incentive",
                    cell: (info) => info.row.original.quarter_1.incentive,
                    header: "Incentive",
                },
            ],
        },
        {
            header: "Quarter 2",
            columns: [
                {
                    accessorKey: "total_tickets",
                    cell: (info) => info.row.original.quarter_2.total_tickets,
                    header: "Total Tickets",
                },
                {
                    accessorKey: "total_paid_tickets",
                    cell: (info) =>
                        info.row.original.quarter_2.total_tickets_paid,
                    header: "Total Paid Tickets",
                },
                {
                    accessorKey: "total_fine",
                    cell: (info) => info.row.original.quarter_2.total_fine,
                    header: "Total Fine",
                },
                {
                    accessorKey: "total_amount_paid",
                    cell: (info) =>
                        info.row.original.quarter_2.total_amount_paid,
                    header: "Total Amount Paid",
                },
                {
                    accessorKey: "incentive",
                    cell: (info) => info.row.original.quarter_2.incentive,
                    header: "Incentive",
                },
            ],
        },
        {
            header: "Quarter 3",
            columns: [
                {
                    accessorKey: "total_tickets",
                    cell: (info) => info.row.original.quarter_3.total_tickets,
                    header: "Total Tickets",
                },
                {
                    accessorKey: "total_paid_tickets",
                    cell: (info) =>
                        info.row.original.quarter_3.total_tickets_paid,
                    header: "Total Paid Tickets",
                },
                {
                    accessorKey: "total_fine",
                    cell: (info) => info.row.original.quarter_3.total_fine,
                    header: "Total Fine",
                },
                {
                    accessorKey: "total_amount_paid",
                    cell: (info) =>
                        info.row.original.quarter_3.total_amount_paid,
                    header: "Total Amount Paid",
                },
                {
                    accessorKey: "incentive",
                    cell: (info) => info.row.original.quarter_3.incentive,
                    header: "Incentive",
                },
            ],
        },
        {
            header: "Quarter 4",
            columns: [
                {
                    accessorKey: "total_tickets",
                    cell: (info) => info.row.original.quarter_4.total_tickets,
                    header: "Total Tickets",
                },
                {
                    accessorKey: "total_paid_tickets",
                    cell: (info) =>
                        info.row.original.quarter_4.total_tickets_paid,
                    header: "Total Paid Tickets",
                },
                {
                    accessorKey: "total_fine",
                    cell: (info) => info.row.original.quarter_4.total_fine,
                    header: "Total Fine",
                },
                {
                    accessorKey: "total_amount_paid",
                    cell: (info) =>
                        info.row.original.quarter_4.total_amount_paid,
                    header: "Total Amount Paid",
                },
                {
                    accessorKey: "incentive",
                    cell: (info) => info.row.original.quarter_4.incentive,
                    header: "Incentive",
                },
            ],
        },
    ];

    const store = writable(data.incentives);
    $: $store.sort(
        (a: Types.QuarterlyIncentive, b: Types.QuarterlyIncentive) => {
            if (a.first_name > b.first_name) {
                return 1;
            } else if (a.first_name < b.first_name) {
                return -1;
            } else {
                return 0;
            }
        },
    );

    $: $store = $store;
</script>

<svelte:head><title>Incentives</title></svelte:head>

<header class="flex items-center">
    <h1 class="text-2xl text-gray-700 font-bold">Incentives</h1>
</header>

<TanTable data={$store} {columns} {fuzzyFilter} showGrid={true}></TanTable>
