<script lang="ts">
    export let Name: string="";
    export let classed: string="px-6 py-2";
    </script>

<td class="size-px whitespace-nowrap">
    <div class="{classed}">
      <label for="hs-at-with-checkboxes-1" class="flex">
      <slot/>
        <span class="sr-only">{Name}</span>
      </label>
    </div>
  </td>