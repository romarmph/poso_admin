<script>
  import { ArrowLeft } from "lucide-svelte";
  import Colheader from "$lib/components/tickets/columnHeader/Colheader.svelte";
  import Grid from "$lib/components/tickets/Grid/Grid.svelte";
  import Tables from "$lib/components/tickets/tables/tables.svelte";
  import Input from "$lib/components/tickets/input/input.svelte";
  import Smallbox from "$lib/components/tickets/input/Smallbox.svelte";
  import Button from "$lib/components/tickets/Button/Button.svelte";
</script>

<header style="display: flex; align-items: center;">
    <button><ArrowLeft style="margin-right: 10px;" /></button>
    <h1 style="font-weight: bold;">New Ticket</h1>
</header>

<!-- Form -->
<Grid columns={3} gap={4}>
    <div>
      <ul class="space-y-1.5">
          <div style="border-bottom: 1px solid black; margin-bottom: 10px;">
              <Colheader title="Violator" />
          </div>
          <div class="sm:col-span-9"> 
            <Input headtitle="Last Name" placeholder="ex. Valdez" id="lname" type="text" py={4} px={3} pe={9} w={64}/>
          </div>
          <div class="sm:col-span-9">
            <Input headtitle="First Name" placeholder="ex. Armando" id="fname" type="text" py={4} px={3} pe={9} w={64}/>
          </div>
          <div class="sm:col-span-9">
            <Input headtitle="Middle Name" placeholder="ex. Sampaga" id="mname" type="text" py={4} px={3} pe={9} w={64}/>
          </div>  
          <div class="sm:col-span-9">
              <div class="sm:col-span-9">
                  <div class="sm:flex flex-col">
                      <div class="sm:flex">
                          <div>
                            <Colheader title="Violator" />
                            <Smallbox placeholder="ex. Jr " id="suffix" type="text" py={2} px={3} pe={15} w={24} mr={2}/>
                          </div>
                          <div>
                            <Colheader title="Violator" />
                            <div class="sm:flex">
                                <Smallbox  placeholder="dd" id="day" type="text" py={2} px={3} pe={15} w={24} mr={2}/>
                                <Smallbox  placeholder="mm" id="month" type="text" py={2} px={3} pe={15} w={24} mr={2}/>
                                <Smallbox  placeholder="yyyy" id="year" type="text" py={2} px={3} pe={15} w={24} mr={2}/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </ul>
  </div>
  <div>
      <ul class="space-y-1.5">
          <div style="border-bottom: 1px solid black; margin-bottom: 10px;">
            <Colheader title="Ticket Details" />
          </div>
          <div class="sm:col-span-9"> 
            <Input headtitle="Ticket Number" placeholder="ex. 123123" id="lname" type="text" py={4} px={3} pe={9} w={64}/>
          </div>
          <div class="sm:col-span-9">
            <Input headtitle="Location" placeholder="ex. Post 1" id="fname" type="text" py={4} px={3} pe={9} w={64}/>
          </div>
          <div class="sm:col-span-9">
            <Input headtitle="Apprehending Officer" placeholder="ex. Agapinto" id="mname" type="text" py={4} px={3} pe={9} w={64}/>
          </div>
          <div class="sm:col-span-9">
              <div class="sm:col-span-9">
                  <div class="sm:flex flex-col">
                      <div class="sm:flex">
                          <div>
                            <Colheader title="Violator" />
                            <div class="sm:flex">
                                <Smallbox  placeholder="dd" id="day" type="text" py={2} px={3} pe={15} w={24} mr={2}/>
                                <Smallbox  placeholder="mm" id="month" type="text" py={2} px={3} pe={15} w={24} mr={2}/>
                                <Smallbox  placeholder="yyyy" id="year" type="text" py={2} px={3} pe={15} w={24} mr={2}/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </ul>
  </div>
  <div>
      <ul class="space-y-1.5">
          <div style="border-bottom: 1px solid black; margin-bottom: 10px;">
            <Colheader title="Violations" />
            </div>
      </ul>
  </div>
  </Grid>

  <header style="display: flex; align-items: center; margin-top: 50px;">
    <h1 style="font-weight: bold;">Matched Previous Offense</h1>
</header>

<!-- Table -->
<!-- Table Section -->
<Tables/>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Other Info</h1>
</header>

<Grid columns={5} gap={4}>
    <div>
        <ul>
            <li>John Doe</li>
            <li>Added by</li>
        </ul>
    </div>

    <div>
        <ul>
            <li>January 12, 2024</li>
            <li>Added at</li>
        </ul>
    </div>

    <div>
        <ul>
            <li>John Doe</li>
            <li>Updated by</li>
        </ul>
    </div>

    <div>
        <ul>
            <li>February 14,2024</li>
            <li>Updated at</li>
        </ul>
    </div>

    <div>
        <ul>
            <li>February 14,2024</li>
            <li>Paid at</li>
        </ul>
    </div>
</Grid>

<footer style="display: flex; justify-content: flex-end; padding: 10px;">
    <Button buttonname="Cancel" marginright={10} bgcolor="white"/>
    <Button buttonname="Update" marginright={10} bgcolor="blue" color="white"/>
    <Button buttonname="Pay" marginright={10} bgcolor="mediumseagreen" color="white"/>
  </footer>
<!-- mediumseagreen -->