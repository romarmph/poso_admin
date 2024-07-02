<script lang="ts">
  import { Button, TicketStatus, TanTable, TextInput } from "$lib/Components";
  import { DataList } from "$lib/components/Supabase/Supabase";
  import VehicleTypeColumn from "$lib/components/Customs/VehicleTypeColumn.svelte";
  import EnforcerColumn from "$lib/components/Customs/EnforcerColumn.svelte";
  import ViolationsColumn from "$lib/components/Customs/ViolationsColumn.svelte";
  import { Overlay, ViewTickets } from "$lib/components/Overlays/Overlays";
  import ConfirmDelete from "$lib/components/Overlays/Modal/Delete/ConfirmDelete.svelte";
  import PayTicket from "$lib/components/Overlays/Modal/PayTicket.svelte";
  import RowAction from "$lib/components/Base/RowAction.svelte";
  import Spinner from "$lib/components/Base/Spinner.svelte";
  import { Eye, Pencil, Trash } from "lucide-svelte";
  import {
    Select,
    SelectTrigger,
    SelectItem,
    SelectValue,
    SelectContent,
  } from "$lib/components/ui/select";
  import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
  import { overlayStore } from "$lib/stores/overlayStore.js";
  import { getSupabaseContext } from "$lib/stores/clientStore.js";
  import { goto } from "$app/navigation";
  import { superForm } from "sveltekit-superforms";
  import exportData from "$lib/helpers/xlxs";
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
  } = superForm(data.paymentForm, {
    dataType: "json",
  });
  const columns: ColumnDef<Types.Ticket>[] = [
    {
      accessorKey: "violation_date",
      cell: (info) => info.getValue(),
      header: "Violation Date",
      accessorFn: (row) => new Date(row.violation_date).toDateString(),
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

  let selectedYear = {
    value: data.query.year,
    label: data.query.year.toString(),
  };
  let selectedMonth = {
    value: data.query.month,
    label: data.months.find(
      (month: { month_number: number; month_name: string }) =>
        month.month_number === data.query.month,
    ).month_name,
  };

  let searchValue = "";
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
  <DataList table="tickets" let:data={listData} initData={response ?? []}>
    <TanTable data={listData} {columns} showGrid={true}>
      <svelte:fragment slot="left-side">
        <TextInput
          id="search"
          placeholder="Search"
          bind:value={searchValue}
          classNames="col-span-1"
          callback={() => {
            goto(`/tickets?search=${searchValue}`);
          }}
        />
      </svelte:fragment>
      <svelte:fragment slot="right-side">
        <Select
          name="month"
          selected={selectedMonth}
          onSelectedChange={(v) => {
            if (v) {
              selectedMonth = {
                value: v?.value,
                label: v.label ?? "",
              };
            }
            goto(
              `/tickets?year=${selectedYear.value}&month=${selectedMonth.value}`,
            );
          }}
        >
          <SelectTrigger class="w-[180px]">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            {#each data.months as month}
              <SelectItem value={month.month_number}
                >{month.month_name}</SelectItem
              >
            {/each}
          </SelectContent>
        </Select>

        <Select
          name="year"
          selected={selectedYear}
          onSelectedChange={(v) => {
            if (v) {
              selectedYear = {
                value: v?.value,
                label: v.label ?? "",
              };
            }
            goto(
              `/tickets?year=${selectedYear.value}&month=${selectedMonth.value}`,
            );
          }}
        >
          <SelectTrigger class="w-[180px]">
            <SelectValue placeholder="Quarter" />
          </SelectTrigger>
          <SelectContent>
            {#each data.years as year}
              <SelectItem value={year.year}>{year.year}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
        <Button
          on:click={async () => {
            const start = new Date(selectedYear.value, selectedMonth.value, 2)
              .toISOString()
              .split("T")[0];
            const end = new Date(selectedYear.value, selectedMonth.value + 1, 1)
              .toISOString()
              .split("T")[0];
            console.log(start);
            console.log(end);
            const { data: exportable } = await data.supabase.rpc(
              "get_tickets_in_date_range",
              { start_date: start, end_date: end },
            );
            console.log(start, end);

            exportData(
              exportable.flat(1).map((item) => {
                const e = JSON.parse(JSON.stringify(item));
                delete e["created_at"];
                delete e["updated_at"];
                delete e["deleted_at"];
                e.violations = e.violations.join();

                return e;
              }),
              `Tickets-${selectedYear.label}-${selectedMonth.label}`,
            );
          }}>Export</Button
        >
      </svelte:fragment>
    </TanTable>
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
