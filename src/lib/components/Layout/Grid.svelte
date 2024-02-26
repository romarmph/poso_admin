<script lang="ts">
  export let columns: string;
  export let gap: string;
</script>

<div class="grid {columns} {gap}">
  <slot />
</div>
