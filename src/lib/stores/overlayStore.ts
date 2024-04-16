
import { writable } from "svelte/store";
import type { ComponentType } from "svelte";

interface OverlayStore {
  title: string;
  component: ComponentType;
  props?: Record<string, any>;
}

function createOverlayStore() {
  const { subscribe, set } = writable<OverlayStore | null>(null);

  const open: (params: OverlayStore) => Promise<void> = async ({ title, component, props = {} }) => {
    set({ title, component, props });
  };

  return {
    subscribe,
    open,
    close: async () => {
      set(null);
    }
  };
}

export const overlayStore = createOverlayStore();


