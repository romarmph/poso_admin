<script lang="ts">
  import { TicketStatus } from "$lib/Components";
  import type { SupabaseClient } from "@supabase/supabase-js";
  import { getEmployeeDetails } from "$lib/utils/employeeDetails";
  export let info;
  export let supabase: SupabaseClient;
  const data = info.info as Types.Ticket;
</script>

<div class="overflow-y-auto">
  <div class="w-[500px]">
    <div class="mb-3">
      <div class="flex justify-between items-center">
        <label for="" class="p-1 text-gray-500">Ticket Details</label>
        <TicketStatus status={data.status} />
      </div>
      <hr class="my-2" />
      <label for="" class="p-1 text-gray-500">Violation </label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violation_date ?? "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Violation Date</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violation_date ?? "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Violation Time</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violation_time ?? "N/A"}
      </div>
    </div>
    <div class="mb-3">
      <div class="flex justify-between items-center">
        <label for="" class="p-1 text-gray-500">Ticket Details</label>
        <TicketStatus status={data.status} />
      </div>
      <hr class="my-2" />
      <label for="" class="p-1 text-gray-500">Violation </label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violation_date ?? "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Violation Date</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violation_date ?? "N/A"}
      </div>
      <label for="" class="p-1 text-gray-500">Violation Time</label>
      <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
        {data.violation_time ?? "N/A"}
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
