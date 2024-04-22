<script lang="ts">
  import { Button } from "$lib/Components";
  import { createEventDispatcher } from "svelte";
  import { AlertCircle } from "lucide-svelte";

  const dispatch = createEventDispatcher();
</script>

<div class="flex flex-col justify-center items-center text-red-500">
  <AlertCircle size={64} />
  <h3 class="text-red-500 text-2xl font-bold text-center mt-4">Failed</h3>
  <p class="text-lg text-gray-600 text-center mt-2 mb-12">
    An error has occured while trying to update this item.
  </p>
  <Button
    type="button"
    style="ghost"
    color="red"
    fullWidth={true}
    on:click={() => dispatch("close")}>Okay, thanks</Button
  >
</div>
