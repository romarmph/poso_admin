<script>
    import TextInput from "$lib/components/Forms/TextInput.svelte";
    import Label from "$lib/components/Forms/Label.svelte";
    import PasswordInput from "$lib/components/Forms/PasswordInput.svelte";
    import RadioButton from "$lib/components/Forms/RadioButton.svelte";
    import {
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
    } from "$lib/components/Overlays/Modal/Modal";
    import { Button } from "$lib/Components";
    import { Pencil, Trash2 } from "lucide-svelte";
</script>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Vehicle Type</h1>
</header>

<div style="display: flex; justify-content: flex-end; padding: 10px;">
    <TextInput
        id="input-Label"
        placeholder="Search"
        width="36"
        classNames="py-3 px-3 pe-15 mr-5"
    />
</div>
<Label id="input-label">Vehicle Type</Label>
<div class="p-4 overflow-y-auto" style="display: flex;  padding: 10px;">
    <TextInput
        id="input-Label"
        placeholder="Add New Vehicle Type"
        width="60"
        classNames="py-3 px-3 pe-15 mr-5"
    />
    <Button>Add</Button>
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
                                            Vehicle Type
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
                                                >Broom Broom</span
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
                                                Enable
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
                                        <Button
                                            data-hs-overlay="#hs-edit-vType-modal"
                                            color="teal"
                                            size="small"><Pencil /></Button
                                        >
                                        <Button
                                            data-hs-overlay="#hs-del-vType-modal"
                                            color="red"
                                            size="small"><Trash2 /></Button
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

<!-- Update modal -->
<Modal modalId="hs-edit-vType-modal">
    <ModalHeader>Update Vehicle Type</ModalHeader>

    <ModalBody>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Vehicle Type</Label>

            <TextInput id="input-Label" placeholder="Type Vehicle Type here" />
        </div>

        <RadioButton />
    </ModalBody>

    <ModalFooter></ModalFooter>
</Modal>

<!-- delete modal -->
<Modal modalId="hs-del-vType-modal">
    <ModalHeader>Delete</ModalHeader>

    <ModalBody>
        <div style="font-size: 20px; text-align:center">
            Are you sure you want to delete this Vehicle Type?
        </div>
    </ModalBody>

    <ModalFooter>
        <Button style="soft" color="gray">Cancel</Button>
        <Button color="red">Delete</Button>
    </ModalFooter>
</Modal>
