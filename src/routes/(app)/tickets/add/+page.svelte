<script>
  import { ArrowLeft, Plus } from "lucide-svelte";

  import Tables from "$lib/components/Table/tables.svelte";

  import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "$lib/components/Overlays/Modal/Modal";

  import {
    Button,
    Divider,
    TextInput,
    Label,
    Grid,
    GridCol,
    IconButton,
  } from "$lib/Components";
  import ListTile from "$lib/components/Base/ListTile.svelte";
</script>

<header style="display: flex; align-items: center;">
  <button><ArrowLeft style="margin-right: 10px;" /></button>
  <h1 style="font-weight: bold;">New Ticket</h1>
</header>

<!-- Add Violations-->
<div class="flex justify-end">
  <Button data-hs-overlay="#hs-add-violation-modal">Add Violations</Button>
</div>

<Modal modalId="hs-add-violation-modal">
  <ModalHeader>Add Violations</ModalHeader>

  <ModalBody>
    <TextInput id="search" placeholder="Add Violation" />

    <ListTile name="Violation 1" amount="500" />
    <ListTile name="Violation 1" amount="500" />
    <ListTile name="Violation 1" amount="500" />
    <ListTile name="Violation 1" amount="500" />
    <ListTile name="Violation 1" amount="500" />
    <ListTile name="Violation 1" amount="500" />
  </ModalBody>

  <ModalFooter></ModalFooter>
</Modal>

<Grid columns="grid-cols-6" gap="gap-4">
  <!-- Violator Details -->
  <GridCol colSpan="col-span-2">
    <Label classNames="mt-3">Violator</Label>
    <Divider border={2} />
    <div class="my-4">
      <Label id="input-label">Last Name</Label>
      <TextInput id="input-label" placeholder="Ex. Valdez" />
    </div>
    <div class="my-4">
      <Label id="input-label">First Name</Label>
      <TextInput id="input-label" placeholder="Ex. Juan" />
    </div>
    <div class="my-4">
      <Label id="input-label">Middle Name</Label>
      <TextInput id="input-label" placeholder="Ex. Agapito" />
    </div>
    <Grid columns="grid grid-cols-3" gap="gap-2">
      <GridCol>
        <Label id="input-label">Suffix</Label>
        <TextInput id="input-label" placeholder="Ex. Jr" />
      </GridCol>
      <GridCol colSpan="col-span-2">
        <Label id="input-label">Birthday</Label>
        <!-- <TextInput id="input-label" type="date" /> -->
      </GridCol>
      <GridCol></GridCol>
    </Grid>
  </GridCol>
  <!-- Violator Details End -->

  <!-- Ticket Details -->
  <GridCol colSpan="col-span-2">
    <Label id="input-label" classNames="mt-3">Ticket Details</Label>
    <Divider border={2} />
    <div class="my-4">
      <Label id="input-label">Ticket Number</Label>
      <TextInput id="input-label" placeholder="Ex. 123123" />
    </div>
    <div class="my-4">
      <Label id="input-label">Location</Label>
      <TextInput id="input-label" placeholder="Ex. Post 1" />
    </div>
    <div class="my-4">
      <Label id="input-label">Apprehending Officer</Label>
      <TextInput id="input-label" placeholder="Ex. Agapito" />
    </div>
    <div class="my-4">
      <Label id="input-label">Apprehension Date</Label>
      <!-- <TextInput id="input-label" type="date" /> -->
    </div>
  </GridCol>
  <!-- Ticket Details End -->

  <!-- Violations -->

  <GridCol colSpan="col-span-2">
    <Label id="input-label" classNames="mt-3">Violations</Label>
    <Divider border={2} />
  </GridCol>
</Grid>

<!-- Table -->
<!-- Table Section -->
<Tables />
<footer class="flex justify-end gap-4 m-11">
  <Button style="soft" color="gray">Cancel</Button>
  <Button>Add</Button>
</footer>
