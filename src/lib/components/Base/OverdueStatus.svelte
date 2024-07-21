<script lang="ts">
  import {
    AlertTriangle,
  } from "lucide-svelte";

  export let value: boolean = false;

</script>

{#if value}
  <span
    class=" bg-red-100 text-red-800 inline-flex gap-2 py-1 px-2 rounded-full items-center text-sm font-semibold"
  >
    <AlertTriangle size="18px" /> Overdue
  </span>
{/if}
