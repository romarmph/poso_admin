<script lang="ts">
    import {
        Button,
        TanTable,
        RowActions,
        EmployeeStatus,
    } from "$lib/Components";
    import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
    import { DataList } from "$lib/components/Supabase/Supabase";
    import { Overlay, ViewEnforcer } from "$lib/components/Overlays/Overlays";
    import { overlayStore } from "$lib/stores/overlayStore.js";
    import { getSupabaseContext } from "$lib/stores/clientStore.js";
    import AddEnforcer from "$lib/components/Overlays/Offcanvas/AddEnforcer.svelte";
    import { superForm } from "sveltekit-superforms";
    import ConfirmDelete from "$lib/components/Overlays/Modal/Delete/ConfirmDelete.svelte";
    import EmployeeEmailColumn from "$lib/components/Customs/EmployeeEmailColumn.svelte";
    const { supabase } = getSupabaseContext();

    export let data;

    const { open, close } = overlayStore;
    const {
        form: enforcerForm,
        errors: enforcerErrors,
        enhance: enforcerEnhance,
        message: enfocerMessage,
        reset: resetForm,
    } = superForm(data.enforcerForm);

    const {
        form: deleteForm,
        enhance: deleteEnhance,
        message: deleteMessage,
    } = superForm(data.deleteForm, {
        dataType: "json",
    });

    $: if ($enfocerMessage) {
        if ($enfocerMessage.success) {
            close();
        }
        if ($enfocerMessage.action.length > 0) {
            open({
                id: $enfocerMessage.action,
            });
        }
    }

    $: if ($deleteMessage) {
        close();
        open({
            id: $deleteMessage.action,
        });
    }

    const columns: ColumnDef<Types.Enforcer>[] = [
        {
            accessorKey: "first_name",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "First Name",
        },
        {
            accessorKey: "last_name",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Last Name",
        },
        {
            accessorKey: "status",
            cell: (info) =>
                flexRender(EmployeeStatus, { status: info.getValue() }),
            footer: (info) => info.column.id,
            header: "Status",
            enableSorting: false,
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
                        resetForm();
                        open({
                            id: "updateEnforcer",
                            props: {
                                info: info.row.original as Types.Enforcer,
                            },
                        });
                    },
                    fireView: () => {
                        open({
                            props: {
                                info: info.row.original as Types.Enforcer,
                            },
                            id: "viewEnforcer",
                        });
                    },
                    fireDelete: () =>
                        open({
                            id: "deleteEnforcer",
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

<svelte:head><title>Enforcer</title></svelte:head>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Enforcer</h1>
    <div style="margin-left:auto">
        <Button
            on:click={() => {
                resetForm();
                open({ id: "addEnforcer", props: {} });
            }}>Add</Button
        >
    </div>
</header>

<DataList table="employees" let:data initData={data.enforcer ?? []}>
    <TanTable {data} {columns}></TanTable>
</DataList>

<Overlay title="Add Enforcer" id="addEnforcer" let:data type="modal">
    <form method="POST" action="?/add" use:enforcerEnhance>
        <AddEnforcer
            form={enforcerForm}
            errors={enforcerErrors}
            on:close={close}
            initData={data}
        />
    </form>
</Overlay>

<Overlay title="Update Enforcer" id="updateEnforcer" let:data type="modal">
    <form method="POST" action="?/update" use:enforcerEnhance>
        <AddEnforcer
            form={enforcerForm}
            errors={enforcerErrors}
            on:close={close}
            initData={data}
        />
    </form>
</Overlay>

<Overlay let:data title="" id="deleteEnforcer" type="modal">
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

<Overlay let:data title="View Enforcer" id="viewEnforcer" type="modal">
    <ViewEnforcer info={data} {supabase} />
</Overlay>
