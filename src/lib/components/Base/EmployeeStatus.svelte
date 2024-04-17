<script lang="ts">
    import {
        BadgeCheck,
        AlertTriangle,
        UserX,
        CalendarCheck,
        AlertCircle,
    } from "lucide-svelte";

    export let status: "active" | "suspended" | "terminated" | "onleave" =
        "active";

    const statusColor = {
        active: "bg-teal-100 text-teal-800",
        suspended: "bg-red-100 text-red-800",
        terminated: "bg-yellow-100 text-yellow-800",
        onleave: "bg-blue-100 text-blue-800",
    }[status];
</script>

<span
    class="{statusColor} inline-flex gap-2 py-1 px-2 rounded-full items-center text-sm font-semibold"
>
    {#if status === "active"}
        <BadgeCheck size="18px" />
    {:else if status === "suspended"}
        <AlertTriangle size="18px" />
    {:else if status === "terminated"}
        <UserX size="18px" />
    {:else if status === "onleave"}
        <CalendarCheck size="18px" />
    {:else}
        <AlertCircle size="18px" />
    {/if}
    {status.charAt(0).toUpperCase() + status.slice(1).toLocaleLowerCase()}
</span>
