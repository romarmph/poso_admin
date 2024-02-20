<script>
  import "../app.css";
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import Header from "$lib/components/Header.svelte";
  import { afterNavigate } from "$app/navigation";

  afterNavigate(() => {
    // @ts-ignore
    window.HSStaticMethods.autoInit();
  });
</script>

<div class="bg-gray-50 dark:bg-slate-900">

  <Header />

  <div
    class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex items-center py-4">
      <button type="button" class="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
        <span class="sr-only">Toggle Navigation</span>
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
      </button>

    </div>
  </div>

  <Sidebar />
  <div class="w-full pt-4 px-4 sm:px-6 md:px-8 lg:ps-72">
    <slot />
  </div>

</div>
