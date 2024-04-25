
import { writable } from "svelte/store";

interface OverlayStore<T> {
  props?: T,
  id: string;
}

function createOverlayStore<T>() {
  const { subscribe, set } = writable<OverlayStore<T> | null>(null);

  const open: (params: OverlayStore<T>) => void = ({ props, id }) => {
    set({ props, id });
  };

  return {
    subscribe,
    open,
    close: () => {
      set(null);
    }
  };
}

export const overlayStore = createOverlayStore();


