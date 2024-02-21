<script lang="ts">
    export let name :string;
    export let isActive :boolean = false;
    export let route :string;

</script>
<div>
    <a
      class="flex items-center gap-x-3.5 py-2 px-2.5 {isActive ? "bg-gray-100" : "bg-white"} text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href={route}
    >
    <slot />
    {name}
    </a>
</div>