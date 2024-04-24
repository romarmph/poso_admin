<script lang="ts">
  import { Button, Divider, TextInput } from "$lib/Components";
  import Grid from "$lib/components/Layout/Grid.svelte";
  import GridCol from "$lib/components/Layout/GridCol.svelte";
  import Overlay from "$lib/components/Overlays/Overlay.svelte";
  import { overlayStore } from "$lib/stores/overlayStore";
  import { X } from "lucide-svelte";
  import { dateProxy, superForm } from "sveltekit-superforms";
  import TicketIdentificationType from "$lib/enums/TicketIdentificationType.js";

  const { open, close } = overlayStore;

  export let data;
  const pageData = data;

  const {
    form: ticketForm,
    errors: ticketErrors,
    enhance: ticketEnhance,
    message: ticketMessage,
  } = superForm(pageData.ticketForm, {
    dataType: "json",
  });

  let selectedViolations: Types.Violation[];

  $: {
    selectedViolations = data.violations!.filter((val) =>
      $ticketForm.violations.includes(val.id),
    );
  }

  function removeViolation(index: number) {
    selectedViolations.splice(index, 1);
    selectedViolations = selectedViolations;
    $ticketForm.violations.splice(index, 1);
  }

  const birthdateProxy = dateProxy(ticketForm, "birthdate", { format: "date" });
  const violationDateProxy = dateProxy(ticketForm, "violation_date", {
    format: "date",
  });
  let violation_time = "12:00";

  $: $ticketForm.violation_time = violation_time;
</script>

<svelte:head><title>Add Ticket</title></svelte:head>

<header style="display: flex; align-items: center;">
  <h1 class="text-2xl font-bold text-gray-800">New Ticket</h1>
