<script>
    import { ArrowLeft } from "lucide-svelte";
    import SidebarDivider from "$lib/components/Sidebar/subcomponents/Sidebar-Divider.svelte";
    import TextInput from "$lib/components/Forms/TextInput.svelte";
    import Label from "$lib/components/Forms/Label.svelte";
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
        data-hs-overlay="#hs-focus-management-modal"
    >
        Add Enforcer
    </button>
</div>

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
                                    <button
                                        style="background-color: green;"
                                        type="button"
                                        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        data-hs-overlay="#hs-edit-modal"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                        data-hs-overlay="#hs-del-modal"
                                    >
                                        Delete
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

<!-- Add modal -->
<div
    id="hs-focus-management-modal"
    class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
>
    <div
        class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
    >
        <div
            class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        >
            <div
                class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"
            >
                <h3 class="font-bold text-gray-800 dark:text-white">
                    Add Enforcer
                </h3>
                <button
                    type="button"
                    class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    data-hs-overlay="#hs-focus-management-modal"
                >
                    <span class="sr-only">Close</span>
                    <svg
                        class="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
                    >
                </button>
            </div>
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
            <div
                class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700"
            >
                <button
                    type="button"
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    data-hs-overlay="#hs-focus-management-modal"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                    Save
                </button>
            </div>
        </div>
    </div>
</div>

<!-- Update modal -->
<div
    id="hs-edit-modal"
    class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
>
    <div
        class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
    >
        <div
            class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        >
            <div
                class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"
            >
                <h3 class="font-bold text-gray-800 dark:text-white">
                    Update Enforcer
                </h3>
                <button
                    type="button"
                    class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    data-hs-overlay="#hs-edit-modal"
                >
                    <span class="sr-only">Close</span>
                    <svg
                        class="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
                    >
                </button>
            </div>
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
            <div
                class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700"
            >
                <button
                    type="button"
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    data-hs-overlay="#hs-edit-modal"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                    Save
                </button>
            </div>
        </div>
    </div>
</div>

<!-- delete modal -->
<div
    id="hs-del-modal"
    class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
>
    <div
        class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
    >
        <div
            class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        >
            <div
                class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"
            >
                <button
                    type="button"
                    class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    data-hs-overlay="#hs-del-modal"
                >
                    <span class="sr-only">Close</span>
                    <svg
                        class="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
                    >
                </button>
            </div>
            <div style="font-size: 35px; text-align:center">Are you sure</div>
            <div style="font-size: 20px; text-align:center">
                Delete this user
            </div>
            <div
                class="justify-center text-center py-3 px-4 border-b dark:border-gray-700"
            >
                <div class="flex justify-between">
                    <button
                        type="button"
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        data-hs-overlay="#hs-cancel-modal"
                        style="width: 100%; height: 40px; display: flex; align-items: center; justify-content: center; margin: auto; margin-right: 10px"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        data-hs-overlay="#hs-Delete-modal"
                        style="width: 100%; height: 40px; display: flex; align-items: center; justify-content: center; margin: auto;"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
