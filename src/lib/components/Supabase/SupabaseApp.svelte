<script lang="ts">
  import { setSupabaseContext } from "$lib/stores/supabase_app";

  export let supabase;
  export let session;

  setSupabaseContext({ supabase, session });
</script>

<slot />
