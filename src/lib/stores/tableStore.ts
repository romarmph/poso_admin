// @ts-nocheck

import { RealtimeChannel, type SupabaseClient } from "@supabase/supabase-js";
import { writable } from "svelte/store";

interface TableStore<T> {
  subscribe: (cb: (value: T | []) => void) => void | (() => void);
  table: string;
}

export function tableStore<T>(
  supabase: SupabaseClient,
  table: string,
  startWith: T[] | null = []
): TableStore<T[]> {
  let channel: RealtimeChannel;

  // Fallback for SSR
  if (!globalThis.window) {
    const { subscribe } = writable(startWith);
    return {
      subscribe,
      table,
    };
  }

  // Fallback for missing SDK
  if (!supabase) {
    console.warn("Supabase is not initialized.");
    const { subscribe } = writable([]);
    return {
      subscribe,
      table,
    };
  }

  const { subscribe } = writable(startWith, (set) => {
    channel = supabase
      .channel(`${table}-changes`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: table,
        },
        (payload) => {
          if (payload.eventType === "UPDATE") {
            // @ts-ignore
            const oldRows = startWith.filter(
              (row) => row.id !== payload.new.id
            );

            const newRows = [...oldRows, payload.new as T];

            newRows.sort((a, b) => {
              if (a.id > b.id) {
                return 1;
              } else if (a.id < b.id) {
                return -1;
              } else {
                return 0;
              }
            });

            set(newRows);
          }
        }
      )
      .subscribe();

    return () => channel.unsubscribe();
  });

  return {
    subscribe,
    table,
  };
}
