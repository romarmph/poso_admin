import {
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_SERVICE_ROLE_KEY,
} from "$env/static/public";
import { createServerClient } from "@supabase/ssr";
import { type Handle, redirect, } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { routes } from "$lib/constants/protected_routes";

const supabase: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_SERVICE_ROLE_KEY,
    {
      cookies: {
        get: (key) => event.cookies.get(key),
        set: (key, value, options) => {
          event.cookies.set(key, value, { ...options, path: "/" });
        },
        remove: (key, options) => {
          event.cookies.delete(key, { ...options, path: "/" });
        },
      },
    }
  );

  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession();
    return session;
  };

  event.locals.getCurrentUser = async () => {
    const session = await event.locals.getSession();
    if (session) {
      const {
        data
      } = await event.locals.supabase.from("employees").select().eq("user_id", session.user.id);

      if (!data) {
        return null;
      }

      return data[0]
    }

    return null;
  }


  return resolve(event, {
    filterSerializedResponseHeaders(name: string) {
      return name === "content-range";
    },
  });
};

const authorization: Handle = async ({ event, resolve }) => {
  const session = await event.locals.getSession();

  if (event.url.pathname === "/" && !session) {
    throw redirect(303, "/login");
  }

  if (routes.find((route) => event.url.pathname.startsWith(route))) {
    if (!session) {
      throw redirect(303, "/login");
    }
  }

  const response = resolve(event);


  return response;
};

export const handle: Handle = sequence(supabase, authorization);
