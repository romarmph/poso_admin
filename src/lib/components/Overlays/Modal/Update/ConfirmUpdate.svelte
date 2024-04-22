<script lang="ts">
  import { Button } from "$lib/Components";
  import { createEventDispatcher } from "svelte";
  import { AlertCircle } from "lucide-svelte";

  export let subject: string = "item";
  const dispatch = createEventDispatcher();
</script>

<div class="flex flex-col justify-center items-center text-blue-500">
  <AlertCircle size={64} />
  <h3 class="text-blue-500 text-2xl font-bold text-center mt-4">
    Update {subject}
  </h3>
  <p class="text-lg text-gray-600 text-center mt-2 mb-12">
    Are you sure you want to update this?
  </p>
  <Button
    type="button"
    style="ghost"
    color="gray"
    fullWidth={true}
    on:click={() => dispatch("close")}>No, cancel</Button
  >
  <Button fullWidth={true} type="submit">Yes, save</Button>
</div>
