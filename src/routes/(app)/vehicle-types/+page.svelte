<script lang="ts">
    import { Button, RowActions, TanTable } from "$lib/Components";
    import { DataList } from "$lib/components/Supabase/Supabase";
    import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
    import {
        Overlay,
        ViewVehicleTypes,
    } from "$lib/components/Overlays/Overlays";
    import { overlayStore } from "$lib/stores/overlayStore.js";
    import { getSupabaseContext } from "$lib/stores/clientStore.js";
    import AddVehicleType from "$lib/components/Overlays/Offcanvas/AddVehicleType.svelte";
    import ConfirmDelete from "$lib/components/Overlays/Modal/Delete/ConfirmDelete.svelte";

    import { superForm } from "sveltekit-superforms";
    export let data;

    const { open, close } = overlayStore;

    const {
        form: vehicleTypeForm,
        errors: vehicleTypeErrors,
        enhance: vehicleTypeEnhance,
        message: vehicleTypeMessage,
        reset: vehicleTypeFormReset,
    } = superForm(data.vehicleTypeForm, {
        dataType: "json",
    });

    const {
        form: deleteForm,
        enhance: deleteEnhance,
        message: deleteMessage,
    } = superForm(data.deleteForm, {
        dataType: "json",
    });

    $: if ($vehicleTypeMessage) {
        if ($vehicleTypeMessage.success) {
            close();
        }
        if ($vehicleTypeMessage.action.length > 0) {
            open({
                id: $vehicleTypeMessage.action,
            });
        }
    }

    $: if ($deleteMessage) {
        close();
        open({
            id: $deleteMessage.action,
        });
    }

    const { supabase } = getSupabaseContext();
    const columns: ColumnDef<Types.VehicleTypes>[] = [
        {
            accessorKey: "type",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Vehicle Type",
        },
        {
            accessorKey: "created_at",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Created At",
            accessorFn: (row) => new Date(row.created_at).toDateString(),
        },
        {
            accessorKey: "updated_at",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Updated At",
            accessorFn: (row) => new Date(row.updated_at).toDateString(),
        },
        {
            accessorKey: "id",
            cell: (info) =>
                flexRender(RowActions, {
                    fireEdit: () => {
                        vehicleTypeFormReset();
                        open({
                            id: "updateVehicleType",
                            props: {
                                info: info.row.original as Types.VehicleTypes,
                            },
                        });
                    },
                    fireView: () => {
                        open({
                            props: {
                                info: info.row.original as Types.VehicleTypes,
                            },
                            id: "ViewVehicleType",
                        });
                    },
                    fireDelete: () =>
                        open({
                            id: "deleteVehicleType",
                            props: {
                                info: info.row.original.id,
                                data,
                            },
                        }),
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
        <Button
            on:click={() => {
                vehicleTypeFormReset();
                open({
                    props: {},
                    id: "addvehicleType",
                });
            }}>Add Vehicle Type</Button
        >
    </div>
</header>
<!--Table -->

<DataList table="vehicle_types" let:data initData={data.vehicleType ?? []}>
    <TanTable {data} {columns}></TanTable>
</DataList>

<Overlay title="Add Vehicle Type" id="addvehicleType" let:data type="modal">
    <form method="POST" action="?/add" use:vehicleTypeEnhance>
        <AddVehicleType
            form={vehicleTypeForm}
            errors={vehicleTypeErrors}
            on:close={close}
            initData={data}
        />
    </form>
</Overlay>

<Overlay
    title="Update Vehicle Type"
    id="updateVehicleType"
    let:data
    type="modal"
>
    <form method="POST" action="?/update" use:vehicleTypeEnhance>
        <AddVehicleType
            form={vehicleTypeForm}
            errors={vehicleTypeErrors}
            on:close={close}
            initData={data}
        />
    </form>
</Overlay>

<Overlay let:data title="" id="deleteVehicleType" type="modal">
    <form
        action="?/delete"
        method="POST"
        use:deleteEnhance
        class="flex flex-col justify-center items-center text-red-500"
        on:submit={close}
    >
        <ConfirmDelete info={data} form={deleteForm} on:close={close}
        ></ConfirmDelete>
    </form>
</Overlay>

<Overlay let:data title="View Vehicle Type" id="ViewVehicleType" type="modal">
    <ViewVehicleTypes info={data} {supabase} />
</Overlay>
