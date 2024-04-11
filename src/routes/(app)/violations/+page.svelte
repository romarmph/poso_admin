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
  import RowActions from "$lib/components/Table/RowActions.svelte";

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
      cell: () => flexRender(RowActions, {}),
      header: "Actions",
      enableSorting: false,
    },
  ];
  export let data;
</script>

<header style="display: flex; align-items: center;">
  <h1 style="font-weight: bold;">Violation</h1>
  <div style="margin-left:auto">
    <Button data-hs-overlay="#hs-add-violation-modal">Add Violation</Button>
  </div>
</header>

<DataList table="violations" let:data initData={data.violations ?? []}>
  <TanTable {data} {columns}></TanTable>
</DataList>

<Modal modalId="hs-add-violation-modal">
  <ModalHeader>Add Violation</ModalHeader>

  <ModalBody>
    <div class="p-4 overflow-y-auto">
      <Label id="input-label">Violation Name</Label>

      <TextInput id="input-Label" placeholder="Type violation here" />
    </div>
    <div class="p-4 overflow-y-auto">
      <Label id="input-label">Amount Fine</Label>

      <TextInput id="input-Label" placeholder="Type amount fine here" />
    </div>
  </ModalBody>

  <ModalFooter>
    <Button data-hs-overlay="#hs-add-TPost-modal" style="soft" color="gray"
      >Cancel</Button
    >
    <Button>Save</Button>
  </ModalFooter>
</Modal>
