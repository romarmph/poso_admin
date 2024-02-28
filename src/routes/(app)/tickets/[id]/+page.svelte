<script>
  import { ArrowLeft } from "lucide-svelte";
  import Grid from "$lib/components/Layout/Grid.svelte";
  import GridCol from "$lib/components/Layout/GridCol.svelte";
  import Tables from "$lib/components/Table/tables.svelte";
  import Button from "$lib/components/Base/Button.svelte";
  import Label from "$lib/components/Forms/Label.svelte";
  import TextInput from "$lib/components/Forms/TextInput.svelte";
  import Divider from "$lib/components/Base/Divider.svelte";
  import { DatePicker } from "$lib/Components";
  import ListTile2 from "$lib/components/Base/ListTile2.svelte";
  import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "$lib/components/Modal/Modal";
</script>

<header style="display: flex; align-items: center;">
  <button><ArrowLeft style="margin-right: 10px;" /></button>
  <h1 style="font-weight: bold;">New Ticket</h1>
</header>
<!--Modal-->

<Grid columns="grid-cols-6" gap="gap-4">
  <GridCol colSpan="col-span-2">
    <Label id="input-label" classNames="mt-3">Violator</Label>
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
        <Label id="birthday">Birthday</Label>
        <DatePicker id="birthday" />
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
    <Grid columns="grid grid-cols-3" gap="gap-2">
      <GridCol colSpan="col-span-2">
        <Label id="input-label">Apprehension Date</Label>
      </GridCol>
      <GridCol></GridCol>
    </Grid>
  </GridCol>
  <!-- Ticket Details End -->

  <!-- Violations -->

  <GridCol colSpan="col-span-2">
    <Label id="input-label" classNames="mt-3">Violations</Label>
    <Divider border={2} />
  </GridCol>
  <!-- Violations End -->
</Grid>
<header style="display: flex; margin-top: 20px;">
  <Label id="input-label" classNames="mt-3">Matched Tickets</Label>
</header>

<!-- Table -->
<!-- Table Section -->
<Tables />
<header style="display: flex; margin-top: 20px;">
  <Label id="input-label" classNames="mt-3">Other Info</Label>
</header>
<footer class="flex justify-end gap-4">
  <Button size="large" color="gray" style="soft">Back</Button>
  <Button size="large" color="blue">Update</Button>
  <Button data-hs-overlay="#hs-pay-modal" size="large" color="teal">Pay</Button>
</footer>

<Modal modalId="hs-pay-modal">
  <ModalHeader slot="header">Pay Tickets</ModalHeader>

  <ModalBody slot="body">
    <ListTile2 title="Ticket No." descrip="151232" />
    <ListTile2 title="Violator" descrip="Marbert Cerda" />
    <ListTile2 title="Offense" descrip="1" />
    <ListTile2 title="Date" descrip="February 20, 2024" />
    <Label id="input-label" classNames="mt-3 pt-4">Violator</Label>
    <ListTile2 title="Illegal Parking" descrip="500" />
    <ListTile2 title="Illegal Parking" descrip="500" />
    <ListTile2 title="Illegal Parking" descrip="500" />
    <Label id="input-label" classNames="mt-3 pt-4">Amount to pay</Label>

    <TextInput id="input-label" placeholder="OR Number" />

    <div class="flex p-4">
      <input
        type="checkbox"
        class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
        id="hs-default-checkbox"
      />
      <label
        for="hs-default-checkbox"
        class="text-sm text-gray-500 ms-3 dark:text-gray-400">Discounted</label
      >
    </div>
    <TextInput id="input-label" placeholder="Amount Paid" />

    <TextInput id="input-label" placeholder="Date Paid" classNames="mt-3" />
  </ModalBody>

  <ModalFooter slot="footer"></ModalFooter>
</Modal>
