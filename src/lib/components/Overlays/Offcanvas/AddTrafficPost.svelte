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
        <label for="">Traffic Post Name</label>
        <TextInput id="name" bind:value={$form.name} required />

        <h3 class="my-3">Address</h3>
        <TextInput id="address" bind:value={$form.address} required />
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
