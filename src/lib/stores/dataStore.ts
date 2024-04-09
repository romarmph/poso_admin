import { RealtimeChannel, type SupabaseClient } from "@supabase/supabase-js";
import { writable } from "svelte/store";


interface DataStore<T> {
  subscribe: (cb: (value: T) => void) => void | (() => void);
  table: string;
  event: string | null;
}

/**
 * 
 * @param supabase SupabaseClient isntance
 * @param table name where the data belongs to
 * @param initialData to listen at update and delete events
 * @returns a store with realtime updates with the table name and event type
 */
export function dataStore<T extends Types.Data>(
  supabase: SupabaseClient,
  table: string,
  initialData: T,
): DataStore<T> {
  let event: string | null = null;
  let channel: RealtimeChannel;

  if (!globalThis.window) {
    const { subscribe } = writable(initialData);
    return {
      subscribe,
      table,
      event: null,
    };
  }

  if (!supabase) {
    console.warn("Supabase client not found.");
    const { subscribe } = writable(initialData);
    return {
      subscribe,
      table,
      event: null,
    };
  }

  const { subscribe } = writable(initialData, (set, update) => {
    set(initialData);
    channel = supabase
      .channel(`${table}-changes`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: table,

        },
        (payload) => {
          if (payload.new.id === initialData.id) {
            set(payload.new as T);
          }

          event = payload.eventType;
        }
      )
      .on(
        "postgres_changes",
        {
          event: "DELETE",
          schema: "public",
          table: table,

        },
        (payload) => {
          if (payload.old.id === initialData.id) {
            update((current) => {
              return { id: payload.old.id } as T
            });
          }

          event = payload.eventType;
        }
      )
      .subscribe();

    return () => channel.unsubscribe();
  });

  return {
    subscribe,
    table,
    event,
  };
}
