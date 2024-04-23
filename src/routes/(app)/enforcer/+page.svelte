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

    const columns: ColumnDef<Types.Employees>[] = [
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
            accessorKey: "user_id",
            cell: (info) =>
                flexRender(EmployeeEmailColumn, { user_id: info.getValue() }),
            footer: (info) => info.column.id,
            header: "Email",
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
            accessorKey: "birthdate",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Birth Date",
            accessorFn: (row) => new Date(row.birthdate).toDateString(),
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
                    fireEdit: () => {},
                    fireView: () => {
                        open({
                            props: {
                                info: info.row.original as Types.Employees,
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
        <Button on:click={() => open({ id: "addEnforcer" })}>Add</Button>
    </div>
</header>

<!--Table -->
<DataList table="employees" let:data initData={data.enforcer ?? []}>
    <TanTable {data} {columns}></TanTable>
</DataList>

<Overlay title="Add Enforcer" id="addEnforcer">
    <form
        method="POST"
        class="w-[500px] h-full flex flex-col"
        action="?/add"
        use:enforcerEnhance
    >
        <AddEnforcer
            form={enforcerForm}
            errors={enforcerErrors}
            on:close={close}
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

<Overlay let:data title="View Enforcer" id="viewEnforcer">
    <ViewEnforcer info={data} {supabase} />
</Overlay>
