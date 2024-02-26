<script lang="ts">
  export let style: "solid" | "outline" | "ghost" | "soft" | "white" = "solid";
  export let size: "small" | "default" | "large" = "default";
  export let color: "blue" | "teal" | "green" | "red" | "yellow" | "gray" =
    "blue";

  let buttonSize = {
    small: "py-2 px-3",
    default: "py-3 px-4",
    large: "py-4 px-5",
  };

  const base = `${buttonSize[size]} inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`;
</script>

<button
  style="margin-right: {marginright}px; background-color: {bgcolor}; color: {color}; border: 1px solid #ccc; padding: 5px 10px; border-radius: 5px; "
  >{buttonname}</button
>
