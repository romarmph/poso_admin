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

<div class="pb-2">
    <label for="">Vehicle Type</label>
    <TextInput id="type" bind:value={$form.type} required />
    {#if $errors.type}
        <p class="text-red-500 text-sm">{$errors.type}</p>
    {/if}
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
