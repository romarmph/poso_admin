<script lang="ts">
  import type { TabView, Tab } from "./Tab";

  export let tabViews: TabView[];
  export let tabs: Tab[];

  const activeClass =
    "border-blue-600 text-blue-600 font-semibold bg-blue-50 rounded-md";

  let currentTab = 0;
</script>

<div class="border-b border-gray-200 dark:border-neutral-700">
  <nav class="flex space-x-1" aria-label="Tabs">
    {#each tabs as tab}
      <button
        type="button"
        class={`${currentTab === tab.index ? activeClass : "text-gray-500"} py-4 px-3 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap  hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active`}
        id="tabs-with-icons-item-1"
        data-hs-tab="#tabs-with-icons-1"
        aria-controls="tabs-with-icons-1"
        role="tab"
        on:click={() => (currentTab = tab.index)}
      >
        {#if tab.icon}
          <svelte:component this={tab.icon} {...tab.iconProps} />
        {/if}
        <span>{tab.title}</span>
      </button>
    {/each}
  </nav>
</div>

<div class="mt-3">
  {#each tabViews as view}
    {#if currentTab === view.index}
      <svelte:component this={view.view} {...view.props} />
    {/if}
  {/each}
</div>
