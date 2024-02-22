<script>
    import { ArrowLeft } from "lucide-svelte";
    import SidebarDivider from "$lib/components/Sidebar/subcomponents/Sidebar-Divider.svelte";
</script>

<header style="display: flex; align-items: center;">
    <button><ArrowLeft style="margin-right: 10px;" /></button>
    <h1 style="font-weight: bold;">New Ticket</h1>
</header>

<!-- Form -->
<div class="grid grid-cols-7 gap-6">
    <div class="col-span-2">
        <ul class="space-y-1.5">
            <div style="border-bottom: 1px solid black; margin-bottom: 10px;">
                <SidebarDivider title="Violator" />
            </div>
            <div class="sm:col-span-9">
                <SidebarDivider title="Last Name" />
                <input
                    id="fname"
                    type="text"
                    class="py-4 px-3 pe-9 block w-64 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Ex. Valdez"
                />
            </div>
            <div class="sm:col-span-9">
                <SidebarDivider title="First Name" />
                <input
                    id="lname"
                    type="text"
                    class="py-4 px-3 pe-9 block w-64 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Ex. Juan"
                />
            </div>
            <div class="sm:col-span-9">
                <SidebarDivider title="Middle Name" />
                <input
                    id="Mname"
                    type="text"
                    class="py-4 px-3 pe-9 block w-64 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Ex. Agapito"
                />
            </div>

            <div class="sm:col-span-9">
                <div class="sm:col-span-9">
                    <div class="sm:flex flex-col">
                        <!-- Apply flex column layout -->
                        <!-- First column -->
                        <div class="sm:flex">
                            <!-- Wrap both columns in a row -->
                            <!-- First column -->
                            <div>
                                <SidebarDivider title="Suffix" />
                                <input
                                    id="Suffix"
                                    type="text"
                                    class="py-2 px-3 pe-11 block w-24 mr-2 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                    placeholder="EX. Jr."
                                />
                            </div>

                            <!-- Second column -->
                            <div>
                                <SidebarDivider title="Birthdate" />
                                <div class="sm:flex">
                                    <!-- Wrap birthdate input fields in a row -->
                                    <input
                                        id="birthdate-day"
                                        type="text"
                                        class="py-2 px-3 pe-11 block w-20 mr-1 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        placeholder="DD"
                                    />
                                    <input
                                        id="birthdate-month"
                                        type="text"
                                        class="py-2 px-3 pe-4 block w-20 mr-1 border-gray-200 shadow-sm -mt-px -ms-px sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        placeholder="MM"
                                    />
                                    <input
                                        id="birthdate-year"
                                        type="text"
                                        class="py-2 px-3 pe-11 block w-20 border-gray-200 shadow-sm -mt-px -ms-px last:rounded-b-lg sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        placeholder="YYYY"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
    <div class="col-span-2">
        <ul class="space-y-1.5">
            <div style="border-bottom: 1px solid black; margin-bottom: 10px;">
                <SidebarDivider title="Ticket Details" />
            </div>
            <div class="sm:col-span-9">
                <SidebarDivider title="Ticket Number" />
                <input
                    id="fname"
                    type="text"
                    class="py-4 px-3 pe-9 block w-64 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Ex. 123123"
                />
            </div>
            <div class="sm:col-span-9">
                <SidebarDivider title="Location" />
                <input
                    id="lname"
                    type="text"
                    class="py-4 px-3 pe-9 block w-64 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Ex. Post 1"
                />
            </div>
            <div class="sm:col-span-9">
                <SidebarDivider title="Apprehending Officer" />
                <input
                    id="Mname"
                    type="text"
                    class="py-4 px-3 pe-9 block w-64 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Ex. Agapito"
                />
            </div>

            <div class="sm:col-span-9">
                <div class="sm:col-span-9">
                    <div class="sm:flex flex-col">
                        <!-- Apply flex column layout -->
                        <!-- First column -->
                        <div class="sm:flex">
                            <!-- Wrap both columns in a row -->
                            <!-- First column -->
                            <!-- Second column -->
                            <div>
                                <SidebarDivider title="Date of Violation" />
                                <div class="sm:flex">
                                    <!-- Wrap birthdate input fields in a row -->
                                    <input
                                        id="birthdate-day"
                                        type="text"
                                        class="py-2 px-3 pe-11 block w-20 mr-1 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        placeholder="DD"
                                    />
                                    <input
                                        id="birthdate-month"
                                        type="text"
                                        class="py-2 px-3 pe-11 block w-20 mr-1 border-gray-200 shadow-sm -mt-px -ms-px sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        placeholder="MM"
                                    />
                                    <input
                                        id="birthdate-year"
                                        type="text"
                                        class="py-2 px-3 pe-11 block w-20 border-gray-200 shadow-sm -mt-px -ms-px last:rounded-b-lg sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        placeholder="YYYY"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
    <div class="col-span-2">
        <ul class="space-y-1.5">
            <div style="border-bottom: 1px solid black; margin-bottom: 10px;">
                <SidebarDivider title="Violations" />
            </div>
        </ul>
    </div>
</div>

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Matched Previous Offense</h1>
</header>
<!-- Table -->
<!-- Table Section -->
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
                                            Offense
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" class="px-6 py-3 text-start">
                                    <div class="flex items-center gap-x-2">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                                        >
                                            Ticket No.
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" class="px-6 py-3 text-start">
                                    <div class="flex items-center gap-x-2">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                                        >
                                            Identification
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" class="px-6 py-3 text-start">
                                    <div class="flex items-center gap-x-2">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                                        >
                                            Violator Name
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
                                            Officer
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
                                            Violation Date
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" class="px-6 py-3 text-end"></th>
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
                                                class="text-sm text-gray-600 dark:text-gray-400"
                                                >ACB-123</span
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
                                                >Marbert Cerda</span
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
                                                >Post 1</span
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
                                                >Romar Macaraeg</span
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
                                                >28 Dec, 12:12</span
                                            >
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

<header style="display: flex; align-items: center;">
    <h1 style="font-weight: bold;">Other Info</h1>
</header>

<div class="grid grid-cols-5 gap-4" style="padding: 10px;">
    <div>
        <ul>
            <li>John Doe</li>
            <li>Added by</li>
        </ul>
    </div>

    <div>
        <ul>
            <li>January 12, 2024</li>
            <li>Added at</li>
        </ul>
    </div>

    <div>
        <ul>
            <li>John Doe</li>
            <li>Updated by</li>
        </ul>
    </div>

    <div>
        <ul>
            <li>February 14,2024</li>
            <li>Updated at</li>
        </ul>
    </div>

    <div>
        <ul>
            <li>February 14,2024</li>
            <li>Paid at</li>
        </ul>
    </div>
</div>

<footer style="display: flex; justify-content: flex-end; padding: 10px;">
    <button
        style="margin-right: 10px; background-color: white; border: 1px solid #ccc; padding: 5px 10px; border-radius: 5px;"
        >Back</button
    >
    <button
        style="margin-right: 10px; background-color: blue; color: white; padding: 5px 10px; border: none; border-radius: 5px;"
        >Update</button
    >
    <button
        style="margin-right: 10px; background-color: #14B8A6; color: white; border: 1px solid #ccc; padding: 5px 10px; border-radius: 5px; "
        >Pay</button
    >
</footer>
