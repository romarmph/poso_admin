<script lang="ts">
    import EnabledStatus from "$lib/components/Base/EnabledStatus.svelte";
    import type { SupabaseClient } from "@supabase/supabase-js";
    import { getEmployeeDetails } from "$lib/utils/employeeDetails";
    import TicketStatus from "$lib/components/Base/TicketStatus.svelte";
    export let info: Types.Tickets;
    export let supabase: SupabaseClient;
</script>

<div class="w-[500px]">
    <div class="mb-3">
        <label for="" class="p-1 text-gray-500 text-xl">Personal Details</label>
        <hr class="my-2" />
        <div>
            <label for="" class="p-1 text-gray-500 text-xl">First Name</label>
            <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
                {info.first_name}
            </div>
            <label for="" class="p-1 text-gray-500 text-xl">Middle Name</label>
            <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
                {info.middle_name ?? "N/A"}
            </div>
            <label for="" class="p-1 text-gray-500 text-xl">Last Name</label>
            <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
                {info.last_name}
            </div>
            <label for="" class="p-1 text-gray-500 text-xl">Suffix</label>
            <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
                {info.suffix ?? "N/A"}
            </div>
            <label for="" class="p-1 text-gray-500 text-xl">BIrthdate</label>
            <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
                {info.birthdate}
            </div>
        </div>
    </div>
    <hr class="my-2" />
    <div class="mb-3">
        <label for="" class="p-1 text-gray-500 text-xl"
            >Apprehension Details</label
        >
        <hr class="my-2" />
        <label for="" class="p-1 text-gray-500 text-xl">Violation Date</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
            {info.violation_date ?? "N/A"}
        </div>
        <label for="" class="p-1 text-gray-500 text-xl">Violation Time</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
            {info.violation_time ?? "N/A"}
        </div>
        <label for="" class="p-1 text-gray-500 text-xl">Vehicle Type</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
            {info.vehicle_type_id ?? "N/A"}
        </div>
        <label for="" class="p-1 text-gray-500 text-xl">Enforcer</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
            {info.enforcer_id ?? "N/A"}
        </div>
    </div>
    <hr class="my-2" />
    <div class="mb-3">
        <label for="" class="p-1 text-gray-500 text-xl">Status</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
            <TicketStatus status={info.status} />
        </div>
    </div>

    <hr class="my-2" />
    <div class="mb-3">
        <label for="" class="p-1 text-gray-500 text-xl">History</label>
        <div
            class="p-2 my-2 rounded-lg text-gray-800 text-lg bg-gray-200 flex justify-between"
        >
            <span class="text-gray-500">Created at</span>
            {new Date(info.created_at).toLocaleString("en-PH", {
                timeZone: "UTC",
            })}
        </div>
        {#await getEmployeeDetails(info.created_by, supabase)}
            <p>Loading...</p>
        {:then value}
            <div
                class="p-2 my-2 rounded-lg text-gray-800 text-lg bg-gray-200 flex justify-between"
            >
                <span class="text-gray-500">Created by</span>
                {`${value.first_name} ${value.last_name}`}
            </div>
        {/await}

        <div
            class="p-2 my-2 rounded-lg text-gray-800 text-lg bg-gray-200 flex justify-between"
        >
            <span class="text-gray-500">Updated at</span>
            {new Date(info.updated_at).toLocaleString("en-PH", {
                timeZone: "UTC",
            })}
        </div>
        {#await getEmployeeDetails(info.updated_by, supabase)}
            <p>Loading...</p>
        {:then value}
            <div
                class="p-2 my-2 rounded-lg text-gray-800 text-lg bg-gray-200 flex justify-between"
            >
                <span class="text-gray-500">Updated by</span>
                {`${value.first_name} ${value.last_name}`}
            </div>
        {/await}
    </div>
</div>
