<script lang="ts">
    import Dropdown from "../Base/Dropdown.svelte";
    import FilterDropdown from "../Base/FilterDropdown.svelte";
    import ExportDropdown from "../Base/ExportDropdown.svelte";
    import TextInput from "../Forms/TextInput.svelte";
    import TableHead from "./TableHead.svelte";
    import TableBody from "./TableBody.svelte";
    import { MoreHorizontal, Download, ListFilter, Search } from "lucide-svelte";
</script>
<!-- Table Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
            <!-- Header -->
            <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
              <!-- Input -->
              <div class="sm:col-span-1">
                <div class="relative">  
                    <TextInput id="search" placeholder="search"/>
                </div>
              </div>
              <!-- End Input -->
              <div class="sm:col-span-2 md:grow">
                <div class="flex justify-end gap-x-2">
                  <ExportDropdown name="Export"><Download/></ExportDropdown>
                  <FilterDropdown><ListFilter/></FilterDropdown>
                </div>
              </div>
            </div>
            <!-- End Header -->
            <!-- Table -->
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-slate-800">
                <tr>
                    

                    <slot/>
                </tr>
              </thead>
  
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                
                </tr>
  
              
              </tbody>
            </table>
            <!-- End Table -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Table Section -->