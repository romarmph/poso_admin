<script lang="ts">
  import { goto } from "$app/navigation";
  import TicketNumberColumn from "$lib/components/Customs/TicketNumberColumn.svelte";
  import {
    Button,
    Divider,
    Grid,
    GridCol,
    TextInput,
    TicketStatus,
  } from "$lib/Components";
  import EnforcerColumn from "$lib/components/Customs/EnforcerColumn.svelte";
  import VehicleTypeColumn from "$lib/components/Customs/VehicleTypeColumn.svelte";
  import { dateProxy, superForm } from "sveltekit-superforms";
  import { overlayStore } from "$lib/stores/overlayStore.js";

  export let data;

  const { form, message, enhance, errors } = superForm(data.form);
  const { open, close } = overlayStore;

  let violations: {
    fine: Record<string, any>;
    name: string;
  }[] = [];
  $: violations = data.violations.map((item) => {
    return {
      name: JSON.parse(JSON.stringify(item.violations)).name,
      fine: JSON.parse(JSON.stringify(item.violations)).fine,
    };
  });

  let ticket: Types.Ticket = data.ticket;
  let vehicleType: Types.VehicleTypes = data.vehicleType;
  let vehicleSize: string = vehicleType.big_vehicle ? "big" : "small";
  let offenseCode: string =
    ticket.offense == 1 ? "a" : ticket.offense == 2 ? "b" : "c";
  let totalFine: number = 0;
  const datePaidProxy = dateProxy(form, "paid_at", { format: "date" });

  $: $form.ticket_id = parseInt(ticket.id);
  $: totalFine = violations.reduce(
    (sum, violation) => sum + violation.fine[vehicleSize][offenseCode],
    0,
  );

  $: if ($message) {
    if ($message.success) {
      close();
    }
    if ($message.action.length) {
      open({
        id: $message.action,
      });
    }
  }

  $: if (!$form.discounted) {
    $form.discount_amount = 0;
  }
</script>

<svelte:head><title>Pay Ticket</title></svelte:head>

<header style="display: flex; align-items: center;">
  <h1 class="text-2xl text-gray-700 font-bold">Payment</h1>
</header>

