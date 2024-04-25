<script lang="ts">
  import { Button } from "$lib/Components";
  import { createEventDispatcher } from "svelte";
  import { AlertCircle } from "lucide-svelte";

  export let subject: string = "item";
  const dispatch = createEventDispatcher();
</script>

<div class="flex flex-col justify-center items-stretch text-blue-500">
  <AlertCircle size={64} class="mx-auto" />
  <h3 class="text-blue-500 text-2xl font-bold text-center mt-4">
    Create {subject}
  </h3>
  <p class="text-lg text-gray-600 text-center mt-2 mb-12">
    Are you sure you want to save this?
  </p>
  <div class="flex gap-4">
    <Button
      type="button"
      style="ghost"
      color="gray"
      fullWidth={true}
      on:click={() => dispatch("close")}>No, cancel</Button
    >
    <Button fullWidth={true} type="button" on:click={() => dispatch("save")}
      >Yes, save</Button
    >
  </div>
</div>