</header>
<form action="?/create" method="POST" class="mt-4" use:ticketEnhance>
  <Grid columns="grid-cols-2" gap="gap-8" classNames="my-2">
    <Divider strokeWidth={1}>
      <h2 slot="left" class="text-gray-600 text-xl">Violator Information</h2>
    </Divider>
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
  </Grid>
  <Grid columns="grid-cols-2" gap="gap-8">
    <GridCol>
      <Grid columns="grid-cols-4" gap="gap-4">
        <!-- NOTE: VIOLATOR INFORMATION -->
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="last_name">Last Name</label>
          <TextInput
            id="last_name"
            type="text"
            bind:value={$ticketForm.last_name}
          />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="first_name">First Name</label>
          <TextInput
            id="first_name"
            type="text"
            bind:value={$ticketForm.first_name}
          />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="middle_name">Middle Name</label>
          <TextInput
            id="middle_name"
            type="text"
            bind:value={$ticketForm.middle_name}
          />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="suffix">Suffix</label>
          <TextInput id="suffix" type="text" bind:value={$ticketForm.suffix} />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="address">Address</label>
          <TextInput
            id="address"
            type="text"
            bind:value={$ticketForm.address}
          />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="birthdate">Birthdate</label>
          <TextInput id="birthdate" type="date" bind:value={$birthdateProxy} />
        </GridCol>
        <!-- NOTE: VIOLATOR INFORMATION -->

        <!-- NOTE: TICKET INFORMATION -->
        <GridCol colSpan="col-span-4">
          <Divider strokeWidth={1}>
            <h2 slot="left" class="text-gray-600 text-xl">
              Ticket Information
            </h2>
          </Divider>
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="ticket_no">Ticket Number</label>
          <TextInput
            id="ticket_no"
            type="text"
            bind:value={$ticketForm.ticket_no}
          />
          {#if $ticketErrors.ticket_no}
            <div class="text-red-500 text-sm">{$ticketErrors.ticket_no}</div>
          {/if}
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="enforcer">Apprending Enforcer</label
          >
          <select
            class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            name="enforcer"
            id="enforcer"
            bind:value={$ticketForm.enforcer}
          >
            <option selected={true} value="0">Open this select menu</option>
            {#if data.enforcers}
              {#each data.enforcers as enforcer}
                <option value={enforcer.id}
                  >{enforcer.first_name} {enforcer.last_name}</option
                >
              {/each}
            {/if}
          </select>
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="identifcation_type"
            >Identification Type</label
          >
          <select
            class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            name="identification_type"
            id="identification_type"
            bind:value={$ticketForm.identification_type}
          >
            <option selected={true} value="0">Open this select menu</option>
            <option value={TicketIdentificationType.LICENSE_NO}
              >License Number</option
            >
            <option value={TicketIdentificationType.PLATE_NO}
              >Plate Number</option
            >
            <option value={TicketIdentificationType.CHASSIS_NO}
              >Chassis Number</option
            >
            <option value={TicketIdentificationType.ENGINE_NO}
              >Engine Number</option
            >
          </select>
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="license_no"
            >Idenfication Number</label
          >
          <TextInput
            id="license_no"
            type="text"
            bind:value={$ticketForm.identification}
          />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="vehicle_type">Vehicle Type</label>
          <select
            class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            name="vehicle_type"
            id="vehicle_type"
            bind:value={$ticketForm.vehicle_type}
          >
            <option selected={true} value="0">Open this select menu</option>

            {#if pageData.vehicleTypes}
              {#each pageData.vehicleTypes as type}
                <option value={type.id}>{type.type}</option>
              {/each}
            {/if}
          </select>
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="location">Location</label>
          <TextInput
            id="location"
            type="text"
            bind:value={$ticketForm.location}
          />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="violation_date"
            >Violation Date</label
          >
          <TextInput
            id="violation_datetime"
            type="date"
            bind:value={$violationDateProxy}
          />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="violation_date"
            >Violation Date</label
          >
          <TextInput
            id="violation_datetime"
            type="time"
            bind:value={violation_time}
          />
        </GridCol>
        <!-- NOTE: TICKET INFORMATION -->
      </Grid>
    </GridCol>

    <!-- NOTE: SELECTED VIOLATIONS -->
    <GridCol>
      <div class="flex flex-col justify-stretch items-stretch h-full gap-4">
        <div class="h-full box-border p-2 overflow-y-auto">
          {#if selectedViolations}
            {#each selectedViolations as selected, index}
              <div
                class="bg-gray-50 border border-gray-200 rounded-md p-2 flex my-3 items-center justify-between"
              >
                <div class="flex">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="violation-{selected.id}"
                    value={selected.id}
                    bind:group={$ticketForm.violations}
                  />
                  <label
                    for="violation-{selected.id}"
                    class="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                    >{selected.name}</label
                  >
                </div>

                <button
                  type="button"
                  class="bg-gray-100 rounded-full p-2"
                  on:click={() => removeViolation(index)}
                >
                  <X />
                </button>
              </div>
            {/each}
          {/if}
        </div>
        <div class="flex gap-2">
          <h3 class="text-lg text-gray-600">Total Violations Selected</h3>
          <p class="text-lg font-bold text-gray-700 text-end flex-1">
            {$ticketForm.violations.length}
          </p>
        </div>
      </div>
    </GridCol>
    <!-- NOTE: SELECTED VIOLATIONS -->

    <!-- NOTE: ACTION BUTTONS -->
    <div class="flex justify-end gap-4 mt-4 col-span-2 row-span-1">
      <a href="/tickets">
        <Button type="button" style="soft" color="gray">Cancel</Button>
      </a>
      <Button type="submit">Save Ticket</Button>
    </div>
    <!-- NOTE: ACTION BUTTONS -->
  </Grid>

  <!-- NOTE: VIOLATION OVERLAY -->
  <Overlay title="Select Violations" type="canvas" id="violations" let:data>
    <div class="w-[500px] h-full flex flex-col box-border pb-12">
      <div class="flex-1 overflow-y-auto pr-3">
        {#if pageData.violations}
          {#each pageData.violations as violation}
            <div
              class="bg-gray-50 border border-gray-200 rounded-md p-2 flex my-3"
            >
              <div class="flex">
                <input
                  type="checkbox"
                  class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="violation-{violation.id}"
                  value={violation.id}
                  bind:group={$ticketForm.violations}
                />
                <label
                  for="violation-{violation.id}"
                  class="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                  >{violation.name}</label
                >
              </div>
            </div>
          {/each}
        {/if}
      </div>
      <div class="flex justify-between gap-2 flex-1 max-h-12 mt-4 items-center">
        <p class="text-xl text-gray-600">
          Selected <span class="font-bold">{$ticketForm.violations.length}</span
          >
        </p>
        <div>
          <Button
            style="soft"
            color="gray"
            type="button"
            on:click={() => {
              $ticketForm.violations = [];
              close();
            }}>Cancel</Button
          >
          <Button
            type="button"
            on:click={() => {
              close();
            }}>Add Violations</Button
          >
        </div>
      </div>
    </div>
  </Overlay>
</form>

<style>
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ddd;
  }
</style>