<div class="py-4 sm:px-6 lg:py-8 mx-auto">
  <Grid columns="grid-cols-5" gap="gap-2">
    <GridCol colSpan="col-span-3">
      <Grid columns="grid-cols-2" gap="gap-2">
        <GridCol className="h-full">
          <div class="mb-3">
            <div class="flex justify-between items-center">
              <h2 class="p-1 text-gray-500">Ticket Details</h2>
              <TicketStatus status={ticket.status} />
            </div>
            <hr class="my-2" />
            <div class="mb-3">
              <label for="" class="p-1 text-gray-500">Ticket No. </label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                <TicketNumberColumn id={parseInt(ticket.id)} />
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">Apprehendin Officer</label
              >
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                <EnforcerColumn id={ticket.enforcer} />
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">Violation </label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                {ticket.violation_date ?? "N/A"}
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">Identification </label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                {ticket.identification ?? "N/A"}
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500"
                >Identification Type
              </label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                {ticket.identification_type ?? "N/A"}
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">Vehicle Type</label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                <VehicleTypeColumn id={ticket.vehicle_type} />
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">Violation Date</label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                {ticket.violation_date ?? "N/A"}
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">Violation Time</label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                {ticket.violation_time ?? "N/A"}
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">Location</label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                {ticket.violation_location.length == 0
                  ? "N/A"
                  : ticket.violation_location}
              </div>
            </div>
          </div>
        </GridCol>
        <GridCol>
          <div class="mb-3">
            <label for="" class="p-1 text-gray-500">Violator Information</label>
            <hr class="my-3" />
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">First Name</label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                {ticket.first_name}
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">Middle Name</label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                {ticket.middle_name.length == 0 ? "N/A" : ticket.middle_name}
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">Last Name</label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                {ticket.last_name}
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">Suffix</label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                {ticket.suffix.length == 0 ? "N/A" : ticket.suffix}
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">Birthdate</label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                {ticket.birthdate}
              </div>
            </div>
            <div class="mb-2">
              <label for="" class="p-1 text-gray-500">Adress</label>
              <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
                {ticket.address}
              </div>
            </div>
          </div>
        </GridCol>
      </Grid>
    </GridCol>
    <GridCol colSpan="col-span-2" className="flex flex-col h-full ">
      <!-- TODO: Violations list and and payment options -->
      <div class="flex-1 p-2">
        {#each violations as violation}
          <div class="flex justify-between p-2 rounded-mg bg-gray-50 mb-2">
            <span class="font-semibold text-lg text-gray-700">
              {violation.name}
            </span>
            <span class="text-red-500 font-bold"
              >{violation.fine[vehicleSize][offenseCode]}</span
            >
          </div>
        {/each}
      </div>
      <form method="POST" action="?/pay" use:enhance>
        <input
          type="number"
          name="ticket_id"
          id="ticket_id"
          bind:value={$form.ticket_id}
          class="hidden"
        />
        <div class="mb-3 flex justify-between">
          <span class="text-gray-600 text-xl font-bold">Total Fine</span>
          <span class="text-red-600 text-xl font-bold">{totalFine}</span>
        </div>
        <Divider strokeWidth={1} classNames="mb-3" />
        <div class="mb-3 flex gap-2">
          <div class="w-full">
            <label class="text-gray-500" for="or_number">Date Paid</label>
            <TextInput
              type="date"
              id="paid_at"
              classNames="text-right text-lg"
              bind:value={$datePaidProxy}
              max={new Date().toISOString().split("T")[0]}
            />
            {#if $errors.paid_at}
              <div class="text-red-500 text-sm">{$errors.paid_at}</div>
            {/if}
          </div>
          <div class="w-full">
            <label class="text-gray-500" for="or_number">OR Number</label>
            <TextInput
              type="number"
              id="or_number"
              classNames="text-right text-lg"
              bind:value={$form.or_number}
            />
            {#if $errors.or_number}
              <div class="text-red-500 text-sm">{$errors.or_number}</div>
            {/if}
          </div>
        </div>
        <div class="mb-3 flex items-center">
          <div class="relative flex items-start w-full">
            <div class="flex items-center h-5 mt-1">
              <input
                id="discounted"
                name="discounted"
                type="checkbox"
                bind:checked={$form.discounted}
                class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                aria-describedby="discounted-description"
              />
            </div>
            <label for="discounted" class="ms-3">
              <span
                class="block text-lg font-semibold text-gray-800 dark:text-neutral-300"
                >Discounted</span
              >
              <span
                id="discounted-description"
                class="block text-sm text-gray-600 dark:text-neutral-500"
                >Check if the payment is discounted</span
              >
            </label>
          </div>
          <div class="w-full">
            <label class="text-gray-500" for="discount_amount"
              >Discount Amount</label
            >
            <TextInput
              type="number"
              id="discount_amount"
              classNames="text-right text-lg"
              bind:value={$form.discount_amount}
              disabled={!$form.discounted}
            />
            {#if $errors.discount_amount}
              <div class="text-red-500 text-sm">{$errors.discount_amount}</div>
            {/if}
          </div>
        </div>
        <div class="mb-3">
          <label class="text-gray-500" for="amount_paid">Amount Paid</label>
          <TextInput
            type="number"
            id="amount_paid"
            classNames="text-right text-lg"
            bind:value={$form.amount_paid}
          />
          {#if $errors.amount_paid}
            <div class="text-red-500 text-sm">{$errors.amount_paid}</div>
          {/if}
        </div>
        <div class="flex justify-stretch items-center gap-4 mt-4">
          <Button
            type="button"
            style="soft"
            color="gray"
            fullWidth={true}
            on:click={() => {
              goto("/payment");
            }}
          >
            Cancel
          </Button>
          <Button fullWidth={true} type="submit" color="teal">Pay</Button>
        </div>
      </form>
    </GridCol>
  </Grid>
</div>
