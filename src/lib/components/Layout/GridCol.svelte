<script lang="ts">
  export let colSpan: string = "";
  export let className: string = "";
</script>

<div class="{colSpan} {className}">
  <slot />
</div>
