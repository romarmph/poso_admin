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
    } from "$lib/Components";
    import { DataList } from "$lib/components/Supabase/Supabase";
    import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
    import { overlayStore } from "$lib/stores/overlayStore.js";
    import { getSupabaseContext } from "$lib/stores/clientStore.js";
    import {
        Overlay,
        ViewTrafficPost,
    } from "$lib/components/Overlays/Overlays";
    import { superForm } from "sveltekit-superforms";
    import AddTrafficPost from "$lib/components/Overlays/Offcanvas/AddTrafficPost.svelte";
    const { supabase } = getSupabaseContext();
    export let data;

    const { open, close } = overlayStore;

    const { form, errors, enhance, message } = superForm(data.form);

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
                    fireEdit: () => {},
                    fireView: () => {
                        open({
                            props: {
                                info: info.row.original as Types.TrafficPost,
                            },
                            id: "viewTrafficPost",
                        });
                    },
                    fireDelete: () => {},
                }),
            header: "Actions",
            enableSorting: false,
        },
    ];
</script>

<svelte:head><title>Traffic Post</title></svelte:head>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Traffic Post</h1>
    <div style="margin-left:auto">
        <Button on:click={() => open({ id: "addTrafficPost" })}>Add</Button>
    </div>
</header>

<!--Table -->
<DataList table="traffic_posts" let:data initData={data.trafficPost ?? []}>
    <TanTable {data} {columns}></TanTable>
</DataList>

<Overlay title="Add Traffic Post" id="addTrafficPost">
    <form
        method="POST"
        class="w-[500px] h-full flex flex-col"
        action="?/add"
        use:enhance
    >
        <AddTrafficPost superForm={form} {errors} on:close={close} />
    </form>
</Overlay>

<Overlay let:data title="View Traffic Post" id="viewTrafficPost">
    <ViewTrafficPost info={data} {supabase} />
</Overlay>

<Overlay title="Success" id="success" type="modal">
    <h3>SUCCESS</h3>
</Overlay>
