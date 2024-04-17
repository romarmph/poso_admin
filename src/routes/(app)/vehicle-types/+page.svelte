<script lang="ts">
    import { Button, TextInput } from "$lib/Components";
    import DataList from "$lib/components/Supabase/DataList.svelte";
    import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
    import TanTable from "$lib/components/Table/TanTable.svelte";
    import EnabledStatus from "$lib/components/Base/EnabledStatus.svelte";
    import ViolationFines from "$lib/components/Customs/ViolationFines.svelte";
    import RowActions from "$lib/components/Table/Partials/RowActions.svelte";
    import VehicleSize from "$lib/components/Base/VehicleSize.svelte";

    const columns: ColumnDef<Types.VehicleTypes>[] = [
        {
            accessorKey: "type",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Vehicle Type",
        },

        {
            accessorKey: "big_vehicle",
            cell: (info) =>
                flexRender(VehicleSize, { big_vehicle: info.getValue() }),
            footer: (info) => info.column.id,
            header: "Vehicle Size",
        },

        {
            accessorKey: "enabled",
            cell: (info) =>
                flexRender(EnabledStatus, { enabled: info.getValue() }),
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
            accessorKey: "created_by",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Created By",
        },
        {
            accessorKey: "updated_at",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Updated At",
            accessorFn: (row) => new Date(row.updated_at).toDateString(),
        },
        {
            accessorKey: "updated_by",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Updated By",
        },
        {
            accessorKey: "id",
            cell: (info) =>
                flexRender(RowActions, {
                    id: info.getValue(),
                    fireEdit: () => {
                        console.log("Edit");
                    },
                    fireView: () => {
                        console.log("View");
                    },
                    fireDelete: () => {
                        console.log("Delete");
                    },
                }),
            header: "Actions",
            enableSorting: false,
        },
    ];

    export let data;
</script>

<svelte:head><title>Vehicle Types</title></svelte:head>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Vehicle Type</h1>
    <div style="margin-left:auto">
        <TextInput
            id="input-Label"
            placeholder="Add New Vehicle Type"
            width="60"
            classNames="py-3 px-3 pe-10 mr-2"
        />
    </div>
    <Button>Add</Button>
</header>
<!--Table -->

<DataList table="vehicle_types" let:data initData={data.vehicleTypes ?? []}>
    <TanTable {data} {columns}></TanTable>
</DataList>
