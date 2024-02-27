<script>
    import { ArrowLeft } from "lucide-svelte";
    import SidebarDivider from "$lib/components/Sidebar/subcomponents/Sidebar-Divider.svelte";
    import TextInput from "$lib/components/Forms/TextInput.svelte";
    import Label from "$lib/components/Forms/Label.svelte";
    import {
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
    } from "$lib/components/Modal/Modal";
    import { Button } from "$lib/Components";
</script>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Enforcer</h1>
</header>

<div style="display: flex; justify-content: flex-end; padding: 10px;">
    <TextInput
        id="input-Label"
        placeholder="Search"
        width="36"
        classNames="py-3 px-3 pe-15 mr-5"
    />
    <button
        type="button"
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        data-hs-overlay="#hs-add_enforcer-modal"
    >
        Add Enforcer
    </button>
</div>
<!--Table -->

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
                <div
                    class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
                >
                    <!-- Header -->

                    <!-- Table -->
                    <table
                        class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 px-6 py-3"
                    >
                        <thead class="bg-gray-50 dark:bg-slate-900">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-start">
                                    <div class="flex items-center gap-x-2">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                                        >
                                            Employee No.
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" class="px-6 py-3 text-start">
                                    <div class="flex items-center gap-x-2">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                                        >
                                            Name
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" class="px-6 py-3 text-start">
                                    <div class="flex items-center gap-x-2">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                                        >
                                            Created by
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" class="px-6 py-3 text-start">
                                    <div class="flex items-center gap-x-2">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                                        >
                                            Created at
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" class="px-6 py-3 text-start">
                                    <div class="flex items-center gap-x-2">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                                        >
                                            Actions
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody
                            class="divide-y divide-gray-200 dark:divide-gray-700"
                        >
                            <tr
                                class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                            >
                                <td class="size-px whitespace-nowrap">
                                    <button
                                        type="button"
                                        class="block"
                                        data-hs-overlay="#hs-ai-invoice-modal"
                                    >
                                        <span class="block px-6 py-2">
                                            <span
                                                class="text-sm text-gray-600 dark:text-gray-400"
                                                >1235123</span
                                            >
                                        </span>
                                    </button>
                                </td>
                                <td class="size-px whitespace-nowrap">
                                    <button
                                        type="button"
                                        class="block"
                                        data-hs-overlay="#hs-ai-invoice-modal"
                                    >
                                        <span class="block px-6 py-2">
                                            <span
                                                class="text-sm text-gray-600 dark:text-gray-400"
                                                >Romar Macareg</span
                                            >
                                        </span>
                                    </button>
                                </td>

                                <td class="size-px whitespace-nowrap">
                                    <button
                                        type="button"
                                        class="block"
                                        data-hs-overlay="#hs-ai-invoice-modal"
                                    >
                                        <span class="block px-6 py-2">
                                            <span
                                                class="text-sm text-gray-600 dark:text-gray-400"
                                                >John Doe</span
                                            >
                                        </span>
                                    </button>
                                </td>

                                <td class="size-px whitespace-nowrap">
                                    <button
                                        type="button"
                                        class="block"
                                        data-hs-overlay="#hs-ai-invoice-modal"
                                    >
                                        <span class="block px-6 py-2">
                                            <span
                                                class="text-sm text-gray-600 dark:text-gray-400"
                                                >January 12, 2024</span
                                            >
                                        </span>
                                    </button>
                                </td>

                                <td class="size-px whitespace-nowrap">
                                    <div
                                        class="inline-flex rounded-lg shadow-sm"
                                    >
                                        <button
                                            type="button"
                                            class="py-2 px-3 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                            data-hs-overlay="#hs-edit_enforcer-modal"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            class="py-2 px-3 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                            data-hs-overlay="#hs-del_enforcer-modal"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Add modal -->
<Modal modalId="hs-add_enforcer-modal">
    <ModalHeader slot="header">Add Enforcer</ModalHeader>

    <ModalBody slot="body">
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">First Name</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer first name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Middle Name</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer middle name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Last Name</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer Last name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Employee No.</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer Employee number here"
            />
        </div>
    </ModalBody>

    <ModalFooter slot="footer"></ModalFooter>
</Modal>

<!-- Update modal -->
<Modal modalId="hs-edit_enforcer-modal">
    <ModalHeader slot="header">Update Enforcer</ModalHeader>

    <ModalBody slot="body">
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">First Name</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer first name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Middle Name</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer middle name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Last Name</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer Last name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Employee No.</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer Employee number here"
            />
        </div>
    </ModalBody>

    <ModalFooter slot="footer"></ModalFooter>
</Modal>

<!-- delete modal -->
<Modal modalId="hs-del_enforcer-modal">
    <ModalHeader slot="header"></ModalHeader>

    <ModalBody slot="body">
        <div style="font-size: 35px; text-align:center">Are you sure</div>
        <div style="font-size: 20px; text-align:center">Delete this user</div>
    </ModalBody>

    <ModalFooter slot="footer">
        <Button style="soft" color="gray">Cancel</Button>
        <Button color="red">Delete</Button>
    </ModalFooter>
</Modal>
