<script>
    import TextInput from "$lib/components/Forms/TextInput.svelte";
    import Label from "$lib/components/Forms/Label.svelte";
    import {
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
    } from "$lib/components/Overlays/Modal/Modal";

    import {
        Button,
        Tables,
        TableBody,
        TableHead,
        Dropdown,
        PasswordInput,
    } from "$lib/Components";
    import { MoreHorizontal, Download } from "lucide-svelte";
</script>

<svelte:head><title>Incentives</title></svelte:head>

<header style="display: flex; align-items: center; ">
    <h1 style="font-weight: bold;">Incentives</h1>
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
                <TableHead
                    name="Traffic Enforcer"
                    classes="px-6 py-3 text-start"
                />
                <TableHead
                    name="Total of Tickets"
                    classes="px-6 py-3 text-start"
                />
                <TableHead name="Incentives" classes="px-6 py-3 text-start" />
                <TableHead name="Creted By:" classes="px-6 py-3 text-start" />
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
                            over="hs-edit-admin-modal"
                            del="hs-del-admin-modal"
                            ><MoreHorizontal /></Dropdown
                        >
                    </div></TableBody
                >
            </tr>
        </tbody>
    </table>
</Tables>

<!-- Add modal -->
<Modal modalId="hs-add-admin-modal">
    <ModalHeader>Add Admin</ModalHeader>

    <ModalBody>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">First Name</Label>

            <TextInput
                id="input-Label"
                placeholder="Type admin first name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Middle Name</Label>

            <TextInput
                id="input-Label"
                placeholder="Type admin middle name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Last Name</Label>

            <TextInput
                id="input-Label"
                placeholder="Type admin last name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Employee No.</Label>

            <TextInput
                id="input-Label"
                placeholder="Type employee number here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <PasswordInput
                id="hs-toggle-password-multi-toggle-np"
                placeholder="Password"
                title="Password"
            />
        </div>
    </ModalBody>

    <ModalFooter></ModalFooter>
</Modal>