<script lang="ts">
  import { TicketStatus } from "$lib/Components";
  import type { SupabaseClient } from "@supabase/supabase-js";
  import { getEmployeeDetails } from "$lib/utils/employeeDetails";
  import EnforcerColumn from "$lib/components/Customs/EnforcerColumn.svelte";
  import VehicleTypeColumn from "$lib/components/Customs/VehicleTypeColumn.svelte";
  import { writable } from "svelte/store";
  export let info;
  export let supabase: SupabaseClient;
  const data = info.info as Types.Ticket;

  let violations = writable<string[]>([]);

  Promise.all(
    data.violations.map(async (id) => {
      const { data, error } = await supabase
        .from("violations")
        .select("name")
        .eq("id", id)
        .single();
      if (error) {
        console.error(error);
      } else {
        return data.name;
      }
    }),
  ).then((names) => {
    violations.set(names);
  });
</script>

<div class="overflow-y-auto">
  <div class="w-[500px] h-[calc(100vh-32px)] overflow-auto pb-2">
    <div class="mb-3">
      <div class="flex justify-between items-center">
        <label for="" class="p-1 text-gray-500">Ticket Details</label>
        <TicketStatus status={data.status} />
      </div>
      <hr class="my-2" />
      <label for="" class="p-1 text-gray-500">Offense</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.offense}
      </div>
      <label for="" class="p-1 text-gray-500">Ticket No. </label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.ticket_no}
      </div>
      <label for="" class="p-1 text-gray-500">Apprehendin Officer</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        <EnforcerColumn id={data.enforcer} />
      </div>
      <label for="" class="p-1 text-gray-500">Vehicle Type</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        <VehicleTypeColumn id={data.vehicle_type} />
      </div>
      <label for="" class="p-1 text-gray-500">Violation Date</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violation_date ?? "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Location</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violation_location ?? "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Violations</label>
      {#each $violations as violation}
        <div class="p-2 mb-2 rounded-lg text-gray-800 text-lg bg-gray-50">
          {violation}
        </div>
      {/each}
    </div>
    <div class="mb-3">
      <label for="" class="p-1 text-gray-500">Violator Information</label>
      <hr class="my-2" />
      <label for="" class="p-1 text-gray-500">Violator</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violator}
      </div>
      <label for="" class="p-1 text-gray-500">License Number</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.license_no.length ? data.license_no : "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Plate Number</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.plate_no.length ? data.plate_no : "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Chassis Number</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.chassis_no.length ? data.chassis_no : "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Engine No</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.engine_no.length ? data.engine_no : "N/A"}
      </div>
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
