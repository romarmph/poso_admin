<script lang="ts">
  import { Trash, Pencil, Eye } from "lucide-svelte";

  export let fireEdit: () => void;
  export let fireView: () => void;
  export let fireDelete: () => void;
</script>

<div class="flex gap-2 py-1 px-2">
  <button
    class="bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-xs text-white text-center rounded-md py-1 px-2 aspect-square"
    on:click={fireView}
  >
    <Eye size="16" />
  </button>
  <button
    class="bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-xs text-white text-center rounded-md py-1 px-2"
    on:click={fireEdit}><Pencil size="16" /></button
  >
  <button
    class="bg-red-500 hover:bg-red-400 active:bg-red-600 text-xs text-white text-center rounded-md py-1 px-2"
    on:click={fireDelete}><Trash size="16" /></button
  >
</div>
