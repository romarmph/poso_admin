<script>
  import { Button, Divider, TextInput } from "$lib/Components";
  import Grid from "$lib/components/Layout/Grid.svelte";
  import GridCol from "$lib/components/Layout/GridCol.svelte";
  import Overlay from "$lib/components/Overlays/Overlay.svelte";
  import { overlayStore } from "$lib/stores/overlayStore";
  const { open, close } = overlayStore;

  export let data;
  let selectedViolations = [];
</script>

<svelte:head><title>Add Ticket</title></svelte:head>

<header style="display: flex; align-items: center;">
  <h1 class="text-2xl font-bold text-gray-800">New Ticket</h1>
  <div class="ms-auto">
    <Button data-hs-overlay="#hs-add-violation-modal">Add Violations</Button>
  </div>
</header>
<form action="?/create" method="POST" class="mt-4">
  <Divider strokeWidth={1}>
    <h2 slot="left" class="text-gray-600 text-xl">Violator Information</h2>
  </Divider>
  <Grid columns="grid-cols-6" gap="gap-4" classNames="my-4">
    <GridCol colSpan="col-span-2">
      <label class="text-gray-500" for="license_no">License Number</label>
      <TextInput id="license_no" type="text" />
    </GridCol>
    <GridCol colSpan="col-span-2">
      <label class="text-gray-500" for="first_name">First Name</label>
      <TextInput id="first_name" type="text" />
    </GridCol>
    <GridCol colSpan="col-span-2">
      <label class="text-gray-500" for="middle_name">Middle Name</label>
      <TextInput id="middle_name" type="text" />
    </GridCol>
    <GridCol colSpan="col-span-2">
      <label class="text-gray-500" for="last_name">Last Name</label>
      <TextInput id="last_name" type="text" />
    </GridCol>
    <GridCol colSpan="col-span-2">
      <label class="text-gray-500" for="suffix">Suffix</label>
      <TextInput id="suffix" type="text" />
    </GridCol>
    <GridCol colSpan="col-span-2">
      <label class="text-gray-500" for="birthdate">Birthdate</label>
      <TextInput id="birthdate" type="date" />
    </GridCol>
  </Grid>

  <Grid columns="grid-cols-2" gap="gap-8" classNames="my-6">
    <GridCol>
      <Divider strokeWidth={1}>
        <h2 slot="left" class="text-gray-600 text-xl">Ticket Information</h2>
      </Divider>
      <Grid columns="grid-cols-4" gap="gap-4" classNames="my-4">
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="plate_no">Place Number</label>
          <TextInput id="plate_no" type="text" />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="chassis_no">Chassis Number</label>
          <TextInput id="chassis_no" type="text" />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="engine_no">Engine Number</label>
          <TextInput id="engine_no" type="text" />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="ticket_no">Ticket Number</label>
          <TextInput id="ticket_no" type="text" />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="vehicle_type">Vehicle Type</label>
          <select
            class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            name="vehicle_type"
            id="vehicle_type"
          >
            <option selected={true} value="0">Open this select menu</option>

            {#if data.vehicleTypes}
              {#each data.vehicleTypes as type}
                <option value={type.id}>{type.type}</option>
              {/each}
            {/if}
          </select>
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="location">Location</label>
          <TextInput id="location" type="text" />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="violation_date"
            >Violation Date</label
          >
          <TextInput id="violation_date" type="date" />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="violation_time"
            >Violation Time</label
          >
          <TextInput id="violation_time" type="time" />
        </GridCol>
      </Grid>
    </GridCol>
    <GridCol>
      <Divider strokeWidth={1}>
        <h2 slot="left" class="text-gray-600 text-xl">Violations</h2>
        <Button
          type="button"
          slot="right"
          size="small"
          style="soft"
          on:click={() =>
            open({
              id: "violations",
              props: {},
            })}>Add Violation</Button
        >
      </Divider>
      <div class="overflow-auto h-fit">
        <div class="flex flex-col gap-2">
          {#if data.violations}
            {#each data.violations as violation}
              <p>{violation.name}</p>
            {/each}
          {/if}
        </div>
      </div>
    </GridCol>
  </Grid>
  <div class="flex justify-end gap-4 mt-4">
    <a href="/tickets">
      <Button type="button" style="soft" color="gray">Cancel</Button>
    </a>
    <Button type="submit">Save Ticket</Button>
  </div>
</form>

<Overlay title="Select Violations" type="canvas" id="violations" let:data
></Overlay>
