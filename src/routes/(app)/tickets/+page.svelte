<script>
  import Tables from "$lib/components/Table/tables.svelte";
  import Button from "$lib/components/Base/Button.svelte";
  import TextInput from "$lib/components/Forms/TextInput.svelte";
</script>

<h1 style="font-weight: bold;">Tickets</h1>
<header style="display: flex; justify-content: flex-end; padding: 10px;">
  <div style="display: flex; align-items: center;"></div>
</header>
<div style="display: flex; justify-content: flex-end; padding: 10px;">
  <TextInput
    id="input-label"
    width="64"
    classNames="py-3 px-3 pe-15 mr-5"
    placeholder="Search"
  />
  <Button color="teal">dada</Button>
</div>
<Tables />
