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
    } from "$lib/components/Overlays/Modal/Modal";
    import { Button } from "$lib/Components";
</script>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Traffic Post</h1>
</header>

<div style="display: flex; justify-content: flex-end; padding: 10px;">
    <TextInput
        id="input-Label"
        placeholder="Search"
        width="36"
        classNames="py-3 px-3 pe-15 mr-5"
    />

    <Button data-hs-overlay="#hs-add-TPost-modal">Add Traffic Post</Button>
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
                        class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                    >
                        <thead class="bg-gray-50 dark:bg-slate-900">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-start">
                                    <div class="flex items-center gap-x-2">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                                        >
                                            Post Name
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" class="px-6 py-3 text-start">
                                    <div class="flex items-center gap-x-2">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                                        >
                                            Location
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" class="px-6 py-3 text-start">
                                    <div class="flex items-center gap-x-2">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                                        >
                                            Status
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
                                                >1</span
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
                                                >12345</span
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
                                                class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
                                            >
                                                <svg
                                                    class="size-2.5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                                                    />
                                                </svg>
                                                Paid
                                            </span>
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
                                                >hshashasdhak</span
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
                                        <Button
                                            data-hs-overlay="#hs-edit-TPost-modal"
                                            color="teal"
                                            size="small">Edit</Button
                                        >
                                        <Button
                                            data-hs-overlay="#hs-del-TPost-modal"
                                            color="red"
                                            size="small">Delete</Button
                                        >
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

<!-- Add Traffic Post modal -->
<Modal modalId="hs-add-TPost-modal">
    <ModalHeader>Add Traffic Post</ModalHeader>

    <ModalBody>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Post Name</Label>

            <TextInput id="input-Label" placeholder="Type Post name here" />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Location</Label>

            <TextInput id="input-Label" placeholder="Type Location here" />
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
<Modal modalId="hs-edit-TPost-modal">
    <ModalHeader>Update Traffic Post</ModalHeader>

    <ModalBody>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Post Name</Label>

            <TextInput id="input-Label" placeholder="Type Post name here" />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Location</Label>

            <TextInput id="input-Label" placeholder="Type Location here" />
        </div>

        <div class="grid space-y-3">
            <div class="relative flex items-start">
                <div class="flex items-center h-5 mt-1">
                    <input
                        id="hs-radio-delete"
                        name="hs-radio-with-description"
                        type="radio"
                        class="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        aria-describedby="hs-radio-delete-description"
                        checked
                    />
                </div>
                <label for="hs-radio-delete" class="ms-3">
                    <span
                        class="block text-sm font-semibold text-gray-800 dark:text-gray-300"
                        >Enable</span
                    >
                    <span
                        id="hs-radio-delete-description"
                        class="block text-sm text-gray-600 dark:text-gray-500"
                        >Enable this traffic post.</span
                    >
                </label>
            </div>

            <div class="relative flex items-start">
                <div class="flex items-center h-5 mt-1">
                    <input
                        id="hs-radio-archive"
                        name="hs-radio-with-description"
                        type="radio"
                        class="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        aria-describedby="hs-radio-archive-description"
                    />
                </div>
                <label for="hs-radio-archive" class="ms-3">
                    <span
                        class="block text-sm font-semibold text-gray-800 dark:text-gray-300"
                        >Disable</span
                    >
                    <span
                        id="hs-radio-archive-description"
                        class="block text-sm text-gray-600 dark:text-gray-500"
                        >Disable this traffic post.</span
                    >
                </label>
            </div>
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Created by</Label>

            <TextInput id="input-Label" placeholder="Type here" />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Created at</Label>

            <TextInput id="input-Label" placeholder="Type here" />
        </div>
    </ModalBody>

    <ModalFooter>
        <Button data-hs-overlay="#hs-edit-TPost-modal" style="soft" color="gray"
            >Cancel</Button
        >
        <Button>Save</Button>
    </ModalFooter>
</Modal>

<!-- Delete Traffic Post modal -->
<Modal modalId="hs-del-TPost-modal">
    <ModalHeader></ModalHeader>

    <ModalBody>
        <div style="font-size: 35px; text-align:center">Are you sure</div>
        <div style="font-size: 20px; text-align:center">Delete this user</div>
    </ModalBody>

    <ModalFooter>
        <Button data-hs-overlay="#hs-del-TPost-modal" style="soft" color="gray"
            >Cancel</Button
        >
        <Button color="red">Delete</Button>
    </ModalFooter>
</Modal>
