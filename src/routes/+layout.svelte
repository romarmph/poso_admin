<script>
  import "../app.css";
  import { afterNavigate } from "$app/navigation";
  import SupabaseApp from "$lib/components/Supabase/SupabaseApp.svelte";
  import Overlay from "$lib/components/Overlays/Overlay.svelte";
  import { onMount } from "svelte";

  afterNavigate(() => {
    window.HSStaticMethods.autoInit();
  });

  export let data;

  const { supabase, session } = data;

  onMount(() => {
    new Overlay({
      target: document.body,
    });
  });
</script>

<SupabaseApp {supabase} {session}>
  <slot />
</SupabaseApp>
