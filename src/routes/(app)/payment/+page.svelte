<script>
  import Card from "$lib/components/Base/Card.svelte";
  import {
    TrendingDown,
    TrendingUp,
    Users,
    Ticket,
    TicketCheck,
    TicketX,
  } from "lucide-svelte";
</script>

<header style="display: flex; align-items: center;">
  <h1 style="font-weight: bold;">Payment</h1>
</header>

<!-- Card Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
    <!-- Card -->
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>
    <!-- End Card -->

    <!-- Card -->
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>

    <!-- End Card -->

    <!-- Card -->
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>

    <!-- End Card -->

    <!-- Card -->
    <Card name="Total Tickets">
      <TrendingDown />
    </Card>

    <!-- End Card -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Grid -->
<!-- End Card Section -->
