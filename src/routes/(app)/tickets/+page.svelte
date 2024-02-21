<script>
   import {
    ArrowLeft
  } from "lucide-svelte";
  import SidebarDivider from "../../../lib/components/Sidebar/subcomponents/Sidebar-Divider.svelte";
</script>
<div class="p-5 bg-white rounded-lg">
  <header style="display: flex; align-items: center;">
    <button><ArrowLeft style="margin-right: 10px;" /></button>
    <h1 style="font-weight: bold;">New Ticket</h1>
</header>


  <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
    <!-- Form -->
    <div style="flex-basis: calc(3.33% - 1px); margin-bottom: 20px;">
      <!-- Violator -->
      <ul class="space-y-1.5">
        <div style="border-bottom: 1px solid black; margin-bottom: 10px;" >
      <SidebarDivider title="Violator" />
    </div>
      <div class="sm:col-span-9">
        <SidebarDivider title="Last Name" />
        <input id="fname" type="text" class="py-4 px-3 pe-9 block w-64 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Ex. Valdez">
      </div>
      <div class="sm:col-span-9">
        <SidebarDivider title="First Name" />
        <input id="lname" type="text" class="py-4 px-3 pe-9 block w-64 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Ex. Juan">
      </div>
      <div class="sm:col-span-9">
        <SidebarDivider title="Middle Name" />
        <input id="Mname" type="text" class="py-4 px-3 pe-9 block w-64 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Ex. Agapito">
      </div>
      
      <div class="sm:col-span-9">
        <div class="sm:col-span-9">
          <div class="sm:flex flex-col"> <!-- Apply flex column layout -->
            <!-- First column -->
            <div class="sm:flex"> <!-- Wrap both columns in a row -->
              <!-- First column -->
              <div>
                <SidebarDivider title="Suffix" />
                <input id="Suffix" type="text" class="py-2 px-3 pe-11 block w-24  mr-2 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="EX. Jr.">
              </div>
            
              <!-- Second column -->
              <div>
                <SidebarDivider title="Birthdate" />
                <div class="sm:flex"> <!-- Wrap birthdate input fields in a row -->
                  <input id="birthdate-day" type="text" class="py-2 px-3 pe-11 block w-20 mr-1 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="DD">
                  <input id="birthdate-month" type="text" class="py-2 px-3 pe-11 block w-20 mr-1 border-gray-200 shadow-sm -mt-px -ms-px sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="MM">
                  <input id="birthdate-year" type="text" class="py-2 px-3 pe-11 block w-20 border-gray-200 shadow-sm -mt-px -ms-px last:rounded-b-lg sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="YYYY">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </ul>
    
    </div>

    <div style="flex-basis: calc(33.33% - 1px); margin-bottom: 20px;">
      <!-- Ticket detail -->
      <ul class="space-y-1.5">
        <div style="border-bottom: 1px solid black; margin-bottom: 10px;" >
        <SidebarDivider title="Ticket Details" />
      </div>
        <div class="sm:col-span-9">
          <SidebarDivider title="Ticket Number" />
          <input id="fname" type="text" class="py-4 px-3 pe-9 block w-64 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Ex. 123123">
        </div>
        <div class="sm:col-span-9">
          <SidebarDivider title="Location" />
          <input id="lname" type="text" class="py-4 px-3 pe-9 block w-64 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Ex. Post 1">
        </div>
        <div class="sm:col-span-9">
          <SidebarDivider title="Apprehending Officer" />
          <input id="Mname" type="text" class="py-4 px-3 pe-9 block w-64 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Ex. Agapito">
        </div>
        
        <div class="sm:col-span-9">
          <div class="sm:col-span-9">
            <div class="sm:flex flex-col"> <!-- Apply flex column layout -->
              <!-- First column -->
              <div class="sm:flex"> <!-- Wrap both columns in a row -->
                <!-- First column -->
                <!-- Second column -->
                <div>
                  <SidebarDivider title="Date of Violation" />
                  <div class="sm:flex"> <!-- Wrap birthdate input fields in a row -->
                    <input id="birthdate-day" type="text" class="py-2 px-3 pe-11 block w-20 mr-1 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="DD">
                    <input id="birthdate-month" type="text" class="py-2 px-3 pe-11 block w-20 mr-1 border-gray-200 shadow-sm -mt-px -ms-px sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="MM">
                    <input id="birthdate-year" type="text" class="py-2 px-3 pe-11 block w-20 border-gray-200 shadow-sm -mt-px -ms-px last:rounded-b-lg sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="YYYY">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </ul>
    </div>

    <div style="flex-basis: calc(33.33% - 10px); margin-bottom: 20px;">
      <!-- Violations -->
      <ul class="space-y-1.5">
        <div style="border-bottom: 1px solid black; margin-bottom: 10px;" >
        <SidebarDivider title="Violations" />
      </div>
        
      </ul>
    </div>
  </div>
  <div>
    <!-- Table -->
    <!-- Table Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Card -->
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
          <!-- Header -->




          <!-- Table -->
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-slate-900">
              <tr>
                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Invoice number
                    </span>
                    <div class="hs-tooltip">
                      <div class="hs-tooltip-toggle">
                        <svg class="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                        <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700" role="tooltip">
                          Invoice number related popup
                        </span>
                      </div>
                    </div>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Amount
                    </span>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Status
                    </span>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Due
                    </span>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Created
                    </span>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-end"></th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                <td class="size-px whitespace-nowrap">
                  <button type="button" class="block" data-hs-overlay="#hs-ai-invoice-modal">
                    <span class="block px-6 py-2">
                      <span class="font-mono text-sm text-blue-600 dark:text-blue-500">#ADUQ2189H1-0038</span>
                    </span>
                  </button>
                </td>
                <td class="size-px whitespace-nowrap">
                  <button type="button" class="block" data-hs-overlay="#hs-ai-invoice-modal">
                    <span class="block px-6 py-2">
                      <span class="text-sm text-gray-600 dark:text-gray-400">US $400.00</span>
                    </span>
                  </button>
                </td>
                <td class="size-px whitespace-nowrap">
                  <button type="button" class="block" data-hs-overlay="#hs-ai-invoice-modal">
                    <span class="block px-6 py-2">
                      <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                        <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                        Paid
                      </span>
                    </span>
                  </button>
                </td>
                <td class="size-px whitespace-nowrap">
                  <button type="button" class="block" data-hs-overlay="#hs-ai-invoice-modal">
                    <span class="block px-6 py-2">
                      <span class="text-sm text-gray-600 dark:text-gray-400">10 Jan 2023</span>
                    </span>
                  </button>
                </td>
                <td class="size-px whitespace-nowrap">
                  <button type="button" class="block" data-hs-overlay="#hs-ai-invoice-modal">
                    <span class="block px-6 py-2">
                      <span class="text-sm text-gray-600 dark:text-gray-400">28 Dec, 12:12</span>
                    </span>
                  </button>
                </td>
                <td class="size-px whitespace-nowrap">
                  <button type="button" class="block" data-hs-overlay="#hs-ai-invoice-modal">
                    <span class="px-6 py-1.5">
                      <span class="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                          <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        View
                      </span>
                    </span>
                  </button>
                </td>
              </tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
  <footer style="display: flex; justify-content: flex-end; padding: 10px;">
    <button style="margin-right: 10px; background-color: white; border: 1px solid #ccc; padding: 5px 10px; border-radius: 5px;">Cancel</button>
    <button style="background-color: blue; color: white; padding: 5px 10px; border: none; border-radius: 5px;">Save</button>
</footer>

</div>
