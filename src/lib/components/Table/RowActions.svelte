<script lang="ts">
  import { Trash, Pencil, Eye } from "lucide-svelte";
</script>

<div class="flex gap-2 py-1 px-2">
  <button
    class="bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-xs text-white text-center rounded-md py-1 px-2 aspect-square"
  >
    <Eye size="16" />
  </button>
  <button
    class="bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-xs text-white text-center rounded-md py-1 px-2"
    ><Pencil size="16" /></button
  >
  <button
    class="bg-red-500 hover:bg-red-400 active:bg-red-600 text-xs text-white text-center rounded-md py-1 px-2"
    ><Trash size="16" /></button
  >
</div>
