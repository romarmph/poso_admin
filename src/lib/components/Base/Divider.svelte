<script lang="ts">
  export let border: number;
</script>

<div class="">
  <slot />
  <hr class="border-{border}" />
</div>
