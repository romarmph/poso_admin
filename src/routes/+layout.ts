import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public";
import type { LayoutLoad } from "./$types";
import { createBrowserClient, isBrowser, parse } from "@supabase/ssr";

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  depends("supabase:auth");

  const supabase = createBrowserClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      global: {
        fetch,
      },
      cookies: {
        get(key) {
          if (!isBrowser()) {
            return JSON.stringify(data.session);
          }

          const cookie = parse(document.cookie);
          return cookie[key];
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    const { data } = await supabase.from("employees").select().eq("user_id", session.user.id);
    if (data) {
      return {
        supabase,
        session,
        user: data![0]
      }
    }

  }

  return { supabase, session };
};
