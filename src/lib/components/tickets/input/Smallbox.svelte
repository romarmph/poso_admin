<script lang="ts">
    export let placeholder: string="";
    export let id: string="";
    export let type: string="";
    export let py: number;
    export let px: number;
    export let pe: number;
    export let w: number;
    export let mr:number;
  </script>
     <input
    id={id}
    type={type}
    class="py-{py} px-{px} pe-{pe} block w-{w} mr-{mr} border-gray-200  shadow-sm text-sm rounded-lg relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
     placeholder={placeholder}
    />

