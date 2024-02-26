<script>
    import { ArrowLeft } from "lucide-svelte";
    import Colheader from "$lib/components/tickets/columnHeader/Colheader.svelte";
    import Grid from "$lib/components/tickets/Grid/Grid.svelte";
    import Tables from "$lib/components/tickets/tables/tables.svelte";
    import Input from "$lib/components/tickets/input/input.svelte";
    import Smallbox from "$lib/components/tickets/input/Smallbox.svelte";
    import Button from "$lib/components/tickets/Button/Button.svelte";
</script>

<header style="display: flex; align-items: center;">
    <button><ArrowLeft style="margin-right: 10px;" /></button>
    <h1 style="font-weight: bold;">New Ticket</h1>
</header>

<!-- Form -->
<Grid columns={3} gap={4}>
    <div>
        <ul class="space-y-1.5">
            <div style="border-bottom: 1px solid black; margin-bottom: 10px;">
                <Colheader title="Violator" />
            </div>
            <div class="sm:col-span-9">
                <Input
                    headtitle="Last Name"
                    placeholder="ex. Valdez"
                    id="lname"
                    type="text"
                    py={4}
                    px={3}
                    pe={9}
                    w={64}
                />
            </div>
            <div class="sm:col-span-9">
                <Input
                    headtitle="First Name"
                    placeholder="ex. Armando"
                    id="fname"
                    type="text"
                    py={4}
                    px={3}
                    pe={9}
                    w={64}
                />
            </div>
            <div class="sm:col-span-9">
                <Input
                    headtitle="Middle Name"
                    placeholder="ex. Sampaga"
                    id="mname"
                    type="text"
                    py={4}
                    px={3}
                    pe={9}
                    w={64}
                />
            </div>
            <div class="sm:col-span-9">
                <div class="sm:col-span-9">
                    <div class="sm:flex flex-col">
                        <div class="sm:flex">
                            <div>
                                <Colheader title="Violator" />
                                <Smallbox
                                    placeholder="ex. Jr "
                                    id="suffix"
                                    type="text"
                                    py={2}
                                    px={3}
                                    pe={15}
                                    w={24}
                                    mr={2}
                                />
                            </div>
                            <div>
                                <Colheader title="Violator" />
                                <div class="sm:flex">
                                    <Smallbox
                                        placeholder="dd"
                                        id="day"
                                        type="text"
                                        py={2}
                                        px={3}
                                        pe={15}
                                        w={24}
                                        mr={2}
                                    />
                                    <Smallbox
                                        placeholder="mm"
                                        id="month"
                                        type="text"
                                        py={2}
                                        px={3}
                                        pe={15}
                                        w={24}
                                        mr={2}
                                    />
                                    <Smallbox
                                        placeholder="yyyy"
                                        id="year"
                                        type="text"
                                        py={2}
                                        px={3}
                                        pe={15}
                                        w={24}
                                        mr={2}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
    <div>
        <ul class="space-y-1.5">
            <div style="border-bottom: 1px solid black; margin-bottom: 10px;">
                <Colheader title="Ticket Details" />
            </div>
            <div class="sm:col-span-9">
                <Input
                    headtitle="Ticket Number"
                    placeholder="ex. 123123"
                    id="lname"
                    type="text"
                    py={4}
                    px={3}
                    pe={9}
                    w={64}
                />
            </div>
            <div class="sm:col-span-9">
                <Input
                    headtitle="Location"
                    placeholder="ex. Post 1"
                    id="fname"
                    type="text"
                    py={4}
                    px={3}
                    pe={9}
                    w={64}
                />
            </div>
            <div class="sm:col-span-9">
                <Input
                    headtitle="Apprehending Officer"
                    placeholder="ex. Agapinto"
                    id="mname"
                    type="text"
                    py={4}
                    px={3}
                    pe={9}
                    w={64}
                />
            </div>
            <div class="sm:col-span-9">
                <div class="sm:col-span-9">
                    <div class="sm:flex flex-col">
                        <div class="sm:flex">
                            <div>
                                <Colheader title="Violator" />
                                <div class="sm:flex">
                                    <Smallbox
                                        placeholder="dd"
                                        id="day"
                                        type="text"
                                        py={2}
                                        px={3}
                                        pe={15}
                                        w={24}
                                        mr={2}
                                    />
                                    <Smallbox
                                        placeholder="mm"
                                        id="month"
                                        type="text"
                                        py={2}
                                        px={3}
                                        pe={15}
                                        w={24}
                                        mr={2}
                                    />
                                    <Smallbox
                                        placeholder="yyyy"
                                        id="year"
                                        type="text"
                                        py={2}
                                        px={3}
                                        pe={15}
                                        w={24}
                                        mr={2}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
    <div>
        <ul class="space-y-1.5">
            <div style="border-bottom: 1px solid black; margin-bottom: 10px;">
                <Colheader title="Violations" />
            </div>
        </ul>
    </div>
</Grid>

<header style="display: flex; align-items: center; margin-top: 50px;">
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

<Grid columns={5} gap={4}>
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
</Grid>

<footer style="display: flex; justify-content: flex-end; padding: 10px;">
    <Button buttonname="Cancel" marginright={10} bgcolor="white" />
    <Button buttonname="Update" marginright={10} bgcolor="blue" color="white" />
    <Button
        buttonname="Pay"
        marginright={10}
        bgcolor="mediumseagreen"
        color="white"
    />
</footer>
<!-- mediumseagreen -->
