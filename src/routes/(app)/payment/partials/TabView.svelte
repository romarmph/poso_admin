<script lang="ts">
  import { Tab, TabView } from "svelte-tab-view";
  import { onMount } from "svelte";

  let tabs: Tab[] = [
    { title: "Tab 1", content: "Content 1" },
    { title: "Tab 2", content: "Content 2" },
    { title: "Tab 3", content: "Content 3" },
  ];

  let tabView: TabView;

  onMount(() => {
    tabView = new TabView({
      target: document.querySelector(".tab-view"),
      props: { tabs },
    });
  });
</script>
