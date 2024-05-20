<script lang="ts">
  import { Card } from "$lib/Components";
  import { TrendingDown, TrendingUp } from "lucide-svelte";
  import "@carbon/charts-svelte/styles.css";
  import { BarChartSimple, ScaleTypes } from "@carbon/charts-svelte";
</script>

<svelte:head><title>Dashboard</title></svelte:head>

<h1 class="text-2xl font-bold text-gray-700">Dashboard</h1>

<!-- Card Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>
    <Card name="Over due">
      <TrendingUp />
    </Card>
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>
  </div>
</div>

<BarChartSimple
  data={[
    { group: "Qty", value: 65000 },
    { group: "More", value: 29123 },
    { group: "Sold", value: 35213 },
    { group: "Restocking", value: 51213 },
    { group: "Misc", value: 16932 },
  ]}
  options={{
    theme: "",
    title: "Simple bar (discrete)",
    height: "400px",
    axes: {
      left: { mapsTo: "value" },
      bottom: { mapsTo: "group", scaleType: ScaleTypes.LABELS },
    },
  }}
/>
