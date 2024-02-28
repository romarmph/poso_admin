<script lang="ts">
    import { Plus } from "lucide-svelte";

    import { Grid, GridCol } from "$lib/Components";
    export let title: string = "";
    export let descrip: string = "";
</script>

<div class="px-4 my-1">
    <div class="p-2 rounded-md bg-gray-50 shadow-sm hover:bg-gray-100">
        <Grid columns="grid-cols-6" gap="gap-4">
            <GridCol
                colSpan="col-span-1"
                className="text-gray-600 text-md font-semibold flex items-center"
                >{title}</GridCol
            >
            <GridCol
                colSpan="col-span-5"
                className="text-md text-gray-600  justify-end font-bold flex items-center"
                >{descrip}</GridCol
            >
        </Grid>
    </div>
</div>
