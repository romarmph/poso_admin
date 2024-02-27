<script lang="ts">
  import { Plus } from "lucide-svelte";

  import { Grid, GridCol, IconButton } from "$lib/Components";
  export let name: string = "";
  export let amount: string = "";
</script>

<div class="px-4 my-1">
  <div class="p-2 rounded-md bg-gray-50 shadow-sm hover:bg-gray-100">
    <Grid columns="grid-cols-6" gap="gap-4">
      <GridCol
        colSpan="col-span-4"
        className="text-gray-600 text-md font-semibold flex items-center"
        >{name}</GridCol
      >
      <GridCol
        colSpan="col-span-1"
        className="text-md text-red-400 justify-center font-bold flex items-center"
        >{amount}</GridCol
      >
      <GridCol colSpan="col-span-1" className="flex justify-end items-center">
        <IconButton style="ghost" size="small"><Plus /></IconButton>
      </GridCol>
    </Grid>
  </div>
</div>
