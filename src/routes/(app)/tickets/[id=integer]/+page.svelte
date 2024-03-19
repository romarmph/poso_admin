<script>
  import { ArrowLeft, Plus } from "lucide-svelte";
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
  import ListTile2 from "$lib/components/Base/ListTile2.svelte";
  import Tables from "$lib/components/Table/tables.svelte";
  import TableHead from "$lib/components/Table/TableHead.svelte";
  import Dropdown from "$lib/components/Base/Dropdown.svelte";
  import TableBody from "$lib/components/Table/TableBody.svelte";
  import { MoreHorizontal, Download, ListFilter, Search } from "lucide-svelte";
  import DatePicker from "$lib/components/Forms/DatePicker.svelte";
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
        <DatePicker id="apprehensionate" />
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
<Tables>
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead class="bg-gray-50 dark:bg-slate-800">
      <tr>
        <TableHead name="" classes="ps-6 py-3 text-start"
          ><input
            type="checkbox"
            class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-at-with-checkboxes-main"
          />
        </TableHead>
        <TableHead name="Offense" classes="px-6 py-3 text-start" />
        <TableHead name="Ticket No." classes="px-6 py-3 text-start" />
        <TableHead name="Identification" classes="px-6 py-3 text-start" />
        <TableHead name="Violator Name" classes="px-6 py-3 text-start" />
        <TableHead name="Location" classes="px-6 py-3 text-start" />
        <TableHead name="Officer" classes="px-6 py-3 text-start" />
        <TableHead name="Status" classes="px-6 py-3 text-start" />
        <TableHead name="Violation Date" classes="px-6 py-3 text-start" />
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr>
        <TableBody classed="ps-6 py-3 text-start">
          <input
            type="checkbox"
            class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-at-with-checkboxes-1"
          />
        </TableBody>
        <TableBody>123</TableBody>
        <TableBody>123</TableBody>
        <TableBody>123</TableBody>
        <TableBody>123</TableBody>
        <TableBody>123</TableBody>
        <TableBody>
          <button
            type="button"
            class="block"
            data-hs-overlay="#hs-ai-invoice-modal"
          >
            <span
              class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
            >
              Enable
            </span>
          </button></TableBody
        >
        <TableBody>123</TableBody>
        <TableBody>123</TableBody>
        <TableBody
          ><div
            class="group inline-flex items-center divide-x divide-gray-300 border border-gray-300 bg-white shadow-sm rounded-lg transition-all dark:divide-gray-700 dark:bg-slate-700 dark:border-gray-700"
          >
            <div class="hs-tooltip inline-block">
              <a
                class="hs-tooltip-toggle py-1.5 px-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-s-md bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <Download />
                <span
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
                  role="tooltip"
                >
                  Download PDF
                </span>
              </a>
            </div>
            <Dropdown over="hs-edit-tickets-modal" del="hs-del-tickets-modal"
              ><MoreHorizontal /></Dropdown
            >
          </div></TableBody
        >
      </tr>
    </tbody>
  </table>
</Tables>
<header style="display: flex; margin-top: 20px;">
  <Label id="input-label" classNames="mt-3">Other Info</Label>
</header>
<footer class="flex justify-end gap-2">
  <Button size="large" color="gray" style="soft">Back</Button>
  <Button size="large" color="blue">Update</Button>
  <Button data-hs-overlay="#hs-pay-modal" size="large" color="teal">Pay</Button>
</footer>

<Modal modalId="hs-pay-modal">
  <ModalHeader>Pay Tickets</ModalHeader>

  <ModalBody>
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

  <ModalFooter></ModalFooter>
</Modal>
