<script lang="ts">
    import Button from "$lib/components/Base/Button.svelte";
    import TextInput from "$lib/components/Forms/TextInput.svelte";
    import { createEventDispatcher, onMount } from "svelte";
    import { getEmployeeAccount } from "$lib/utils/employeeDetails";
    import UserStatus from "$lib/enums/UserStatus";
    import { dateProxy } from "sveltekit-superforms";

    export let initData: any | null;
    export let form;
    export let errors;

    const dispatch = createEventDispatcher();

    let user: Types.Account;

    onMount(async () => {
        if (Object.keys(initData).length) {
            user = await getEmployeeAccount(initData.info.user_id);
        }

        if (user) {
            $form = {
                ...initData.info,
                email: user.email,
                id: initData.info.id,
                user_id: user.id,
            };
        }
    });
    function handleClose() {
        dispatch("close");
    }
    const proxyDate = dateProxy(form, "birthdate", { format: "date" });
</script>

<div class="w-[500px]">
    <div class="h-[calc(100vh-150px)] overflow-auto pb-2">
        <label for="">Account Details</label>
        <hr class="my-2" />
        <div class="mb-3">
            <label for="">Email</label>
            <TextInput type="email" id="email" bind:value={$form.email} />
            {#if $errors.email}
                <span class="text-red-500 text-sm">
                    {$errors.email}
                </span>
            {/if}
        </div>
        <div class="mb-3">
            <label for="">Password</label>
            <TextInput
                type="password"
                id="password"
                bind:value={$form.password}
            />
            {#if $errors.password}
                <span class="text-red-500 text-sm">
                    {$errors.password}
                </span>
            {/if}
        </div>
        {#if $form.id}
            <input
                type="text"
                name="user_id"
                bind:value={$form.user_id}
                class="hidden"
            />
            <input type="text" class="hidden" name="id" bind:value={$form.id} />
            <div class="mb-6">
                <label for="">Status</label>
                <select
                    class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    name="status"
                    bind:value={$form.status}
                >
                    <option selected={true}>Open this select menu</option>
                    <option value={UserStatus.Active}>Active</option>
                    <option value={UserStatus.OnLeave}>On Leave</option>
                    <option value={UserStatus.Suspended}>Suspended</option>
                    <option value={UserStatus.Terminated}>Terminated</option>
                </select>
                {#if $errors.status}
                    <span class="text-red-500 text-sm">
                        {$errors.status}
                    </span>
                {/if}
            </div>
        {/if}
        <label for="">Personal Details</label>
        <hr class="my-2" />
        <div class="mb-3">
            <label for="">First Name</label>
            <TextInput
                type="text"
                id="first_name"
                bind:value={$form.first_name}
            />
            {#if $errors.first_name}
                <span class="text-red-500 text-sm">
                    {$errors.first_name}
                </span>
            {/if}
        </div>
        <div class="mb-3">
            <label for="">Last Name</label>
            <TextInput
                type="text"
                id="last_name"
                bind:value={$form.last_name}
            />
            {#if $errors.last_name}
                <span class="text-red-500 text-sm">
                    {$errors.last_name}
                </span>
            {/if}
        </div>
        <div class="mb-3">
            <label for="">Middle Name</label>
            <TextInput
                type="text"
                id="middle_name"
                bind:value={$form.middle_name}
            />
            {#if $errors.middle_name}
                <span class="text-red-500 text-sm">
                    {$errors.middle_name}
                </span>
            {/if}
        </div>
        <div class="mb-3">
            <label for="">Suffix</label>
            <TextInput type="text" id="suffix" bind:value={$form.suffix} />
        </div>
        <div class="mb-3">
            <label for="">BirthDate</label>
            <TextInput type="date" id="birthdate" bind:value={$proxyDate} />
            {#if $errors.birthdate}
                <span class="text-red-500 text-sm">
                    {$errors.birthdate}
                </span>
            {/if}
        </div>
        <h3 class="my-3">Employee No.</h3>
        <TextInput
            type="text"
            id="employee_no"
            bind:value={$form.employee_no}
        />
        {#if $errors.employee_no}
            <span class="text-red-500 text-sm">
                {$errors.employee_no}
            </span>
        {/if}
    </div>
    <div class="flex justify-stretch items-center gap-4 h-fit">
        <Button
            type="button"
            style="soft"
            color="gray"
            fullWidth={true}
            on:click={handleClose}>Close</Button
        >
        <Button fullWidth={true} type="submit">Save</Button>
    </div>
</div>
