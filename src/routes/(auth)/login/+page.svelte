<script>
  import primary from "$lib/assets/images/brand/1x/primary.png";
</script>

<main class="h-screen" style="background-color: #F3F6F4;">
  <div class="flex items-center h-full py-16 bg-gray-100 dark:bg-slate-900">
    <div class="w-full max-w-md p-6 mx-auto">
      <div
        class="bg-white border border-gray-200 shadow-sm mt-7 rounded-xl dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-4 sm:p-7">
          <div class="text-center">
            <img src={primary} alt="" class="mx-auto mb-4 w-28" />

            <h1 class="block text-2xl font-bold text-blue-600 dark:text-white">
              Public Order and Safety Office
            </h1>
          </div>

          <h2 class="my-4 text-lg font-bold text-gray-500">Sign In</h2>

          <div class="mt-5">
            <!-- Form -->
            <form>
              <div class="grid gap-y-4">
                <!-- Form Group -->
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-xs font-medium text-gray-500 dark:text-white"
                    >Employee ID</label
                  >
                  <div class="relative">
                    <input
                      type="text"
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
                  <p class="hidden mt-2 text-xs text-red-600" id="email-error">
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label
                      for="password"
                      class="block mb-2 text-xs font-medium text-gray-500 dark:text-white"
                      >Password</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      class="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      required
                      aria-describedby="password-error"
                      placeholder="Type your password here"
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
                  <p
                    class="hidden mt-2 text-xs text-red-600"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                <!-- End Form Group -->

                <!-- Sign in Button -->
                <div class="flex justify-center">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-24 w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Sign in
                  </button>
                </div>
                <!-- End Sign in Button -->
              </div>
            </form>
            <!-- End Form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
