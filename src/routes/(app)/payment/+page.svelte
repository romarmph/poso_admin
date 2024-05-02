<script>
  import { Card } from "$lib/Components";
  import { TrendingDown } from "lucide-svelte";
</script>

<svelte:head><title>Payment</title></svelte:head>

<header style="display: flex; align-items: center;">
  <h1 style="font-weight: bold;">Payment</h1>
</header>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>
  </div>
</div>
