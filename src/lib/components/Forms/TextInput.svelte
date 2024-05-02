<script lang="ts">
  export let id: string;
  export let placeholder: string = "";
  export let color: string = "blue";
  export let classNames: string = "";
  export let width: string = "full";
  export let value: any = "";
  export let callback: () => void = () => {};
  let timer: string | number | NodeJS.Timeout | undefined;
  const debounce = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, 1000);
  };
</script>

<input
  {id}
  name={id}
  {placeholder}
  bind:value
  class="py-3 px-4 block w-{width} border-gray-200 rounded-lg focus:border-{color}-500 focus:ring-{color}-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 {classNames}"
  {...$$restProps}
  on:input={debounce}
/>
