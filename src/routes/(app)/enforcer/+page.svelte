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
    import { ViewEnforcer } from "$lib/components/Overlays/Overlays";
    import { overlayStore } from "$lib/stores/overlayStore.js";
    import { getSupabaseContext } from "$lib/stores/clientStore.js";
    const { open } = overlayStore;
    const { supabase } = getSupabaseContext();

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
                    fireView: () =>
                        open({
                            title: "View Enforcer",
                            component: ViewEnforcer,
                            props: { info: info.row.original, supabase },
                        }),
                    fireDelete: () => {},
                }),
            header: "Actions",
            enableSorting: false,
        },
    ];

    export let data;
</script>

<svelte:head><title>Enforcer</title></svelte:head>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Enforcer</h1>
    <div style="margin-left:auto">
        <Button data-hs-overlay="#hs-add-enforcer-modal">Add Enforcer</Button>
    </div>
</header>

<!--Table -->
<DataList
    table="employees"
    let:data
    initData={data.employees ?? []}
    eq={{ operator: "role", value: 1 }}
>
    <TanTable {data} {columns}></TanTable>
</DataList>

<Modal modalId="hs-add-enforcer-modal">
    <ModalHeader>Add Enforcer</ModalHeader>

    <ModalBody>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">First Name</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer first name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Middle Name</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer middle name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Last Name</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer last name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Employee No.</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer employee number here"
            />
        </div>
    </ModalBody>

    <ModalFooter>
        <Button
            data-hs-overlay="#hs-add-enforcer-modal"
            style="soft"
            color="gray">Cancel</Button
        >
        <Button>Save</Button>
    </ModalFooter>
</Modal>
