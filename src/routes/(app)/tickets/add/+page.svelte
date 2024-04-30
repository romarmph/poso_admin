<script lang="ts">
  import { Button, Divider, TextInput } from "$lib/Components";
  import Grid from "$lib/components/Layout/Grid.svelte";
  import GridCol from "$lib/components/Layout/GridCol.svelte";
  import Overlay from "$lib/components/Overlays/Overlay.svelte";
  import { overlayStore } from "$lib/stores/overlayStore";
  import { X } from "lucide-svelte";
  import { dateProxy, superForm } from "sveltekit-superforms";
  import TicketIdentificationType from "$lib/enums/TicketIdentificationType.js";
  import VehicleSize from "$lib/components/Base/VehicleSize.svelte";
  import TanTable from "$lib/components/Table/TanTable.svelte";
  import ConfirmCreate from "$lib/components/Overlays/Modal/Create/ConfirmCreate.svelte";
  import ActionResultModals from "$lib/enums/ActionResultModals.js";
  import FailCreate from "$lib/components/Overlays/Modal/Create/FailCreate.svelte";
  import { getSupabaseContext } from "$lib/stores/clientStore.js";
  import ViewRelatedTickets from "$lib/components/Overlays/Offcanvas/ViewRelatedTickets.svelte";
  import RelatedTicketsActionts from "$lib/components/Table/Partials/RelatedTicketsAcionts.svelte";
  import TicketNumberColumn from "$lib/components/Customs/TicketNumberColumn.svelte";
  import TicketStatus from "$lib/components/Base/TicketStatus.svelte";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import ViewTickets from "$lib/components/Overlays/Offcanvas/ViewTickets.svelte";

  const { open, close } = overlayStore;

  export let data;
  const pageData = data;
  const { form, errors, enhance, message, submit } = superForm(pageData.form, {
    dataType: "json",
  });

  let selectedViolations: Types.Violation[];
  const birthdateProxy = dateProxy(form, "birthdate", { format: "date" });
  const violationDateProxy = dateProxy(form, "violation_date", {
    format: "date",
  });
  let violation_time = "12:00";
  let offense: number = 1;
  let selectedVehicleType: Types.VehicleTypes | null = null;
  let relatedTickets: Types.Ticket[] = [];
  const { supabase } = getSupabaseContext();
  let relatedTicket: Types.Ticket | null = null;

  const relatedTicketColumn: ColumnDef<Types.Ticket>[] = [
    {
      accessorKey: "id",
      cell: (info) => flexRender(TicketNumberColumn, { id: info.getValue() }),
      footer: (info) => info.column.id,
      header: "First Name",
    },
    {
      accessorKey: "first_name",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "First Name",
    },
    {
      accessorKey: "middle_name",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Middle Name",
    },
    {
      accessorKey: "last_name",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Last Name",
    },
    {
      accessorKey: "suffix",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Suffix",
    },
    {
      accessorKey: "birthdate",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Birth Date",
      accessorFn: (row) => {
        if (row.birthdate) {
          return new Date(row.birthdate).toDateString();
        }
      },
    },
    {
      accessorKey: "identification",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Identification",
      accessorFn: (row) => row.identification,
    },
    {
      accessorKey: "identification_type",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Identification Type",
      accessorFn: (row) => row.identification_type.toUpperCase(),
    },
    {
      accessorKey: "offense",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Offense",
      accessorFn: (row) => row.offense,
    },
    {
      accessorKey: "violation_date",
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: "Violation Date",
      accessorFn: (row) => new Date(row.violation_date).toDateString(),
    },
    {
      accessorKey: "status",
      cell: (info) => flexRender(TicketStatus, { status: info.getValue() }),
      footer: (info) => info.column.id,
      header: "Status",
    },
    {
      accessorKey: "id",
      cell: (info) =>
        flexRender(RelatedTicketsActionts, {
          fireView: () => {
            open({
              props: {
                info: info.row.original as Types.Ticket,
              },
              id: "viewRelated",
            });
          },
          fireSet: () => {
            relatedTicket = info.row.original;
          },
        }),
      header: "Actions",
      enableSorting: false,
    },
  ];

  function removeViolation(index: number) {
    selectedViolations.splice(index, 1);
    selectedViolations = selectedViolations;
    $form.violations.splice(index, 1);
  }

  async function fetchRelated() {
    if ($form.identification_type === TicketIdentificationType.LICENSE_NO) {
      const { data } = await supabase
        .from("tickets")
        .select()
        .ilike("identification", `%${$form.identification}%`)
        .eq("identification_type", TicketIdentificationType.LICENSE_NO);
      if (data) {
        relatedTickets = [...data];
      }
    } else {
      const { data: name } = await supabase
        .from("tickets")
        .select()
        .ilike("first_name", `%${$form.first_name}%`)
        .ilike("last_name", `%${$form.last_name}%`);

      if (name) {
        relatedTickets = [...name];
      }

      if ($form.identification.length) {
        const { data: identification } = await supabase
          .from("tickets")
          .select()
          .ilike("identification", `%${$form.identification}%`);

        if (identification) {
          relatedTickets = [...identification];

          if (name) {
            relatedTickets = [...identification, ...name];
          }
        }
      }
    }

    relatedTickets = relatedTickets.filter((value, index, self) => {
      const find = self.findIndex((t) => t.id === value.id);
      return index === find;
    });
  }

  function getFine(
    violation: Types.Violation,
    offense: number,
    type: Types.VehicleTypes,
  ) {
    const big = !type ? "big" : type.big_vehicle ? "big" : "small";
    if (offense >= 3) {
      if (violation.fine[big].c !== 0) {
        return violation.fine[big].c;
      }

      if (violation.fine[big].b !== 0) {
        return violation.fine[big].b;
      }
      return violation.fine[big].a;
    }

    if (offense === 2) {
      if (violation.fine[big].b !== 0) {
        return violation.fine[big].b;
      }
      return violation.fine[big].a;
    }
    return violation.fine[big].a;
  }
  $: {
    selectedViolations = data.violations!.filter((val) => {
      return $form.violations.includes(val.id);
    });
  }

  $: $form.violation_time = violation_time;
  $: $form.offense = offense;
  $: if (data.vehicleTypes) {
    selectedVehicleType = data.vehicleTypes.filter(
      (type) => type.id == $form.vehicle_type,
    )[0];
  }

  $: if (relatedTicket) {
    offense = relatedTicket.offense + 1;
    $form.previous_offense = parseInt(relatedTicket.id);
  } else {
    offense = 1;
  }

  $: {
    const selected: Types.Violation[] = data.violations!.filter((value) =>
      $form.violations.includes(value.id),
    );

    const type = data.vehicleTypes!.find(
      (item) => item.id === $form.vehicle_type,
    );

    $form.fine = selected.reduce(
      (sum, fuckit) => sum + getFine(fuckit, offense, type),
      0,
    );
  }

  $: if ($message) {
    if ($message.success) {
      close();
    }
    if ($message.action.length > 0) {
      open({
        id: $message.action,
      });
    }
  }
