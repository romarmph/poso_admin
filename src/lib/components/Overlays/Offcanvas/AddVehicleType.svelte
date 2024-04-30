<script lang="ts">
    import { TextInput, Button } from "$lib/Components";

    import { createEventDispatcher } from "svelte";

    export let initData: any | null;
    export let form;
    export let errors;

    const dispatch = createEventDispatcher();

    if (Object.keys(initData).length > 0) {
        $form = {
            ...initData.info,
        };
    }
</script>

<div class="w-[500px]">
    <div class="h-[calc(100vh-150px)] overflow-auto pb-2">
        <label for="">Vehicle Type</label>
        <TextInput id="type" bind:value={$form.type} required />

        <h3 class="my-3">Vehicle Size</h3>
        <div class="flex gap-x-6">
            <div class="flex">
                <input
                    type="radio"
                    id="big_vehicle"
                    name="big_vehicle"
                    value={true}
                    bind:group={$form.big_vehicle}
                />
                <label
                    for="hs-radio-group-1"
                    class="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                    >Big</label
                >
            </div>

            <div class="flex">
                <input
                    type="radio"
                    id="small_vehicle"
                    name="big_vehicle"
                    value={false}
                    bind:group={$form.big_vehicle}
                />
                <label
                    for="hs-radio-group-2"
                    class="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                    >Small</label
                >
            </div>
        </div>
    </div>
</div>
<div class="flex justify-stretch items-center gap-4">
    <Button
        type="button"
        style="soft"
        color="gray"
        fullWidth={true}
        on:click={() => dispatch("close")}>Close</Button
    >
    <Button fullWidth={true} type="submit">Save</Button>
</div>
