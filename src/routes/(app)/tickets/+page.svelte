<script lang="ts">
  import { Button, TicketStatus, TanTable } from "$lib/Components";
  import { DataList } from "$lib/components/Supabase/Supabase";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import { Overlay, ViewTickets } from "$lib/components/Overlays/Overlays";
  import { overlayStore } from "$lib/stores/overlayStore.js";
  import { getSupabaseContext } from "$lib/stores/clientStore.js";
  import VehicleTypeColumn from "$lib/components/Customs/VehicleTypeColumn.svelte";
  import EnforcerColumn from "$lib/components/Customs/EnforcerColumn.svelte";
  import ViolationsColumn from "$lib/components/Customs/ViolationsColumn.svelte";
  import { goto } from "$app/navigation";
  import { superForm } from "sveltekit-superforms";
  import ConfirmDelete from "$lib/components/Overlays/Modal/Delete/ConfirmDelete.svelte";
  import PayTicket from "$lib/components/Overlays/Modal/PayTicket.svelte";
  import { Eye, Pencil, Trash } from "lucide-svelte";
  import RowAction from "$lib/components/Base/RowAction.svelte";
  import Spinner from "$lib/components/Base/Spinner.svelte";
  const { open, close } = overlayStore;
  const { supabase } = getSupabaseContext();

  export let data;
  const { form, message, enhance } = superForm(data.form, {
    dataType: "json",
  });

  const {
    form: paymentForm,
    enhance: paymentEnhance,
    message: paymentMessage,
    errors: paymentErrors,
    reset: paymentReset,
  } = superForm(data.paymentForm, {
    dataType: "json",
  });
  const columns: ColumnDef<Types.Ticket>[] = [
    {
      accessorKey: "violation_date",
      cell: (info) => info.getValue(),
      header: "Date",
    },
    {
      accessorKey: "ticket_no",
      cell: (info) => info.getValue(),
      header: "Ticket No",
    },
    {
      accessorKey: "violator",
      cell: (info) => info.getValue(),
      header: "Violator",
    },
    {
      accessorKey: "vehicle_type",
      cell: (info) => flexRender(VehicleTypeColumn, { id: info.getValue() }),
      header: "Vehicle Type",
    },
    {
      accessorKey: "license_no",
      cell: (info) => info.getValue(),
      header: "License No",
    },
    {
      accessorKey: "plate_no",
      cell: (info) => info.getValue(),
      header: "Plate No",
    },
    {
      accessorKey: "chassis_no",
      cell: (info) => info.getValue(),
      header: "Chassis No",
    },
    {
      accessorKey: "engine_no",
      cell: (info) => info.getValue(),
      header: "Engine No",
    },
    {
      accessorKey: "violations",
      cell: (info) =>
        flexRender(ViolationsColumn, { violations: info.getValue() }),
      header: "Violations",
    },
    {
      accessorKey: "violation_date",
      cell: (info) => info.getValue(),
      header: "Violation Date",
      accessorFn: (row) => new Date(row.violation_date).toDateString(),
    },
    {
      accessorKey: "offense",
      cell: (info) => info.getValue(),
      header: "Offense",
    },
    {
      accessorKey: "enforcer",
      cell: (info) => flexRender(EnforcerColumn, { id: info.getValue() }),
      header: "Enforcer",
    },
    {
      accessorKey: "status",
      cell: (info) => flexRender(TicketStatus, { status: info.getValue() }),
      header: "Status",
    },
    {
      accessorKey: "or_number",
      cell: (info) => info.getValue(),
      header: "OR Number",
    },
    {
      accessorKey: "amount_paid",
      cell: (info) => info.getValue(),
      header: "Amount Paid",
    },
    {
      accessorKey: "paid_at",
      cell: (info) => info.getValue(),
      header: "Date Paid",
      accessorFn: (row) => {
        if (row.paid_at) {
          return new Date(row.paid_at).toDateString();
        }
        return "";
      },
    },
    {
      accessorKey: "discounted_by",
      cell: (info) => info.getValue(),
      header: "Note",
    },
    {
      accessorKey: "id",
      cell: (info) => {
        const primaryAction = {
          icon: Eye,
          label: "View",
          action: () => {
            open({
              props: {
                info: info.row.original as Types.Ticket,
              },
              id: "viewTicket",
            });
          },
        };

        const actions = [
          {
            icon: Pencil,
            label: "Edit",
            action: () => {
              goto(`/tickets/edit?id=${info.getValue()}`);
            },
          },
          {
            icon: Trash,
            label: "Delete",
            action: () => {
              open({
                props: {
                  info: info.row.original.id,
                },
                id: "deleteTicket",
              });
            },
          },
        ];
        return flexRender(RowAction, {
          status: info.row.original.status,
          primaryAction,
          actions,
        });
      },
      header: "Actions",
      enableSorting: false,
    },
  ];

  $: if ($message) {
    close();
    open({
      id: $message.action,
    });
  }

  $: if ($paymentMessage) {
    close();
    open({
      id: $paymentMessage.action,
    });
  }
</script>

<svelte:head><title>Tickets</title></svelte:head>

<header style="display: flex; align-items: center;">
  <h1 style="font-weight: bold;">Tickets</h1>
  <div style="margin-left:auto">
    <a href="/tickets/add">
      <Button color="teal">Add Ticket</Button>
    </a>
  </div>
</header>

{#await data.lazy.tickets}
  <Spinner />
{:then response}
  <DataList table="tickets" let:data initData={response ?? []}>
    <TanTable {data} {columns} showGrid={true}></TanTable>
  </DataList>
{:catch error}
  {error}
{/await}

<Overlay let:data title="View Ticket" id="viewTicket">
  <ViewTickets info={data} {supabase} />
</Overlay>

<Overlay let:data title="" id="deleteTicket" type="modal">
  <form
    action="?/delete"
    method="POST"
    use:enhance
    class="flex flex-col justify-center items-center text-red-500"
    on:submit={close}
  >
    <ConfirmDelete info={data} {form} on:close={close}></ConfirmDelete>
  </form>
</Overlay>

<Overlay let:data title="Pay Ticket" id="payTicket" type="modal">
  <form action="?/pay" method="POST" use:paymentEnhance>
    <PayTicket
      info={data}
      initData={{}}
      form={paymentForm}
      errors={paymentErrors}
    ></PayTicket>
  </form>
</Overlay>