</script>

<svelte:head><title>Add Ticket</title></svelte:head>

<header class="flex items-center justify-between">
  <h1 class="text-2xl font-bold text-gray-800">New Ticket</h1>
  <!-- NOTE: ACTION BUTTONS -->
  <div class="flex justify-end gap-4 mt-4 col-span-2 row-span-1">
    <a href="/tickets">
      <Button type="button" style="soft" color="gray">Cancel</Button>
    </a>
    <Button
      type="submit"
      on:click={() =>
        open({
          id: "confirmAdd",
          props: {},
        })}>Save Ticket</Button
    >
  </div>
  <!-- NOTE: ACTION BUTTONS -->
</header>
<form action="?/create" method="POST" class="mt-4" use:enhance>
  <input
    type="number"
    name="offense"
    class="hidden"
    bind:value={offense}
    id=""
  />
  <input
    type="number"
    name="fine"
    bind:value={$form.fine}
    id=""
    class="hidden"
  />
  {#if relatedTicket}
    <input
      type="number"
      name="previous_offense"
      class="hidden"
      bind:value={relatedTicket.id}
    />
    <div
      class="bg-blue-100 border border-blue-500 text-blue-500 p-4 rounded-lg flex items-center justify-between"
    >
      <span>
        Ticket #<TicketNumberColumn id={parseInt(relatedTicket.id)} /> of
        <span class="font-bold"
          >{relatedTicket.first_name}
          {relatedTicket.last_name}
        </span> has been selected as previous offense.
      </span>
      <button
        class="bg-none border-none"
        type="button"
        on:click={() => (relatedTicket = null)}><X /></button
      >
    </div>
  {/if}
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
            bind:value={$form.last_name}
            callback={fetchRelated}
          />
          {#if $errors.last_name}
            <div class="text-red-500 text-sm">{$errors.last_name}</div>
          {/if}
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="first_name">First Name</label>
          <TextInput
            id="first_name"
            type="text"
            bind:value={$form.first_name}
            callback={fetchRelated}
          />
          {#if $errors.first_name}
            <div class="text-red-500 text-sm">{$errors.first_name}</div>
          {/if}
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="middle_name">Middle Name</label>
          <TextInput
            id="middle_name"
            type="text"
            bind:value={$form.middle_name}
          />
          {#if $errors.middle_name}
            <div class="text-red-500 text-sm">{$errors.middle_name}</div>
          {/if}
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="suffix">Suffix</label>
          <TextInput id="suffix" type="text" bind:value={$form.suffix} />
          {#if $errors.suffix}
            <div class="text-red-500 text-sm">{$errors.suffix}</div>
          {/if}
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="address">Address</label>
          <TextInput id="address" type="text" bind:value={$form.address} />
          {#if $errors.address}
            <div class="text-red-500 text-sm">{$errors.address}</div>
          {/if}
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="birthdate">Birthdate</label>
          <TextInput id="birthdate" type="date" bind:value={$birthdateProxy} />
          {#if $errors.birthdate}
            <div class="text-red-500 text-sm">{$errors.birthdate}</div>
          {/if}
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
          <TextInput id="ticket_no" type="text" bind:value={$form.ticket_no} />
          {#if $errors.ticket_no}
            <div class="text-red-500 text-sm">{$errors.ticket_no}</div>
          {/if}
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="enforcer">Apprending Enforcer</label
          >
          <select
            class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            name="enforcer"
            id="enforcer"
            bind:value={$form.enforcer}
          >
            {#if data.enforcers}
              {#each data.enforcers as enforcer}
                <option value={enforcer.id}
                  >{enforcer.first_name} {enforcer.last_name}</option
                >
              {/each}
            {/if}
          </select>
          {#if $errors.enforcer}
            <div class="text-red-500 text-sm">
              {$errors.enforcer}
            </div>
          {/if}
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="identifcation_type"
            >Identification Type</label
          >
          <select
            class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            name="identification_type"
            id="identification_type"
            bind:value={$form.identification_type}
          >
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
          {#if $errors.identification_type}
            <div class="text-red-500 text-sm">
              {$errors.identification_type}
            </div>
          {/if}
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="license_no"
            >Idenfication Number</label
          >
          <TextInput
            id="license_no"
            type="text"
            bind:value={$form.identification}
            callback={fetchRelated}
          />
          {#if $errors.identification}
            <div class="text-red-500 text-sm">
              {$errors.identification}
            </div>
          {/if}
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="vehicle_type">Vehicle Type</label>
          <select
            class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            name="vehicle_type"
            id="vehicle_type"
            bind:value={$form.vehicle_type}
          >
            <option selected={true} value="0">Open this select menu</option>

            {#if pageData.vehicleTypes}
              {#each pageData.vehicleTypes as type}
                <option value={type.id}>{type.type}</option>
              {/each}
            {/if}
          </select>
          {#if $errors.vehicle_type}
            <div class="text-red-500 text-sm">{$errors.vehicle_type}</div>
          {/if}
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="location">Location</label>
          <TextInput id="location" type="text" bind:value={$form.location} />
          {#if $errors.location}
            <div class="text-red-500 text-sm">{$errors.location}</div>
          {/if}
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
          {#if $errors.violation_date}
            <div class="text-red-500 text-sm">
              {$errors.violation_date}
            </div>
          {/if}
        </GridCol>
        <GridCol colSpan="col-span-2">
          <label class="text-gray-500" for="violation_date"
            >Violation Time</label
          >
          <TextInput
            id="violation_datetime"
            type="time"
            bind:value={violation_time}
          />
          {#if $errors.violation_time}
            <div class="text-red-500 text-sm">
              {$errors.violation_time}
            </div>
          {/if}
        </GridCol>
        <!-- NOTE: TICKET INFORMATION -->
      </Grid>
    </GridCol>

    <!-- NOTE: SELECTED VIOLATIONS -->
    <GridCol>
      {#if $errors.violations}
        <div class="text-red-500 text-sm">
          {$errors.violations._errors == undefined
            ? ""
            : $errors.violations._errors[0]}
        </div>
      {/if}
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
                    bind:group={$form.violations}
                  />
                  <label
                    for="violation-{selected.id}"
                    class="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                    >{selected.name}</label
                  >
                </div>
                <div class="flex items-center gap-4">
                  {#if selectedVehicleType}
                    <p>
                      {getFine(selected, offense, selectedVehicleType)}
                    </p>
                    <VehicleSize
                      big_vehicle={selectedVehicleType.big_vehicle}
                    />
                  {/if}
                  <button
                    type="button"
                    class="bg-gray-100 rounded-full p-2"
                    on:click={() => removeViolation(index)}
                  >
                    <X />
                  </button>
                </div>
              </div>
            {/each}
          {/if}
        </div>
        <div class="flex gap-2">
          <h3 class="text-lg text-gray-600">Total Fine</h3>
          <p class="text-lg font-bold text-red-700 text-end flex-1">
            {#if selectedVehicleType}
              {$form.fine}
            {:else}
              0
            {/if}
          </p>
        </div>
        <div class="flex gap-2">
          <h3 class="text-lg text-gray-600">Total Violations Selected</h3>
          <p class="text-lg font-bold text-gray-700 text-end flex-1">
            {$form.violations.length}
          </p>
        </div>
      </div>
    </GridCol>
    <!-- NOTE: SELECTED VIOLATIONS -->
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
                  bind:group={$form.violations}
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
          Selected <span class="font-bold">{$form.violations.length}</span>
        </p>
        <div>
          <Button
            style="soft"
            color="gray"
            type="button"
            on:click={() => {
              $form.violations = [];
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

<div class="mt-8">
  <Divider strokeWidth={1}>
    <h2 slot="left" class="text-gray-600 text-xl">Related Tickets</h2>
  </Divider>
</div>
<TanTable data={relatedTickets} columns={relatedTicketColumn}></TanTable>

<Overlay id="confirmAdd" type="modal" title="Add Ticket">
  <ConfirmCreate
    on:save={() => {
      submit();
      close();
    }}
    on:close={close}
  ></ConfirmCreate>
</Overlay>

<Overlay id={ActionResultModals.FailCreate} title="Ticket Fail" type="modal">
  <FailCreate on:close={close}></FailCreate>
</Overlay>

<Overlay id="viewRelated" title="Related Ticket" type="canvas" let:data>
  <ViewTickets info={data} {supabase} />
</Overlay>

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
