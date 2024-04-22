<script lang="ts">
  import { getSupabaseContext } from "$lib/stores/clientStore";
  import { dataListStore } from "$lib/stores/dataListStore.js";

  export let initData: any[];
  export let table: string;
  export let uid: string | null = null;

  const { supabase } = getSupabaseContext();

  let store = dataListStore(supabase, table, initData, uid);

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
