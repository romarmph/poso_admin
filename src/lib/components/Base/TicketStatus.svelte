<script lang="ts">
  import {
    BadgeCheck,
    AlertCircle,
    AlertTriangle,
    FolderInput,
  } from "lucide-svelte";

  export let status: string = "unpaid";

  const statusColor = {
    paid: "bg-teal-100 text-teal-800",
    overdue: "bg-red-100 text-red-800",
    unpaid: "bg-yellow-100 text-yellow-800",
    transferred: "bg-blue-100 text-blue-800",
  }[status];
</script>

<span
  class="{statusColor} inline-flex gap-2 py-1 px-2 rounded-full items-center text-sm font-semibold"
>
  {#if status === "paid"}
    <BadgeCheck size="18px" />
  {:else if status === "overdue"}
    <AlertTriangle size="18px" />
  {:else if status === "transferred"}
    <FolderInput size="18px" />
  {:else}
    <AlertCircle size="18px" />
  {/if}
  {status.charAt(0).toUpperCase() + status.slice(1).toLocaleLowerCase()}
</span>
