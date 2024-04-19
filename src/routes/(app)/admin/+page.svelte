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
    const { supabase } = getSupabaseContext();

    export let data;

    const { open, close } = overlayStore;

    const { form, errors, enhance, message } = superForm(data.form);

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
                                info: info.row.original as Types.Employees,
                            },
                            id: "viewAdmin",
                        });
                    },
                    fireDelete: () => {},
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
        <Button on:click={() => open({ id: "addAdmin" })}>Add</Button>
    </div>
</header>

<!--Table -->
<DataList
    table="employees"
    let:data
    initData={data.admin ?? []}
    eq={{ operator: "role", value: 2 }}
>
    <TanTable {data} {columns}></TanTable>
</DataList>

<Overlay title="Add Admin" id="addAdmin">
    <form
        method="POST"
        class="w-[500px] h-full flex flex-col"
        action="?/add"
        use:enhance
    >
        <AddAdmin superForm={form} {errors} on:close={close} />
    </form>
</Overlay>

<Overlay let:data title="View Admin" id="viewAdmin">
    <ViewAdmin info={data} {supabase} />
</Overlay>

<Overlay title="Success" id="success" type="modal">
    <h3>SUCCESS</h3>
</Overlay>
