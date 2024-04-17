<script lang="ts">
    import EnabledStatus from "$lib/components/Base/EnabledStatus.svelte";
    import type { SupabaseClient } from "@supabase/supabase-js";
    import fetchUser from "$lib/utils/fetchUser";
    import VehicleSize from "$lib/components/Base/VehicleSize.svelte";
    export let info: Types.VehicleTypes;
    export let supabase: SupabaseClient;
</script>

<div class="w-[500px]">
    <div class="mb-3">
        <label for="" class="p-1 text-gray-500 text-xl">Name</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
            {info.type}
        </div>
    </div>
    <hr class="my-2" />
    <div class="mb-3">
        <label for="" class="p-1 text-gray-500 text-xl">Vehicle Size</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
            <VehicleSize big_vehicle={info.big_vehicle} />
        </div>
    </div>
    <hr class="my-2" />
    <div class="mb-3">
        <label for="" class="p-1 text-gray-500 text-xl">Status</label>
        <div class="p-2 rounded-lg text-gray-800 text-lg bg-gray-200">
            <EnabledStatus enabled={info.enabled} />
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
        {#await fetchUser(info.created_by, supabase)}
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
        {#await fetchUser(info.updated_by, supabase)}
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
