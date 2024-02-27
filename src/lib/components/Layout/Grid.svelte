<script lang="ts">
  export let columns: string;
  export let gap: string;
  export let className: string = "";
</script>

<div class="grid {columns} {gap} {className}">
  <slot />
</div>
