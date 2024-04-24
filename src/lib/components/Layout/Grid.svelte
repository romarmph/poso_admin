<script lang="ts">
  export let columns: string;
  export let gap: string;
  export let classNames: string = "";
</script>

<div class="grid {columns} {gap} {classNames}">
  <slot />
</div>
