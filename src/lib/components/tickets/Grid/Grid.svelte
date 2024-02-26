<script lang="ts">
    export let columns: number;
    export let gap: number;
</script>

<div class="grid grid-cols-{columns} gap-{gap}">
 <slot/>
    </div>
