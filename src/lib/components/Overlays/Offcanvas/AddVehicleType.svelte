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
        <TextInput id="name" bind:value={$superForm.type} required />
    </div>
    <h3 class="my-3">Vehicle Size</h3>
    <TextInput id="name" bind:value={$superForm.big_vehicle} required />
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
