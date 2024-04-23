<script>
  import { ArrowLeft } from "lucide-svelte";
  import {
    Button,
    Divider,
    TextInput,
    Label,
    Grid,
    GridCol,
    DatePicker,
  } from "$lib/Components";
</script>

<svelte:head><title>Add Ticket</title></svelte:head>

<header style="display: flex; align-items: center;">
  <button><ArrowLeft style="margin-right: 10px;" /></button>
  <h1 style="font-weight: bold;">New Ticket</h1>
  <div style="margin-left:auto">
    <Button data-hs-overlay="#hs-add-violation-modal">Add Violations</Button>
  </div>
</header>
<form action="">
  <Grid columns="grid-cols-7" gap="gap-4">
    <GridCol colSpan="col-span-2">
      <Label id="" classNames="mt-3">Violator</Label>
      <Divider border={2} />
      <div class="my-4">
        <Label id="last_name">Last Name</Label>
        <TextInput type="text" id="last_name" placeholder="Ex. Valdez" />
      </div>
      <div class="my-4">
        <Label id="first_name">First Name</Label>
        <TextInput type="text" id="first_name" placeholder="Ex. Juan" />
      </div>
      <div class="my-4">
        <Label id="middle_name">Middle Name</Label>
        <TextInput id="middle_name" type="text" placeholder="Ex. Agapito" />
      </div>
      <Grid columns="grid grid-cols-3" gap="gap-2">
        <GridCol>
          <Label id="suffix">Suffix</Label>
          <TextInput id="suffix" type="text" placeholder="Ex. Jr" />
        </GridCol>
        <GridCol colSpan="col-span-2">
          <Label id="birthday">Birthday</Label>
          <DatePicker id="birthday" />
        </GridCol>
        <GridCol></GridCol>
      </Grid>
    </GridCol>
    <GridCol colSpan="col-span-2">
      <Label id="input-label" classNames="mt-3">Ticket Details</Label>
      <Divider border={2} />
      <div class="my-4">
        <Label id="ticket_number">Ticket Number</Label>
        <TextInput id="ticket_numbe" type="text" placeholder="Ex. 123123" />
      </div>
      <div class="my-4">
        <Label id="location">Location</Label>
        <TextInput id="location" type="text" placeholder="Ex. Post 1" />
      </div>
      <div class="my-4">
        <Label id="enforcer">Apprehending Officer</Label>
        <TextInput id="enforcer" type="text" placeholder="Ex. Agapito" />
      </div>
      <Grid columns="grid grid-cols-3" gap="gap-2">
        <GridCol colSpan="col-span-2">
          <Label id="violation_date">Apprehension Date</Label>
          <DatePicker id="violation_date" />
        </GridCol>
        <GridCol colSpan="col-span-1">
          <Label id="violation_time">Apprehension Time</Label>
          <TextInput type="time" id="violation_time" />
        </GridCol>
        <GridCol></GridCol>
      </Grid>
    </GridCol>
    <GridCol colSpan="col-span-3">
      <Label id="input-label" classNames="mt-3">Violations</Label>
      <Divider border={2} />
    </GridCol>
  </Grid>
  <div class="flex justify-end gap-4 m-11">
    <Button style="soft" color="gray">Cancel</Button>
    <Button>Add</Button>
  </div>
</form>
