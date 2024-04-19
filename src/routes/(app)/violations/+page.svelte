<script lang="ts">
  import {
    Button,
    TanTable,
    EnabledStatus,
    RowActions,
    ViolationFines,
  } from "$lib/Components";
  import { DataList } from "$lib/components/Supabase/Supabase";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import { overlayStore } from "$lib/stores/overlayStore";
  import Overlay from "$lib/components/Overlays/Overlay.svelte";
  import ViolationAdd from "$lib/components/Overlays/Offcanvas/ViolationAdd.svelte";
  import ViewViolation from "$lib/components/Overlays/Offcanvas/ViewViolation.svelte";
  import { getSupabaseContext } from "$lib/stores/clientStore";
  import SuperDebug, { superForm } from "sveltekit-superforms";

  export let data;

  const { open, close } = overlayStore;

  const { form, errors, enhance, message } = superForm(data.form);

  $: if ($message === "success") {
    close();
    open({
      id: "success",
      props: {},
    });
  }

  const { supabase } = getSupabaseContext();

  const columns: ColumnDef<Types.Violation>[] = [
    {
      accessorKey: "name",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Name",
    },
    {
      accessorKey: "fine",
      cell: (info) => flexRender(ViolationFines, { fine: info.getValue() }),
      footer: (info) => info.column.id,
      header: "Fine",
    },
    {
      accessorKey: "enabled",
      cell: (info) => flexRender(EnabledStatus, { enabled: info.getValue() }),
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
      accessorKey: "deleted_at",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Deleted At",
      accessorFn: (row) => {
        if (row.deleted_at) {
          return new Date(row.deleted_at).toDateString();
        }
      },
    },
    {
      accessorKey: "id",
      cell: (info) =>
        flexRender(RowActions, {
          fireEdit: () => {},
          fireView: () => {
            open({
              props: {
                info: info.row.original as Types.Violation,
              },
              id: "viewViolation",
            });
          },
          fireDelete: () => {},
        }),
      header: "Actions",
      enableSorting: false,
    },
  ];
</script>

<svelte:head><title>Violations</title></svelte:head>

<header style="display: flex; align-items: center;">
  <h1 style="font-weight: bold;">Violation</h1>
  <div style="margin-left:auto">
    <Button
      on:click={() =>
        open({
          props: {},
          id: "addViolation",
        })}>Add Violation</Button
    >
  </div>
</header>

<DataList table="violations" let:data initData={data.violations ?? []}>
  <TanTable {data} {columns}></TanTable>
</DataList>

<Overlay title="Add Violation" id="addViolation">
  <form
    method="POST"
    class="w-[500px] h-full flex flex-col"
    action="?/add"
    use:enhance
  >
    <ViolationAdd superForm={form} {errors} on:close={close} />
  </form>
</Overlay>

<Overlay let:data title="View Violation" id="viewViolation">
  <ViewViolation info={data} {supabase} />
</Overlay>

<Overlay title="Success" id="success" type="modal">
  <h3>SUCCESS</h3>
</Overlay>
