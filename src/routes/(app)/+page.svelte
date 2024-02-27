<script lang="ts">
  import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
  } from "$lib/components/Modal/Modal";

  import TicketStatus from "$lib/components/Base/TicketStatus.svelte";

  import { Button } from "$lib/Components";
</script>

<h1 class="text-2xl font-bold text-gray-700">Tickets</h1>

<!-- SAMPLE -->
<Button modalId="test-modal">Open</Button>

<Modal modalId="test-modal">
  <ModalHeader slot="header">My Modal</ModalHeader>

  <ModalBody slot="body"></ModalBody>

  <ModalFooter slot="footer"></ModalFooter>
</Modal>

<TicketStatus status="paid" />
<TicketStatus status="unpaid" />
<TicketStatus status="overdue" />
<TicketStatus status="transferred" />
