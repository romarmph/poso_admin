<script lang="ts">
  import { getSupabaseContext } from "$lib/stores/clientStore";
  import { dataListStore } from "$lib/stores/dataListStore.js";

  export let initData: any[];
  export let table: string;
  export let uid: string | null = null;

  const { supabase } = getSupabaseContext();

  let store = dataListStore(supabase, table, initData, uid);
</script>

<slot data={$store} />
