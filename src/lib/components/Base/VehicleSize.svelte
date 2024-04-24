<script lang="ts">
    export let big_vehicle: boolean;
</script>

{#if big_vehicle}
    <span
        class="bg-teal-500 text-white text-xs px-2 py-1 rounded-lg self-center"
        >Big</span
    >
{:else}
    <span
        class="bg-blue-500 text-white text-xs px-2 py-1 rounded-lg self-center"
        >Small</span
    >
{/if}
