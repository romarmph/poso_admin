<script lang="ts">
  export let id: string;
  export let classNames: string="";
</script>

<label for={id} class="block text-sm font-medium mb-2 dark:text-white {classNames}">
  <slot />
</label>

