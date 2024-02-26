<script lang="ts">
    export let border: number;
</script>

<div>
    <slot />
    <hr class=" border-{border}">
</div>
