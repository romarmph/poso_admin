<script>
  import "../app.css";
  import { afterNavigate } from "$app/navigation";
  import SupabaseApp from "$lib/components/Supabase/SupabaseApp.svelte";

  afterNavigate(() => {
    window.HSStaticMethods.autoInit();
  });

  export let data;

  const { supabase, session } = data;
</script>

<SupabaseApp {supabase} {session}>
  <slot />
</SupabaseApp>
