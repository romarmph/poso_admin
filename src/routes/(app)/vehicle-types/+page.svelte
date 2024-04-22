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
    import ConfirmDelete from "$lib/components/Overlays/Modal/Delete/ConfirmDelete.svelte";

    import { superForm } from "sveltekit-superforms";
    export let data;

    const { open, close } = overlayStore;

    const {
        form: vehicleTypeForm,
        errors: vehicleTypeErrors,
        enhance: vehicleTypeEnhance,
        message: vehicleTypeMessage,
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
        close();
        open({
            id: $vehicleTypeMessage.action,
        });
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
                    fireEdit: () =>
                        open({
                            id: "updateVehicleType",
                            props: {
                                info: info.row.original as Types.VehicleTypes,
                            },
                        }),
                    fireView: () => {
                        open({
                            props: {
                                info: info.row.original as Types.VehicleTypes,
                            },
                            id: "viewVehicleType",
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
        <TextInput
            id="input-Label"
            placeholder="Add New Vehicle Type"
            width="60"
            classNames="py-3 px-3 pe-10 mr-2"
        />
    </div>
    <Button on:click={() => open({ id: "addVehicleType", props: {} })}
        >Add</Button
    >
</header>
<!--Table -->

<DataList table="vehicle_types" let:data initData={data.vehicleType ?? []}>
    <TanTable {data} {columns}></TanTable>
</DataList>
<Overlay title="Add vehicleType" id="addVehicleType" let:data>
    <form
        method="POST"
        class="w-[500px] h-full flex flex-col"
        action="?/add"
        use:vehicleTypeEnhance
        on:submit={close}
    >
        <AddVehicleType
            form={vehicleTypeForm}
            errors={vehicleTypeForm}
            on:close={close}
            initData={data}
        />
    </form>
</Overlay>

<Overlay title="Update VehicleType" id="updateVehicleType" let:data>
    <form
        method="POST"
        class="w-[500px] h-full flex flex-col"
        action="?/update"
        use:vehicleTypeEnhance
        on:submit={close}
    >
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

<Overlay let:data title="View VehicleType" id="viewVehicleType">
    <ViewVehicleTypes info={data} {supabase} />
</Overlay>
