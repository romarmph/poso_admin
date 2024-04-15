<script lang="ts" generics="T">
	import type { ComponentType } from "svelte";

	export let component: ComponentType;
	export let props: Record<string, any>;
</script>

<svelte:component this={component} {...props} />
