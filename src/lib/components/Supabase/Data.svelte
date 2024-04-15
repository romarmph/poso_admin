<script lang="ts">
  import { getSupabaseContext } from "$lib/stores/clientStore.js";
  import { dataListStore } from "$lib/stores/dataListStore.js";
  import { dataStore } from "$lib/stores/dataStore.js";
  import { onMount } from "svelte";

  // export let initData: any | null = null;
  export let id: string | null = null;
  export let table: string;

  const { supabase } = getSupabaseContext();

  let store = null;

  onMount(async () => {
    let data = await supabase.from(table).select().eq("id", id);
    if (data.data) {
      store = dataStore(supabase, table, data.data[0]);
    }
  });
</script>
