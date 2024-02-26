<script lang="ts">
  export let buttonname: String = "";
  export let marginright: Number;
  export let bgcolor: string = "";
  export let color: string = "";
  export let width: string="";

</script>

<button
  style="margin-right: {marginright}px; background-color: {bgcolor}; color: {color}; border: 1px solid #ccc; padding: 5px 10px; border-radius: 5px; width:{width} "
  >{buttonname}</button
>
