<script lang="ts">
    import type { SupabaseClient } from "@supabase/supabase-js";
    import { getEmployeeDetails } from "$lib/utils/employeeDetails";
    export let info;
    export let supabase: SupabaseClient;
    const data = info.info as Types.VehicleTypes;
</script>

<div class="">
    <div class="mb-3">
        <label for="" class="p-1 text-gray-500 text-xl">Name</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-50">
            {data.type}
        </div>
    </div>
    <hr class="my-2" />
    <div class="mb-3">
        <label for="" class="p-1 text-gray-500 text-xl">History</label>
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
