<script lang="ts">
    import { ArrowLeft, Plus } from "lucide-svelte";

    import {
        Button,
        Divider,
        TextInput,
        Label,
        Grid,
        GridCol,
        IconButton,
    } from "$lib/Components";
    export let name: string = "";
    export let amount: string = "";
</script>

<div class="p-4">
    <div class="p-3 my-3">
        <Grid columns="grid-cols-6" gap="gap-4">
            <GridCol colSpan="col-span-3">{name}</GridCol>
            <GridCol colSpan="col-span-2">{amount}</GridCol>
            <GridCol
                colSpan="col-span-1"
                className="flex justify-end items-center"
            >
                <IconButton><Plus /></IconButton>
            </GridCol>
        </Grid>
    </div>
</div>
