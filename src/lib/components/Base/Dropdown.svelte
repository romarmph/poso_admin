<script lang="ts">
    export let name: string = "";
    import { Pencil, Trash2, Eye } from "lucide-svelte";
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
    import RadioButton from "../Forms/RadioButton.svelte";
    import PasswordInput from "../Forms/PasswordInput.svelte";
    import { Button } from "$lib/Components";

    export let over: string = "";
    export let del: string = "";
</script>

<div class="hs-dropdown relative inline-block [--placement:bottom-right]">
    <button
        id="hs-as-table-table-export-dropdown"
        type="button"
        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
        <slot />
        {name}
    </button>
    <div
        class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
        aria-labelledby="hs-as-table-table-export-dropdown"
    >
        <!-- Dropdown Buttons -->
        <div class="py-2 first:pt-0 last:pb-0">
            <span
                class="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-gray-600"
            >
                Options
            </span>
            <button
                class="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#{over}"
            >
                <Pencil />
                Edit
            </button>
            <button
                class="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
                <Eye />
                View
            </button>
            <button
                class="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#{del}"
            >
                <Trash2 />
                Delete
            </button>
        </div>
    </div>
</div>
<!-- Edit Enforcer Modal -->
<Modal modalId="hs-edit-enforcer-modal">
    <ModalHeader>Update Enforcer</ModalHeader>

    <ModalBody>
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
                placeholder="Type enforcer last name here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Employee No.</Label>

            <TextInput
                id="input-Label"
                placeholder="Type enforcer employee number here"
            />
        </div>
    </ModalBody>

    <ModalFooter>
        <Button
            data-hs-overlay="#hs-edit-enforcer-modal"
            style="soft"
            color="gray">Cancel</Button
        >
        <Button>Save</Button>
    </ModalFooter>
</Modal>

<!--Delete Enforcer Modal -->
<Modal modalId="hs-del-enforcer-modal">
    <ModalHeader></ModalHeader>

    <ModalBody>
        <div style="font-size: 35px; text-align:center">Are you sure</div>
        <div style="font-size: 20px; text-align:center">Delete this user</div>
    </ModalBody>

    <ModalFooter>
        <Button
            data-hs-overlay="#hs-del-enforcer-modal"
            style="soft"
            color="gray">Cancel</Button
        >
        <Button color="red">Delete</Button>
    </ModalFooter>
</Modal>

<!-- Edit Violation Modal -->
<Modal modalId="hs-edit-violation-modal">
    <ModalHeader>Update Violation</ModalHeader>

    <ModalBody>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Violation Name</Label>

            <TextInput id="input-Label" placeholder="Type post name here" />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Amount Fine</Label>

            <TextInput id="input-Label" placeholder="Type location here" />
        </div>

        <RadioButton />
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

<!-- Delete Violation Modal -->
<Modal modalId="hs-del-violation-modal">
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

<!-- Update Admin Modal -->
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
<!-- Delete Admin Modal -->
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

<!-- Update Vehicle Type modal -->
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
<!-- Delete Vehicle Type Modal -->
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

<!-- Update Traffic Post modal -->
<Modal modalId="hs-edit-TPost-modal">
    <ModalHeader>Update Traffic Post</ModalHeader>

    <ModalBody>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Post Name</Label>

            <TextInput id="input-Label" placeholder="Type post name here" />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Location</Label>

            <TextInput id="input-Label" placeholder="Type location here" />
        </div>

        <RadioButton />
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

<!-- Edit Tickets Modal -->
<Modal modalId="hs-edit-tickets-modal">
    <ModalHeader>Update Ticket</ModalHeader>

    <ModalBody>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Offense</Label>

            <TextInput id="input-Label" placeholder="Type the offense here" />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Ticket No.</Label>

            <TextInput id="input-Label" placeholder="Type ticket number here" />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Identification</Label>

            <TextInput
                id="input-Label"
                placeholder="Type the identification here"
            />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Violator Name</Label>

            <TextInput id="input-Label" placeholder="Type violator name here" />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Locations</Label>

            <TextInput id="input-Label" placeholder="Type the location here" />
        </div>

        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Officer</Label>

            <TextInput id="input-Label" placeholder="Type the officer here" />
        </div>
        <div class="p-4 overflow-y-auto">
            <Label id="input-label">Violation Date</Label>

            <TextInput
                id="input-Label"
                placeholder="Type violation date here"
            />
        </div>
    </ModalBody>

    <ModalFooter></ModalFooter>
</Modal>
<!-- Delete Tickets Modal -->
<Modal modalId="hs-del-tickets-modal">
    <ModalHeader>Delete</ModalHeader>

    <ModalBody>
        <div style="font-size: 20px; text-align:center">
            Are you sure you want to delete this ticket?
        </div>
    </ModalBody>

    <ModalFooter>
        <Button style="soft" color="gray">Cancel</Button>
        <Button color="red">Delete</Button>
    </ModalFooter>
</Modal>
