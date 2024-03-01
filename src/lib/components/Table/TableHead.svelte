<script lang="ts">
export let name: string="";
export let classes: string="";
</script>

<th scope="col" class="{classes}">
    <div class="flex items-center gap-x-2">
        <slot/>
      <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
        {name}
      </span>
    </div>
  </th>