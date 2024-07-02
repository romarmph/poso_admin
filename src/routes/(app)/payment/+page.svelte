<script lang="ts">
  import { Card, TanTable } from "$lib/Components";
  import { TrendingDown, CreditCard, ReceiptText } from "lucide-svelte";
  import UnpaidTicketsTab from "./partials/UnpaidTicketsTab.svelte";
  import PaymentsTab from "./partials/PaymentsTab.svelte";
  import type { Tab as TabI, TabView } from "$lib/components/Base/Tab/Tab";
  import Tab from "$lib/components/Base/Tab/Tab.svelte";
  import { Overlay } from "$lib/components/Overlays/Overlays";
  import PayTicket from "$lib/components/Overlays/Modal/PayTicket.svelte";
  import { superForm } from "sveltekit-superforms";
  import { overlayStore } from "$lib/stores/overlayStore";
  import CancelPaymentForm from "./partials/CancelPaymentForm.svelte";

  const { open, close } = overlayStore;
  export let data;
  const {
    form: paymentForm,
    enhance: paymentEnhance,
    errors: paymentErrors,
    message: paymentMessage,
  } = superForm(data.paymentForm, {
    dataType: "json",
  });

  const {
    form: cancelPaymentForm,
    enhance: cancelPaymentEnhance,
    message: cancelPaymentMessage,
  } = superForm(data.paymentCancelForm, {
    dataType: "json",
  });

  const {
    form: updatePaymentForm,
    enhance: updatePaymentEnhance,
    message: updatePaymentMessage,
    errors: updatePaymentErrors,
  } = superForm(data.paymentUpdateForm, {
    dataType: "json",
  });

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

  $: if ($paymentMessage) {
    close();
    open({
      id: $paymentMessage.action,
    });
  }

  $: if ($cancelPaymentMessage) {
    close();
    open({
      id: $cancelPaymentMessage.action,
    });
  }

  $: if ($updatePaymentMessage) {
    close();
    open({
      id: $updatePaymentMessage.action,
    });
  }
</script>

<svelte:head>
  <title>Payment</title>
</svelte:head>

<header class="flex items-center">
  <h1 class="text-2xl text-gray-700 font-bold">Payment</h1>
</header>

<!-- <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"> -->
<!--   <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"> -->
<!--     <Card name="Total Tickets"> -->
<!--       <TrendingDown /> -->
<!--     </Card> -->
<!--     <Card name="Total Tickets"> -->
<!--       <TrendingDown /> -->
<!--     </Card> -->
<!--     <Card name="Total Tickets"> -->
<!--       <TrendingDown /> -->
<!--     </Card> -->
<!--     <Card name="Total Tickets"> -->
<!--       <TrendingDown /> -->
<!--     </Card> -->
<!--   </div> -->
<!-- </div> -->

<Tab {tabs} {tabViews} />

<Overlay let:data title="Pay Ticket" id="payTicket" type="modal">
  <form action="?/pay" method="POST" use:paymentEnhance>
    <PayTicket
      info={data}
      form={paymentForm}
      initData={{}}
      errors={paymentErrors}
    ></PayTicket>
  </form>
</Overlay>

<Overlay id="cancelPayment" type="modal" title="Cancel Payment" let:data>
  <form
    action="?/cancel"
    method="POST"
    use:cancelPaymentEnhance
    on:submit={close}
  >
    <CancelPaymentForm form={cancelPaymentForm} info={data}></CancelPaymentForm>
  </form>
</Overlay>

<Overlay let:data title="Pay Ticket" id="updatePayment" type="modal">
  <form action="?/update" method="POST" use:updatePaymentEnhance>
    <PayTicket
      info={data}
      initData={data}
      form={updatePaymentForm}
      errors={updatePaymentErrors}
    ></PayTicket>
  </form>
</Overlay>
