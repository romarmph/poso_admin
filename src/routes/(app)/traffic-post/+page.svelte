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
    import ConfirmDelete from "$lib/components/Overlays/Modal/Delete/ConfirmDelete.svelte";
    export let data;

    const { open, close } = overlayStore;

    const {
        form: trafficPostForm,
        errors: trafficPostErrors,
        enhance: trafficPostEnhance,
        message: trafficPostMessage,
    } = superForm(data.trafficPostForm, {
        dataType: "json",
    });

    const {
        form: deleteForm,
        enhance: deleteEnhance,
        message: deleteMessage,
    } = superForm(data.deleteForm, {
        dataType: "json",
    });

    $: if ($trafficPostMessage) {
        close();
        open({
            id: $trafficPostMessage.action,
        });
    }

    $: if ($deleteMessage) {
        close();
        open({
            id: $deleteMessage.action,
        });
    }

    const { supabase } = getSupabaseContext();

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
                            id: "updateTrafficPost",
                            props: {
                                info: info.row.original as Types.TrafficPost,
                            },
                        }),
                    fireView: () => {
                        open({
                            props: {
                                info: info.row.original as Types.TrafficPost,
                            },
                            id: "viewTrafficPost",
                        });
                    },
                    fireDelete: () =>
                        open({
                            id: "deleteTrafficPost",
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

<svelte:head><title>Traffic Post</title></svelte:head>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Traffic Post</h1>
    <div style="margin-left:auto">
        <Button on:click={() => open({ id: "addTrafficPost", props: {} })}
            >Add</Button
        >
    </div>
</header>

<!--Table -->
<DataList table="traffic_posts" let:data initData={data.trafficPost ?? []}>
    <TanTable {data} {columns}></TanTable>
</DataList>

<Overlay title="Add TrafficPost" id="addTrafficPost" let:data>
    <form
        method="POST"
        class="w-[500px] h-full flex flex-col"
        action="?/add"
        use:trafficPostEnhance
        on:submit={close}
    >
        <AddTrafficPost
            form={trafficPostForm}
            errors={trafficPostForm}
            on:close={close}
            initData={data}
        />
    </form>
</Overlay>

<Overlay title="Update trafficPost" id="updateTrafficPost" let:data>
    <form
        method="POST"
        class="w-[500px] h-full flex flex-col"
        action="?/update"
        use:trafficPostEnhance
        on:submit={close}
    >
        <AddTrafficPost
            form={trafficPostForm}
            errors={trafficPostErrors}
            on:close={close}
            initData={data}
        />
    </form>
</Overlay>

<Overlay let:data title="" id="deleteTrafficPost" type="modal">
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

<Overlay let:data title="View TrafficPost" id="viewTrafficPost">
    <ViewTrafficPost info={data} {supabase} />
</Overlay>
