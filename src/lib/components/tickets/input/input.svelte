<script lang="ts">
    export let headtitle: String = "";
    export let placeholder: string="";
    export let id: string="";
    export let type: string="";
    export let py: number;
    export let px: number;
    export let pe: number;
    export let w: number;
  </script>
<div class="sm:col-span-9">
    <li class="p-3" style="font-weight: bold;">{headtitle}</li>
    <input
        id={id}
        type={type}
        class="py-{py} px-{px} pe-{pe} block w-{w} border-black-200 shadow-sm text-sm rounded-lg focus:border-blue-500"
        placeholder={placeholder}
    />

</div>