<script>
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import { AlignJustify } from "lucide-svelte";
  import { Header } from "$lib/Components";
  import { onMount } from "svelte";
  import Overlay from "$lib/components/Overlays/Overlay.svelte";

  onMount(() => {
    new Overlay({
      target: document.body,
    });
  });
</script>

<Header />

<div
  class="sticky inset-x-0 top-0 z-20 px-4 bg-white border-y sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700"
>
  <div class="flex items-center py-4">
    <button
      type="button"
      class="text-gray-500 hover:text-gray-600"
      data-hs-overlay="#application-sidebar"
      aria-controls="application-sidebar"
      aria-label="Toggle navigation"
    >
      <span class="sr-only">Toggle Navigation</span>
      <AlignJustify />
    </button>
  </div>
</div>

<Sidebar />
<div class="w-full px-4 py-6 sm:px-6 md:px-8 lg:ps-72">
  <div class="p-4 bg-white rounded-lg">
    <slot />
  </div>
</div>
