<script>
    import { ArrowLeft } from "lucide-svelte";
    import Grid from "$lib/components/Layout/Grid.svelte";
    import GridCol from "$lib/components/Layout/GridCol.svelte";
    import Tables from "$lib/components/Table/tables.svelte";
    import Button from "$lib/components/Base/Button.svelte";
    import Label from "$lib/components/Forms/Label.svelte";
    import Input from "$lib/components/Forms/Input.svelte";
    import Divider from "$lib/components/Base/Divider.svelte";
  </script>
  
  <header
    style="display: flex; align-items: center;"
  >
    <button><ArrowLeft style="margin-right: 10px;" /></button>
    <h1 style="font-weight: bold;">New Ticket</h1>

  </header>
  <!--Modal-->
  
  <Grid columns="grid-cols-6" gap="gap-4">
    <GridCol colSpan="col-span-2">
        <Label id="input-label"classNames="mt-3">Violator</Label>
        <Divider border={2}/>
        <div class="my-4">
        <Label id="input-label">Last Name</Label>
        <Input id="input-label" type="text" placeholder="Ex. Valdez" />
      </div>
      <div class="my-4">
        <Label id="input-label">First Name</Label>
        <Input id="input-label" type="text" placeholder="Ex. Juan" />
      </div>
      <div class="my-4">
        <Label id="input-label">Middle Name</Label>
        <Input id="input-label" type="text" placeholder="Ex. Agapito" />
      </div>
      <Grid columns="grid grid-cols-3" gap="gap-2">
        <GridCol>
          <Label id="input-label">Suffix</Label>
          <Input id="input-label" type="text" placeholder="Ex. Jr"/>
        </GridCol>
        <GridCol colSpan="col-span-2">
          <Label id="input-label">Birthday</Label>
          <Grid columns="grid-cols-3" gap="gap-2">
          <Input id="input-label" type="text" classNames="text-center" placeholder="MM"/>
          <Input id="input-label" type="text" classNames="text-center" placeholder="DD"/>
          <Input id="input-label" type="text" classNames="text-center" placeholder="YYY"/>
          </Grid>
        </GridCol>
        <GridCol>
        </GridCol>
      </Grid>
    </GridCol>
    <!-- Violator Details End -->
  
    <!-- Ticket Details -->
    <GridCol colSpan="col-span-2">
        <Label id="input-label" classNames="mt-3">Ticket Details</Label>
        <Divider border={2}/>
        <div class="my-4">
          <Label id="input-label">Ticket Number</Label>
          <Input id="input-label" type="text" placeholder="Ex. 123123" />
        </div>
        <div class="my-4">
          <Label id="input-label">Location</Label>
          <Input id="input-label" type="text" placeholder="Ex. Post 1" />
        </div>
        <div class="my-4">
          <Label id="input-label">Apprehending Officer</Label>
          <Input id="input-label" type="text" placeholder="Ex. Agapito" />
        </div>
        <Grid columns="grid grid-cols-3" gap="gap-2">
          <GridCol colSpan="col-span-2">
            <Label id="input-label">Apprehension Date</Label>
            <Grid columns="grid-cols-3" gap="gap-2">
                <Input id="input-label" type="text" classNames="text-center" placeholder="MM"/>
                <Input id="input-label" type="text" classNames="text-center" placeholder="DD"/>
                <Input id="input-label" type="text" classNames="text-center" placeholder="YYY"/>
            </Grid>
          </GridCol>
          <GridCol>
          </GridCol>
        </Grid>
      </GridCol>
    <!-- Ticket Details End -->
  
    <!-- Violations -->
    
    <GridCol colSpan="col-span-2">
        <Label id="input-label" classNames="mt-3">Violations</Label>
        <Divider border={2}/>

    </GridCol>
    <!-- Violations End -->
  </Grid>
  <header style="display: flex; margin-top: 20px;">
    <Label id="input-label" classNames="mt-3">Matched Tickets</Label>
  </header>

  <!-- Table -->
  <!-- Table Section -->
  <Tables />
  <header style="display: flex; margin-top: 20px;">
    <Label id="input-label" classNames="mt-3">Other Info</Label>
  </header>
  <footer style="display: flex; justify-content: flex-end; margin-top: 20px;">
    <Button buttonname="Cancel" marginright={10} bgcolor="white" />
    <Button buttonname="Update" marginright={10} bgcolor="blue" color="white" />
    <Button buttonname="Pay" marginright={10} bgcolor="mediumseagreen" color="white" />
  </footer>
  