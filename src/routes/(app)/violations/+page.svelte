<script>
  import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
  } from "$lib/components/Overlays/Modal/Modal";

  import {
    Button,
    TableBody,
    TableHead,
    Tables,
    Dropdown,
    TextInput,
    Label,
  } from "$lib/Components";
  import { MoreHorizontal, Download } from "lucide-svelte";
  import DataList from "$lib/components/Supabase/DataList.svelte";

  export let data;
</script>

<header style="display: flex; align-items: center;">
  <h1 style="font-weight: bold;">Violation</h1>
  <div style="margin-left:auto">
    <Button data-hs-overlay="#hs-add-violation-modal">Add Violation</Button>
  </div>
</header>

<!--Table -->

<Tables>
  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead class="bg-gray-50 dark:bg-slate-800">
      <tr>
        <TableHead name="" classes="ps-6 py-3 text-start"
          ><input
            type="checkbox"
            class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            id="hs-at-with-checkboxes-main"
          />
        </TableHead>
        <TableHead name="Violation Name" classes="px-6 py-3 text-start" />
        <TableHead name="Amount Fine" classes="px-6 py-3 text-start" />
        <TableHead name="Status" classes="px-6 py-3 text-start" />
        <TableHead name="Created By:" classes="px-6 py-3 text-start" />
        <TableHead name="Created At:" classes="px-6 py-3 text-start" />
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <DataList table="violations" initData={data.violations ?? []} let:data>
        {#each data as employee}
          <tr>
            <td>{employee.small}</td>
          </tr>
        {/each}
      </DataList>
    </tbody>
  </table>
</Tables>

<DataList table="employees" initData={data.employees ?? []} let:data>
  {#each data as employee}
    <tr>
      <td>{employee.id}</td>
    </tr>
  {/each}
</DataList>

<!-- Add Traffic Post modal -->
<Modal modalId="hs-add-violation-modal">
  <ModalHeader>Add Violation</ModalHeader>

  <ModalBody>
    <div class="p-4 overflow-y-auto">
      <Label id="input-label">Violation Name</Label>

      <TextInput id="input-Label" placeholder="Type violation here" />
    </div>
    <div class="p-4 overflow-y-auto">
      <Label id="input-label">Amount Fine</Label>

      <TextInput id="input-Label" placeholder="Type amount fine here" />
    </div>
  </ModalBody>

  <ModalFooter>
    <Button data-hs-overlay="#hs-add-TPost-modal" style="soft" color="gray"
      >Cancel</Button
    >
    <Button>Save</Button>
  </ModalFooter>
</Modal>

<!-- Update Traffic Post modal -->
