<script lang="ts">
  import { Card, TanTable } from "$lib/Components";
  import { TrendingDown, CreditCard, ReceiptText } from "lucide-svelte";
  import UnpaidTicketsTab from "./partials/UnpaidTicketsTab.svelte";
  import PaymentsTab from "./partials/PaymentsTab.svelte";
  import type { Tab as TabI, TabView } from "$lib/components/Base/Tab/Tab";
  import Tab from "$lib/components/Base/Tab/Tab.svelte";

  export let data;
  let tabs: TabI[] = [
    {
      index: 0,
      title: "Unpaid Tickets",
      icon: CreditCard,
      iconProps: { size: 20 },
    },
    {
      index: 1,
      title: "Payments",
      icon: ReceiptText,
      iconProps: { size: 20 },
    },
  ];
  let tabViews: TabView[] = [
    {
      index: 0,
      title: "Unpaid Tickets",
      view: UnpaidTicketsTab,
      props: { unpaidTickets: data.unpaidTickets ?? [] },
    },
    {
      index: 1,
      title: "Payments",
      view: PaymentsTab,
      props: { payments: data.payments ?? [] },
    },
  ];
</script>

<svelte:head>
  <title>Payment</title>
</svelte:head>

<header class="flex items-center">
  <h1 class="text-2xl text-gray-700 font-bold">Payment</h1>
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

<Tab {tabs} {tabViews} />
