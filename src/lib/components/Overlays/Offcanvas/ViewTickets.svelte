<script lang="ts">
  import { TicketStatus } from "$lib/Components";
  import type { SupabaseClient } from "@supabase/supabase-js";
  import { getEmployeeDetails } from "$lib/utils/employeeDetails";
  import TicketNumberColumn from "$lib/components/Customs/TicketNumberColumn.svelte";
  import EnforcerColumn from "$lib/components/Customs/EnforcerColumn.svelte";
  import VehicleTypeColumn from "$lib/components/Customs/VehicleTypeColumn.svelte";
  export let info;
  export let supabase: SupabaseClient;
  const data = info.info as Types.Ticket;

  async function fetchViolations(id: string) {
    const { data, error } = await supabase
      .from("ticket_violations")
      .select(`violations(*)`)
      .eq("ticket_id", id);

    if (error) {
      return null;
    }

    const violations: Types.Violation[] = data.map((item) => {
      const violation: Types.Violation = JSON.parse(
        JSON.stringify(item.violations),
      );
      return violation;
    });

    return violations;
  }
</script>

<div class="overflow-y-auto">
  <div class="w-[500px] h-[calc(100vh-32px)] overflow-auto pb-2">
    <div class="mb-3">
      <div class="flex justify-between items-center">
        <label for="" class="p-1 text-gray-500">Ticket Details</label>
        <TicketStatus status={data.status} />
      </div>
      <hr class="my-2" />
      <label for="" class="p-1 text-gray-500">Ticket No. </label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        <TicketNumberColumn id={parseInt(data.id)} />
      </div>
      <label for="" class="p-1 text-gray-500">Apprehendin Officer</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        <EnforcerColumn id={data.enforcer} />
      </div>
      <label for="" class="p-1 text-gray-500">Violation </label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violation_date ?? "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Identification </label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.identification ?? "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Identification Type </label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.identification_type ?? "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Vehicle Type</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        <VehicleTypeColumn id={data.vehicle_type} />
      </div>
      <label for="" class="p-1 text-gray-500">Violation Date</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violation_date ?? "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Violation Time</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violation_time ?? "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Location</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violation_location ?? "N/A"}
      </div>
    </div>
    <div class="mb-3">
      <label for="" class="p-1 text-gray-500">Violator Information</label>
      <hr class="my-2" />
      <div>
        <label for="" class="p-1 text-gray-500">First Name</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
          {data.first_name}
        </div>
        <label for="" class="p-1 text-gray-500">Middle Name</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
          {data.middle_name ?? "N/A"}
        </div>
        <label for="" class="p-1 text-gray-500">Last Name</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
          {data.last_name}
        </div>
        <label for="" class="p-1 text-gray-500">Suffix</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
          {data.suffix ?? "N/A"}
        </div>
        <label for="" class="p-1 text-gray-500">Birthdate</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
          {data.birthdate}
        </div>
        <label for="" class="p-1 text-gray-500">Adress</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
          {data.address}
        </div>
      </div>
    </div>
    <hr class="my-2" />

    <label for="" class="p-1 text-gray-500">Violations</label>
    {#await fetchViolations(data.id)}
      Loading...
    {:then result}
      {#if result}
        {#each result as violation}
          <div class="flex justify-between p-2 rounded-mg bg-gray-50 mb-2">
            <span class="font-medium text-gray-700">
              {violation.name}
            </span>
          </div>
        {/each}
      {/if}
    {/await}
    <label for="" class="p-1 text-gray-500">Fine </label>
    <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
      {data.fine ?? "N/A"}
    </div>
    <hr class="my-2" />
    <div class="mb-3">
      <label for="" class="p-1 text-gray-500">History</label>
      <div
        class="p-2 my-2 rounded-lg text-gray-800 text-lg bg-gray-50 flex justify-between"
      >
        <span class="text-gray-500">Created at</span>
        {new Date(data.created_at).toLocaleString("en-PH", {
          timeZone: "UTC",
        })}
      </div>
      {#await getEmployeeDetails(data.created_by, supabase)}
        <p>Loading...</p>
      {:then value}
        <div
          class="p-2 my-2 rounded-lg text-gray-800 text-lg bg-gray-50 flex justify-between"
        >
          <span class="text-gray-500">Created by</span>
          {`${value.first_name} ${value.last_name}`}
        </div>
      {/await}

      <div
        class="p-2 my-2 rounded-lg text-gray-800 text-lg bg-gray-50 flex justify-between"
      >
        <span class="text-gray-500">Updated at</span>
        {new Date(data.updated_at).toLocaleString("en-PH", {
          timeZone: "UTC",
        })}
      </div>
      {#await getEmployeeDetails(data.updated_by, supabase)}
        <p>Loading...</p>
      {:then value}
        <div
          class="p-2 my-2 rounded-lg text-gray-800 text-lg bg-gray-50 flex justify-between"
        >
          <span class="text-gray-500">Updated by</span>
          {`${value.first_name} ${value.last_name}`}
        </div>
      {/await}
    </div>
  </div>
</div>
