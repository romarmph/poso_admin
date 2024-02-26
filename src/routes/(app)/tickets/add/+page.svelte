<script>
  import { ArrowLeft } from "lucide-svelte";
  import Colheader from "$lib/components/tickets/columnHeader/Colheader.svelte";
  import Grid from "$lib/components/tickets/Grid/Grid.svelte";
  import Tables from "$lib/components/tickets/tables/tables.svelte";
  import Input from "$lib/components/tickets/input/input.svelte";
  import Smallbox from "$lib/components/tickets/input/Smallbox.svelte";
  import Button from "$lib/components/tickets/Button/Button.svelte";
</script>

<header style="display: flex; justify-content: space-between; align-items: center;">
  <button><ArrowLeft style="margin-right: 10px;" /></button>
  <h1 style="font-weight: bold;">New Ticket</h1>
  <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-vertically-centered-modal"
    style="margin-left: auto; background-color: blue; color: white; padding: 5px 10px; border: none; border-radius: 5px;">Add Violation</button>
</header>
<!--Modal-->
<div id="hs-vertically-centered-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
  <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
    <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
        <h3 class="font-bold text-gray-800 dark:text-white">
          Add Violations
        </h3>
        <button type="button" class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-vertically-centered-modal">
          <span class="sr-only">Close</span>
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <div class="p-4 overflow-y-auto">
        <input type="text" id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Search" autofocus>
      </div>
      <div>
        <h1>
          asdasdasd
        </h1>
      </div>
      <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-vertically-centered-modal">
          Close
        </button>
        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          Save
        </button>
      </div>
      
    </div>
  </div>
</div>
<!--End of Modal-->
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
<!-- Table -->
<!-- Table Section -->
<Tables/>
<footer style="display: flex; justify-content: flex-end; padding: 10px;">
  <Button buttonname="Cancel" marginright={10} bgcolor="white"/>
  <Button buttonname="Save" marginright={10} bgcolor="blue" color="white"/>
</footer>
