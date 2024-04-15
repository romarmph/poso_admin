<script lang="ts">
  import { getSupabaseContext } from "$lib/stores/clientStore";
  import { dataListStore } from "$lib/stores/dataListStore.js";
  import { onMount } from "svelte";
  import SupabaseApp from "./SupabaseApp.svelte";

  export let initData: any[] = [];
  export let table: string;
  export let uid: string | null = null;
  export let eq: App.Eq | null = null;
  export let select: string = "*";

  const { supabase } = getSupabaseContext();

  let store = dataListStore(supabase, table, initData, uid);

  onMount(async () => {
    if (initData.length === 0) {
      let { data, error } = await supabase.from(table).select(select);
      store = dataListStore(supabase, table, (data as []) ?? [], uid);
    }
  });

  $: $store.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else if (a.id < b.id) {
      return -1;
    } else {
      return 0;
    }
  });
</script>

<slot data={$store} />
