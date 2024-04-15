import type { Session, SupabaseClient } from "@supabase/supabase-js";
import { getContext, setContext } from "svelte";

export interface SupabaseAppContext {
  supabase: SupabaseClient;
  session: Session | null;
}

export const contextkey = "supabase";

export function setSupabaseContext(app: SupabaseAppContext) {
  setContext(contextkey, app);
}

export function getSupabaseContext(): SupabaseAppContext {
  return getContext(contextkey);
}