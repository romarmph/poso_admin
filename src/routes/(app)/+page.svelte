<script lang="ts">
  import OverdueAndAlarmedIncentives from "$lib/components/Table/Dashboard/OverdueAndAlarmedIncentives.svelte";
  import TicketsPerMonth from "$lib/components/Table/Dashboard/TicketsPerMonth.svelte";
  export let data;
</script>

<svelte:head><title>Dashboard</title></svelte:head>

<h1 class="text-2xl font-bold text-gray-700">Dashboard</h1>

<h2 class="text-gray-500 text-xl font-medum mt-4">
  Total Tickets Per Month</h2>
<TicketsPerMonth
  ticketsPerMonth={data.tickets}
  query={data.query}
  filters={data.filters}
/>
<h2 class="text-gray-500 text-xl font-medum mt-4">
  Overdue and Alarmed Incentives
</h2>
<OverdueAndAlarmedIncentives
  incentives={data.incentives}
  query={data.query}
  filters={data.filters}
/>
