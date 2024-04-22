import { RealtimeChannel, type SupabaseClient } from '@supabase/supabase-js';
import { writable } from 'svelte/store';

interface DataListStore<T> {
  subscribe: (cb: (value: T | []) => void) => void | (() => void);
  table: string;
}

/**
 * 
 * @param supabase SupabaseClient instance
 * @param table name to listen realtime update
 * @param initialData to start with on SSR
 * @param uid of the related user
 * @param fk_name foreign key column, defaults to "user_id"
 * @returns a store with realtime updates on the table
 */
export function dataListStore<T extends Types.Data>(
  supabase: SupabaseClient,
  table: string,
  initialData: T[] = [],
  uid: string | null = null,
  fk_name: string = 'user_id'
): DataListStore<T[]> {
  let channel: RealtimeChannel;

  if (!globalThis.window) {
    const { subscribe } = writable(initialData);
    return {
      subscribe,
      table
    };
  }

  if (!supabase) {
    console.warn('Supabase is not initialized.');
    const { subscribe } = writable([]);
    return {
      subscribe,
      table
    };
  }

  const { subscribe } = writable(initialData, (set, update) => {
    set(initialData);
    channel = supabase
      .channel(`${table}-changes`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: table
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            if (payload.new[fk_name] !== uid && uid) {
              return;
            }

            update((current) => {
              return [...current, payload.new as T];
            });
          }

          if (payload.eventType === 'UPDATE') {
            if (payload.new[fk_name] !== uid && uid) {
              return;
            }

            console.log(payload.new.deleted_by)

            update((current) => {
              const filteredRows = current.filter((row) => row.id !== payload.new.id);
              if (payload.new.deleted_by != null) {
                return [...filteredRows];
              }
              console.log("shit")
              return [...filteredRows, payload.new as T];
            });
          }

          if (payload.eventType === 'DELETE') {
            update((current) => {
              const filteredRows = current.filter((row) => row.id !== payload.old.id);
              return [...filteredRows];
            });
          }
        }
      ).subscribe();
    return () => channel.unsubscribe();
  });

  return {
    subscribe,
    table
  };
}
