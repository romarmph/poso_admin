<script lang="ts">
  import { Trash, Pencil, Eye, Banknote } from "lucide-svelte";

  export let status: string;
  export let fireView: () => void;
  export let firePay: () => void = () => {};
</script>

<div class="flex gap-2 py-1 px-2">
  <button
    class={`${status === "unpaid" ? "bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600" : "bg-orange-500 hover:bg-orange-400 active:bg-orange-600"} text-xs text-white text-center rounded-md py-1 px-2 aspect-square`}
    on:click={firePay}
  >
    <Banknote size="16" />
  </button>
  <button
    class="bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-xs text-white text-center rounded-md py-1 px-2 aspect-square"
    on:click={fireView}
  >
    <Eye size="16" />
  </button>
</div>
