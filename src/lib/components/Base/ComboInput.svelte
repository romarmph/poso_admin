<script lang="ts">
  export let label: string;
  export let id: string;
  export let placeholder: string;
  export let value: any = undefined;
  export let type: "number" | "text";
</script>

<div
  class="flex border-2 border-gray-100 rounded-lg overflow-hidden items-center group hover:bg-gray-50 hover:border-blue-400 focus-within:border-blue-500 focus-within:shadow-md focus-within:shadow-blue-100"
>
  <label for={id} class="p-3 text-gray-500">{label}</label>
  {#if type === "text"}
    <input
      type="text"
      {id}
      {placeholder}
      name={id}
      class="border-none p-3 flex-1 outline-none active:border-none focus:ring-white text-end bg-transparent"
      {...$$props}
      bind:value
    />
  {:else}
    <input
      type="number"
      {id}
      {placeholder}
      name={id}
      class="border-none p-3 flex-1 outline-none active:border-none focus:ring-white text-end bg-transparent"
      {...$$props}
      bind:value
    />
  {/if}
</div>
