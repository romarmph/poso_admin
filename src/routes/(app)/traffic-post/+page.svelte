<script>
    import TextInput from "$lib/components/Forms/TextInput.svelte";
    import Label from "$lib/components/Forms/Label.svelte";
    import {
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
    } from "$lib/components/Overlays/Modal/Modal";
    import Tables from "$lib/components/Table/tables.svelte";
    import TableHead from "$lib/components/Table/TableHead.svelte";
    import Dropdown from "$lib/components/Base/Dropdown.svelte";
    import TableBody from "$lib/components/Table/TableBody.svelte";
    import { Button } from "$lib/Components";
    import {
        MoreHorizontal,
        Download,
        ListFilter,
        Search,
    } from "lucide-svelte";
</script>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Traffic Post</h1>
    <div style="margin-left:auto">
        <Button data-hs-overlay="#hs-add-TPost-modal">Add Traffic Post</Button>
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
                <TableHead name="Post Name" classes="px-6 py-3 text-start" />
                <TableHead name="Location" classes="px-6 py-3 text-start" />
                <TableHead name="Status" classes="px-6 py-3 text-start" />
                <TableHead name="Created By:" classes="px-6 py-3 text-start" />
                <TableHead name="Created At:" classes="px-6 py-3 text-start" />
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
                <TableBody classed="ps-6 py-3 text-start">
                    <input
                        type="checkbox"
                        class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-at-with-checkboxes-1"
                    />
                </TableBody>
                <TableBody>123</TableBody>
                <TableBody>123</TableBody>
                <TableBody>
                    <button
                        type="button"
                        class="block"
                        data-hs-overlay="#hs-ai-invoice-modal"
                    >
                        <span
                            class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
                        >
                            Enable
                        </span>
                    </button></TableBody
                >
                <TableBody>123</TableBody>
                <TableBody>123</TableBody>
                <TableBody
                    ><div
                        class="group inline-flex items-center divide-x divide-gray-300 border border-gray-300 bg-white shadow-sm rounded-lg transition-all dark:divide-gray-700 dark:bg-slate-700 dark:border-gray-700"
                    >
                        <div class="hs-tooltip inline-block">
                            <a
                                class="hs-tooltip-toggle py-1.5 px-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-s-md bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                <Download />
                                <span
                                    class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
                                    role="tooltip"
                                >
                                    Download PDF
                                </span>
                            </a>
                        </div>
                        <Dropdown
                            over="hs-edit-TPost-modal"
                            del="hs-del-TPost-modal"
                            ><MoreHorizontal /></Dropdown
                        >
                    </div></TableBody
                >
            </tr>
        </tbody>
    </table>
</Tables>

<!-- Add Traffic Post modal -->
<Modal modalId="hs-add-TPost-modal">
    <ModalHeader>Add Traffic Post</ModalHeader>

    <ModalBody>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Post Name</Label>

            <TextInput id="input-Label" placeholder="Type post name here" />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Location</Label>

            <TextInput id="input-Label" placeholder="Type location here" />
        </div>
    </ModalBody>

    <ModalFooter>
        <Button data-hs-overlay="#hs-add-TPost-modal" style="soft" color="gray"
            >Cancel</Button
        >
        <Button>Save</Button>
    </ModalFooter>
</Modal>
