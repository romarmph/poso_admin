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
        <label for="">Personal Details</label>
        <hr class="my-2" />
        <label for="">First Name</label>
        <TextInput
            id="first_name"
            bind:value={$superForm.first_name}
            required
        />
        <label for="">Middle Name</label>
        <TextInput
            id="middle_name"
            bind:value={$superForm.middle_name}
            required
        />
        <label for="">Last Name</label>
        <TextInput id="last_name" bind:value={$superForm.last_name} required />
        <label for="">Suffix</label>
        <TextInput id="suffix" bind:value={$superForm.suffix} required />
        <label for="">BirthDate</label>
        <TextInput
            id="birthdate"
            type="date"
            bind:value={$superForm.birthdate}
            required
        />
    </div>
    <hr class="my-2" />

    <h3 class="my-3">Employee No.</h3>
    <TextInput id="employee_no" bind:value={$superForm.employee_no} required />
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
