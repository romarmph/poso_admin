<script lang="ts">
  import { onMount } from "svelte";
  import { dataListStore } from "$lib/stores/dataListStore";
  import { getSupabaseContext } from "$lib/stores/supabase_app";

  export let initData: any[] = [];
  export let table: string;

  const { supabase } = getSupabaseContext();
  let store = dataListStore(supabase, table, initData);

  onMount(() => {
    console.log($store);
  });
</script>

<slot data={$store} />
