<script>
  import primary from "$lib/assets/images/brand/1x/primary.png";
  import Button from "$lib/components/Base/Button.svelte";
  import TextInput from "$lib/components/Forms/TextInput.svelte";
  import Label from "$lib/components/Forms/Label.svelte";
</script>

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

          <!-- Form -->
          <form>
            <!-- Form Group -->
            <div
              class="block mb-2 text-xs font-medium text-gray-500 dark:text-white"
            >
              <Label id="employeeId">Employee ID</Label>

              <div class="relative">
                <TextInput
                  id="input-label"
                  class="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Type your employee ID here"
                  required
                />

                <div
                  class="absolute inset-y-0 hidden pointer-events-none end-0 pe-3"
                >
                  <svg
                    class="text-red-500 size-5"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                    />
                  </svg>
                </div>
              </div>
              <p class="hidden mt-2 text-xs text-red-600" id="employeeId-error">
                Please include your employee ID so we can get back to you
              </p>
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

                  <div
                    class="absolute inset-y-0 hidden pointer-events-none end-0 pe-3"
                  >
                    <svg
                      class="text-red-500 size-5"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                      />
                    </svg>
                  </div>
                </div>
                <p class="hidden mt-2 text-xs text-red-600" id="password-error">
                  8+ characters required
                </p>
              </div>
              <!-- End Form Group -->

              <!-- Log in Button -->
              <div class="text-center mt-4">
                <Button type="submit">Log In</Button>
              </div>
            </div>
          </form>
          <!-- End Form -->
        </div>
      </div>
    </div>
  </div>
</main>
