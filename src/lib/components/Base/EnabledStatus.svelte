<script lang="ts">
  export let enabled: boolean;
</script>

{#if enabled}
  <span class="bg-teal-500 text-white text-xs px-2 py-1 rounded-lg"
    >Enabled</span
  >
{:else}
  <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-lg"
    >Disabled</span
  >
{/if}
