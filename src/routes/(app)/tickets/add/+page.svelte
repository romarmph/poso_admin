<script>
  import { ArrowLeft } from "lucide-svelte";

  import Tables from "$lib/components/Table/tables.svelte";

  import {
    Button,
    Divider,
    TextInput,
    Label,
    Grid,
    GridCol,
  } from "$lib/Components";
</script>

<header
  style="display: flex; justify-content: space-between; align-items: center;"
>
  <button><ArrowLeft style="margin-right: 10px;" /></button>
  <h1 style="font-weight: bold;">New Ticket</h1>
  <button
    type="button"
    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    data-hs-overlay="#hs-vertically-centered-modal"
    style="margin-left: auto; background-color: blue; color: white; padding: 5px 10px; border: none; border-radius: 5px;"
    >Add Violation</button
  >
</header>
<!--Modal-->
<div
  id="hs-vertically-centered-modal"
  class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
>
  <div
    class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"
  >
    <div
      class="w-full flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
    >
      <div
        class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"
      >
        <h3 class="font-bold text-gray-800 dark:text-white">Add Violations</h3>
        <button
          type="button"
          class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-overlay="#hs-vertically-centered-modal"
        >
          <span class="sr-only">Close</span>
          <svg
            class="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
          >
        </button>
      </div>
      <div class="p-4 overflow-y-auto">
        <input
          id="input-label"
          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          placeholder="Search"
        />
      </div>
      <div>
        <h1>asdasdasd</h1>
      </div>
      <div
        class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700"
      >
        <button
          type="button"
          class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-overlay="#hs-vertically-centered-modal"
        >
          Close
        </button>
        <button
          type="button"
          class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</div>

<Grid columns="grid-cols-6" gap="gap-4">
  <!-- Violator Details -->
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
<footer class="flex justify-end gap-4">
  <Button style="soft" color="gray">Cancel</Button>
  <Button>Add</Button>
</footer>
