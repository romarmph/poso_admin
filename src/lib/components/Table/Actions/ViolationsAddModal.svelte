<script lang="ts">
  import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
  } from "$lib/components/Overlays/Modal/Modal";
  import { Label, TextInput, Button } from "$lib/Components";
</script>

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
