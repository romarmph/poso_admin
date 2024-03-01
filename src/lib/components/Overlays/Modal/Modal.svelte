<script lang="ts">
  import { setContext } from "svelte";

  export let modalId: string;
  setContext("modalId", modalId);


</script>

<div
  id={modalId}
  class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"
  {...$$restProps}
  
>
  <div
    class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"
  >
    <div
      class="w-full flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
    >
      <slot />
    </div>
  </div>
</div>
