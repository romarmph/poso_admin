<script lang="ts">
  import TicketsPerMonth from "$lib/components/Table/Dashboard/TicketsPerMonth.svelte";
  export let data;
</script>

<svelte:head><title>Dashboard</title></svelte:head>

<h1 class="text-2xl font-bold text-gray-700">Dashboard</h1>

<h2>Total Tickets Per Month</h2>
<TicketsPerMonth ticketsPerMonth={data.tickets} query={data.query} filters={data.filters} />
