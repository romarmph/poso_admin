<script lang="ts">
  import { setSupabaseContext } from "$lib/stores/clientStore";

  export let supabase;
  export let session;

  setSupabaseContext({ supabase, session });
</script>

<slot />
