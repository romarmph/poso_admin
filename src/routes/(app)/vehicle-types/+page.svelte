<script lang="ts">
    import {
        Button,
        TextInput,
        TanTable,
        EnabledStatus,
        RowActions,
        VehicleSize,
    } from "$lib/Components";
    import { DataList } from "$lib/components/Supabase/Supabase";
    import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
    import {
        Overlay,
        ViewVehicleTypes,
    } from "$lib/components/Overlays/Overlays";
    import { overlayStore } from "$lib/stores/overlayStore.js";
    import { getSupabaseContext } from "$lib/stores/clientStore.js";
    import AddVehicleType from "$lib/components/Overlays/Offcanvas/AddVehicleType.svelte";
    import { superForm } from "sveltekit-superforms";
    const { supabase } = getSupabaseContext();
    export let data;

    const { open, close } = overlayStore;

    const { form, errors, enhance, message } = superForm(data.form);
    $: if ($message === "success") {
        close();
        open({
            id: "success",
            props: {},
        });
    }

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
                    fireEdit: () => {},
                    fireView: () => {
                        open({
                            props: {
                                info: info.row.original as Types.VehicleTypes,
                            },
                            id: "viewVehicleType",
                        });
                    },
                    fireDelete: () => {},
                }),
            header: "Actions",
            enableSorting: false,
        },
    ];
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
    <Button on:click={() => open({ id: "addVehicleType" })}>Add</Button>
</header>
<!--Table -->

<DataList table="vehicle_types" let:data initData={data.vehicleTypes ?? []}>
    <TanTable {data} {columns}></TanTable>
</DataList>
<Overlay title="Add Vehicle Type" id="addVehicleType">
    <form
        method="POST"
        class="w-[500px] h-full flex flex-col"
        action="?/add"
        use:enhance
    >
        <AddVehicleType superForm={form} {errors} on:close={close} />
    </form>
</Overlay>

<Overlay let:data title="View Vehicle Type" id="viewVehicleType">
    <ViewVehicleTypes info={data} {supabase} />
</Overlay>

<Overlay title="Success" id="success" type="modal">
    <h3>SUCCESS</h3>
</Overlay>
