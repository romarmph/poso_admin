<script>
    import Tables from "$lib/components/tickets/tables/tables.svelte";
    import Smallbox from "$lib/components/tickets/input/Smallbox.svelte";
    import Button from "$lib/components/tickets/Button/Button.svelte";
</script>

<h1 style="font-weight: bold;">Tickets</h1>
<header style="display: flex; justify-content: flex-end; padding: 10px;">
    <div style="display: flex; align-items: center;">
        <Smallbox id="search" type="text" py={3} px={3} pe={11} w={30} mr={4} placeholder="Search"/>    
        <Button buttonname="Add Tickets" marginright={10} bgcolor="blue" color="white"/>
    </div>
    

  </header>
<Tables/>