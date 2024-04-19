<script lang="ts">
    import Button from "$lib/components/Base/Button.svelte";
    import ComboInput from "$lib/components/Base/ComboInput.svelte";
    import TextInput from "$lib/components/Forms/TextInput.svelte";
    import { createEventDispatcher } from "svelte";

    export let superForm;
    export let errors;

    const dispatch = createEventDispatcher();

    function handleClose() {
        dispatch("close");
    }
</script>

<div class="flex-1">
    <div>
        <label for="">Vehicle Type</label>
        <TextInput id="type" bind:value={$superForm.type} required />
    </div>
    <h3 class="my-3">Vehicle Size</h3>
    <div class="flex gap-x-6">
        <div class="flex">
            <input
                type="radio"
                id="big_vehicle"
                name="big_vehicle"
                value={true}
                bind:group={$superForm.big_vehicle}
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
                bind:group={$superForm.big_vehicle}
            />
            <label
                for="hs-radio-group-2"
                class="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                >Small</label
            >
        </div>
    </div>
</div>
<div class="flex justify-stretch items-center gap-4">
    <Button
        type="button"
        style="soft"
        color="gray"
        fullWidth={true}
        on:click={handleClose}>Close</Button
    >
    <Button fullWidth={true} type="submit">Save</Button>
</div>
