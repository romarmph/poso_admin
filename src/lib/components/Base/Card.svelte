<script lang="ts">
export let name: string="";
// export let iconCard: string="<Users/>";
import {TrendingDown, TrendingUp, Users } from "lucide-svelte";


</script>


<div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
    <div class="p-4 md:p-5 flex gap-x-4">
      <div class="flex-shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg dark:bg-gray-800">
 <Users/>
    </div>

      <div class="grow">
        <div class="flex items-center gap-x-2">
          <p class="text-xs uppercase tracking-wide text-gray-500">
            {name}
          </p>
        </div>
        <div class="mt-1 flex items-center gap-x-2">
          <h3 class="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
            72,540
          </h3>
          <span class="inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100">
            <slot/>
            <span class="inline-block text-xs font-medium">
              12.5%
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>