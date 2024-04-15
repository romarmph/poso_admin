<script lang="ts">
    import {
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
    } from "$lib/components/Overlays/Modal/Modal";

    import { Button, TextInput, Label } from "$lib/Components";
    import DataList from "$lib/components/Supabase/DataList.svelte";
    import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
    import TanTable from "$lib/components/Table/TanTable.svelte";
    import EnabledStatus from "$lib/components/Base/EnabledStatus.svelte";
    import ViolationFines from "$lib/components/Customs/ViolationFines.svelte";
    import RowActions from "$lib/components/Table/Partials/RowActions.svelte";

    const columns: ColumnDef<Types.TrafficPost>[] = [
        {
            accessorKey: "name",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Traffic Post",
        },
        {
            accessorKey: "address",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Address",
        },

        {
            accessorKey: "created_at",
            cell: (info) => info.getValue(),
            footer: (info) => info.column.id,
            header: "Created At",
            accessorFn: (row) => {
                console.log(row);
                return new Date(row.created_at).toDateString();
            },
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

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Traffic Post</h1>
    <div style="margin-left:auto">
        <Button data-hs-overlay="#hs-add-TPost-modal">Add Traffic Post</Button>
    </div>
</header>

<!--Table -->
<DataList table="traffic_posts" let:data initData={data.trafficPost ?? []}>
    <TanTable {data} {columns}></TanTable>
</DataList>
<!-- Add Traffic Post modal -->
<Modal modalId="hs-add-TPost-modal">
    <ModalHeader>Add Traffic Post</ModalHeader>

    <ModalBody>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Post Name</Label>

            <TextInput id="input-Label" placeholder="Type post name here" />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Location</Label>

            <TextInput id="input-Label" placeholder="Type location here" />
        </div>
    </ModalBody>

    <ModalFooter>
        <Button data-hs-overlay="#hs-add-TPost-modal" style="soft" color="gray"
            >Cancel</Button
        >
        <Button>Save</Button>
    </ModalFooter>
</Modal>
