import type { Session, SupabaseClient } from "@supabase/supabase-js";
import { writable } from "svelte/store";

export function userStore(supabase: SupabaseClient, session: Session | null = null) {

  if (!globalThis.window) {
    const { subscribe } = writable(session);
    return {
      subscribe,
    };
  }

  if (!supabase) {
    console.warn(
      "Supabase client not found."
    );
    const { subscribe } = writable(null);
    return {
      subscribe,
    };
  }

  const { subscribe } = writable(session ?? null, (set) => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => { });

    return () => data.subscription.unsubscribe();
  });

  return {
    subscribe,
  };
}
