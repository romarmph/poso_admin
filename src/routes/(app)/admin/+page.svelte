<script>
    import TextInput from "$lib/components/Forms/TextInput.svelte";
    import Label from "$lib/components/Forms/Label.svelte";
    import PasswordInput from "$lib/components/Forms/PasswordInput.svelte";
    import {
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
    } from "$lib/components/Overlays/Modal/Modal";
    import { Button } from "$lib/Components";
</script>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Admin</h1>
</header>

<div style="display: flex; justify-content: flex-end; padding: 10px;">
    <TextInput
        id="input-Label"
        placeholder="Search"
        width="36"
        classNames="py-3 px-3 pe-15 mr-5"
    />

    <Button data-hs-overlay="#hs-add-admin-modal">Add Admin</Button>
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
                                        <Button
                                            data-hs-overlay="#hs-edit-admin-modal"
                                            color="teal"
                                            size="small">Edit</Button
                                        >
                                        <Button
                                            data-hs-overlay="#hs-del-admin-modal"
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

<!-- Update modal -->
<Modal modalId="hs-edit-admin-modal">
    <ModalHeader>Update Admin</ModalHeader>

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
                placeholder="New password"
                title="New Password"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <PasswordInput
                id="hs-toggle-password-multi-toggle-np"
                placeholder="Confirm password"
                title="Confirm Password"
            />
        </div>
    </ModalBody>

    <ModalFooter></ModalFooter>
</Modal>

<!-- delete modal -->
<Modal modalId="hs-del-admin-modal">
    <ModalHeader>Delete</ModalHeader>

    <ModalBody>
        <div style="font-size: 20px; text-align:center">
            Are you sure you want to delete this Admin?
        </div>
    </ModalBody>

    <ModalFooter>
        <Button style="soft" color="gray">Cancel</Button>
        <Button color="red">Delete</Button>
    </ModalFooter>
</Modal>
