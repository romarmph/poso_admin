<script>
  import "../app.css";
  import { afterNavigate } from "$app/navigation";
  import SupabaseApp from "$lib/components/Supabase/SupabaseApp.svelte";
  import { setContext } from "svelte";

  afterNavigate(() => {
    window.HSStaticMethods.autoInit();
  });

  export let data;

  const { supabase, session, user } = data;
  setContext("user", user);
</script>

<SupabaseApp {supabase} {session}>
  <slot />
</SupabaseApp>
