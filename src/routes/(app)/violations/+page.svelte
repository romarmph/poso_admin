<script lang="ts">
  import { Button, TanTable, RowActions } from "$lib/Components";
  import { DataList } from "$lib/components/Supabase/Supabase";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import { overlayStore } from "$lib/stores/overlayStore";
  import Overlay from "$lib/components/Overlays/Overlay.svelte";
  import ViolationAdd from "$lib/components/Overlays/Offcanvas/ViolationAdd.svelte";
  import ViewViolation from "$lib/components/Overlays/Offcanvas/ViewViolation.svelte";
  import { getSupabaseContext } from "$lib/stores/clientStore";
  import { superForm } from "sveltekit-superforms";
  import ConfirmDelete from "$lib/components/Overlays/Modal/Delete/ConfirmDelete.svelte";

  export let data;

  const { open, close } = overlayStore;

  const {
    form: violationForm,
    errors: violationErrors,
    enhance: violationEnhance,
    message: violationMessage,
    reset: violationFormReset,
  } = superForm(data.violationForm, {
    dataType: "json",
  });

  const {
    form: deleteForm,
    enhance: deleteEnhance,
    message: deleteMessage,
  } = superForm(data.deleteForm, {
    dataType: "json",
  });

  $: if ($violationMessage) {
    if ($violationMessage.success) {
      close();
    }
    if ($violationMessage.action.length > 0) {
      open({
        id: $violationMessage.action,
      });
    }
  }

  $: if ($deleteMessage) {
    close();
    open({
      id: $deleteMessage.action,
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
            violationFormReset();
            open({
              id: "updateViolation",
              props: {
                info: info.row.original as Types.Violation,
              },
            });
          },
          fireView: () => {
            open({
              props: {
                info: info.row.original as Types.Violation,
              },
              id: "viewViolation",
            });
          },
          fireDelete: () =>
            open({
              id: "deleteViolation",
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

<svelte:head><title>Violations</title></svelte:head>

<header style="display: flex; align-items: center;">
  <h1 style="font-weight: bold;">Violation</h1>
  <div style="margin-left:auto">
    <Button
      on:click={() => {
        violationFormReset();
        open({
          props: {},
          id: "addViolation",
        });
      }}
    >
      Add Violation
    </Button>
  </div>
</header>

<DataList table="violations" let:data initData={data.violations ?? []}>
  <TanTable {data} {columns}></TanTable>
</DataList>

<Overlay title="Add Violation" id="addViolation" let:data type="modal">
  <form method="POST" action="?/add" use:violationEnhance>
    <ViolationAdd
      form={violationForm}
      errors={violationErrors}
      on:close={close}
      initData={data}
    />
  </form>
</Overlay>

<Overlay title="Update Violation" id="updateViolation" let:data type="modal">
  <form method="POST" action="?/update" use:violationEnhance>
    <ViolationAdd
      form={violationForm}
      errors={violationErrors}
      on:close={close}
      initData={data}
    />
  </form>
</Overlay>

<Overlay let:data title="" id="deleteViolation" type="modal">
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

<Overlay let:data title="View Violation" id="viewViolation" type="modal">
  <ViewViolation info={data} {supabase} />
</Overlay>
