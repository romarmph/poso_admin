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
        <label for="">Traffic Post Name</label>
        <TextInput id="name" bind:value={$superForm.name} required />
    </div>
    <h3 class="my-3">Address</h3>
    <TextInput id="address" bind:value={$superForm.address} required />
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
