<script lang="ts">
  import primary from "$lib/assets/images/brand/1x/primary.png";

  import { Button, TextInput, Label } from "$lib/Components";
  import Spinner from "$lib/components/Base/Spinner.svelte";
  import { enhance } from "$app/forms";
  import Alerts from "$lib/components/Base/Alerts.svelte";
  export let form;

  let isLoading: boolean = false;

  $: if (form && !form?.success) {
    isLoading = false;
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<main class="h-screen" style="background-color: #F3F6F4;">
  <div class="flex items-center h-full py-16 bg-gray-100 dark:bg-slate-900">
    <div class="w-full max-w-md p-1 mx-auto">
      <div
        class="bg-white border border-gray-200 shadow-sm mt-1 rounded-xl dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <img src={primary} alt="" class="mx-auto mb-4 w-28" />

            <h1 class="block text-2xl font-bold text-blue-600 dark:text-white">
              Public Order and Safety Office
            </h1>
          </div>

          <header class="my-4 text-2x8 font-bold text-gray-500 text-center">
            LOGIN
          </header>

          <form
            method="POST"
            use:enhance
            on:submit={() => (isLoading = !isLoading)}
          >
            {#if form && !form?.success}
              <Alerts type="danger">
                {form?.message}
              </Alerts>
            {/if}
            <div
              class="block my-2 text-xs font-medium text-gray-500 dark:text-white"
            >
              <Label id="email">Employee ID</Label>
              <div class="relative">
                <TextInput
                  id="email"
                  class="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Type your employee ID here"
                  required
                  type="email"
                />
              </div>
            </div>

            <div>
              <div
                class="block mb-2 text-xs font-medium text-gray-500 dark:text-white mt-4"
              >
                <Label id="password">Password</Label>
                <div class="relative">
                  <TextInput
                    type="password"
                    id="password"
                    name="password"
                    class="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    aria-describedby="password-error"
                    placeholder="Type your password here"
                    required
                  />
                </div>
              </div>

              <div class="w-full my-4">
                <Button type="submit" fullWidth={true} disabled={isLoading}>
                  {#if isLoading}
                    <Spinner />
                  {:else}
                    Login
                  {/if}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</main>
