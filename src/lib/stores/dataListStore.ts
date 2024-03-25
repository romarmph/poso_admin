// @ts-nocheck

import { RealtimeChannel, type SupabaseClient } from "@supabase/supabase-js";
import { writable } from "svelte/store";

interface DataListStore<T> {
  subscribe: (cb: (value: T | []) => void) => void | (() => void);
  table: string;
}

export function dataListStore<T>(
  supabase: SupabaseClient,
  table: string,
  initialData: T[] | null = null,
  page: number = 1,
  limit: number = 10
): DataListStore<T[]> {
  let channel: RealtimeChannel;

  // Fallback for SSR
  if (!globalThis.window) {
    const { subscribe } = writable(initialData ?? []);
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

  const { subscribe } = writable(initialData, (set) => {
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
          let updatedData = [];

          if (payload.eventType === "INSERT") {
            updatedData = [...initialData, payload.new as T];
          }

          if (payload.eventType === "UPDATE") {
            const filteredRows = initialData.filter(
              (row) => row.id !== payload.new.id
            );
            updatedData = [...filteredRows, payload.new as T];
          }

          if (payload.eventType === "DELETE") {
            updatedData = initialData?.filter(
              (row) => row.id !== payload.new.id
            );
          }

          updatedData.sort((a, b) => {
            if (a.id > b.id) {
              return 1;
            } else if (a.id < b.id) {
              return -1;
            } else {
              return 0;
            }
          });

          set(updatedData);
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
