<script>
  import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
  } from "$lib/components/Overlays/Modal/Modal";

  import { Button, TableHead, Tables, TextInput, Label } from "$lib/Components";
  import DataList from "$lib/components/Supabase/DataList.svelte";

  export let data;
</script>

<header style="display: flex; align-items: center;">
  <h1 style="font-weight: bold;">Violation</h1>
  <div style="margin-left:auto">
    <Button data-hs-overlay="#hs-add-violation-modal">Add Violation</Button>
  </div>
</header>

<DataList table="violations" let:data initData={data.violations ?? []}>
  {#each data as violations}
    <tr>
      <td>{violations.id}</td>
    </tr>
  {/each}
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
