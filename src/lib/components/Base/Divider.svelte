<script lang="ts">
  export let strokeWidth: number;
  export let classNames: string = "";
</script>

<div class="flex items-center gap-3 {classNames}">
  <slot name="left" />
  <hr class="border flex-1" style="border-width: {strokeWidth}px;" />
  <slot name="right" />
</div>
