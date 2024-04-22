<script lang="ts">
    import Button from "$lib/components/Base/Button.svelte";
    import TextInput from "$lib/components/Forms/TextInput.svelte";
    import { createEventDispatcher } from "svelte";

    export let form;
    export let errors;

    const dispatch = createEventDispatcher();

    function handleClose() {
        dispatch("close");
    }
</script>

<div class="flex-1">
    <div>
        <label for="">Account Details</label>
        <hr class="my-2" />
        <div class="mb-3">
            <label for="">Email</label>
            <TextInput
                type="email"
                id="email"
                bind:value={$form.email}
                required
            />
        </div>
        <div class="mb-6">
            <label for="">Password</label>
            <TextInput
                type="password"
                id="password"
                bind:value={$form.password}
                required
            />
        </div>
        <label for="">Personal Details</label>
        <hr class="my-2" />
        <div class="mb-3">
            <label for="">First Name</label>
            <TextInput
                type="text"
                id="first_name"
                bind:value={$form.first_name}
                required
            />
        </div>
        <div class="mb-3">
            <label for="">Middle Name</label>
            <TextInput
                type="text"
                id="middle_name"
                bind:value={$form.middle_name}
            />
        </div>
        <div class="mb-3">
            <label for="">Last Name</label>
            <TextInput
                type="text"
                id="last_name"
                bind:value={$form.last_name}
                required
            />
        </div>
        <div class="mb-3">
            <label for="">Suffix</label>
            <TextInput type="text" id="suffix" bind:value={$form.suffix} />
        </div>
        <div class="mb-3">
            <label for="">BirthDate</label>
            <TextInput
                type="date"
                id="birthdate"
                bind:value={$form.birthdate}
                required
            />
        </div>
    </div>
    <h3 class="my-3">Employee No.</h3>
    <TextInput
        type="text"
        id="employee_no"
        bind:value={$form.employee_no}
        required
    />
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
