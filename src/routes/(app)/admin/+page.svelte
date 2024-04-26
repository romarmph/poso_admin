<script lang="ts">
    import {
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
    } from "$lib/components/Overlays/Modal/Modal";

    import {
        Button,
        TextInput,
        Label,
        TanTable,
        RowActions,
        EmployeeStatus,
    } from "$lib/Components";
    import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
    import { DataList } from "$lib/components/Supabase/Supabase";
    import {
        Overlay,
        ViewAdmin,
        ViewEnforcer,
    } from "$lib/components/Overlays/Overlays";
    import { overlayStore } from "$lib/stores/overlayStore.js";
    import { getSupabaseContext } from "$lib/stores/clientStore.js";
    import AddEnforcer from "$lib/components/Overlays/Offcanvas/AddEnforcer.svelte";
    import { superForm } from "sveltekit-superforms";
    import AddAdmin from "$lib/components/Overlays/Offcanvas/AddAdmin.svelte";
    import ConfirmDelete from "$lib/components/Overlays/Modal/Delete/ConfirmDelete.svelte";
    const { supabase } = getSupabaseContext();

    export let data;

    const { open, close } = overlayStore;
    const {
        form: adminForm,
        errors: adminErrors,
        enhance: adminEnhance,
        message: adminMessage,
        reset: resetForm,
    } = superForm(data.adminForm);

    const {
        form: deleteForm,
        enhance: deleteEnhance,
        message: deleteMessage,
    } = superForm(data.deleteForm, {
        dataType: "json",
    });

    $: if ($adminMessage) {
        if ($adminMessage.success) {
            close();
        }
        if ($adminMessage.action.length > 0) {
            open({
                id: $adminMessage.action,
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
            accessorKey: "middle_name",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Middle Name",
        },
        {
            accessorKey: "last_name",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Last Name",
        },
        {
            accessorKey: "suffix",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Suffix",
        },
        {
            accessorKey: "birthdate",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Birth Date",
            accessorFn: (row) => new Date(row.birthdate).toDateString(),
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
            accessorKey: "employee_no",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Employee No.",
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
                            id: "updateAdmin",
                            props: {
                                info: info.row.original as Types.Employees,
                            },
                        });
                    },
                    fireView: () => {
                        open({
                            props: {
                                info: info.row.original as Types.Employees,
                            },
                            id: "viewAdmin",
                        });
                    },
                    fireDelete: () =>
                        open({
                            id: "deleteAdmin",
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

<svelte:head><title>Admin</title></svelte:head>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Admin</h1>
    <div style="margin-left:auto">
        <Button
            on:click={() => {
                resetForm();
                open({ id: "addAdmin", props: {} });
            }}>Add</Button
        >
    </div>
</header>

<!--Table -->
<DataList table="employees" let:data initData={data.admin ?? []}>
    <TanTable {data} {columns}></TanTable>
</DataList>
<Overlay title="Add Admin" id="addAdmin" let:data>
    <form
        method="POST"
        class="w-[500px] h-full flex flex-col"
        action="?/add"
        use:adminEnhance
    >
        <AddAdmin
            form={adminForm}
            errors={adminErrors}
            on:close={close}
            initData={data}
        />
    </form>
</Overlay>

<Overlay title="Update Admin" id="updateAdmin" let:data>
    <form
        method="POST"
        class="w-[500px] h-full flex flex-col"
        action="?/update"
        use:adminEnhance
    >
        <AddAdmin
            form={adminForm}
            errors={adminErrors}
            on:close={close}
            initData={data}
        />
    </form>
</Overlay>

<Overlay let:data title="" id="deleteAdmin" type="modal">
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

<Overlay let:data title="View Admin" id="viewAdmin">
    <ViewAdmin info={data} {supabase} />
</Overlay>
