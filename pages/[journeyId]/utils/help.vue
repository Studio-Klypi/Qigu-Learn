<script setup lang="ts">
import { Plus, Search } from "lucide-vue-next";
import PageRoot from "~/components/composing/page/PageRoot.vue";
import TicketDialog from "~/components/library/tickets/TicketDialog.vue";
import NewTicketDialog from "~/components/library/tickets/NewTicketDialog.vue";
import type { ITicket } from "~/types/tickets";

const checked = ref<boolean>(false);
const search = ref<string>("");
const tickets = computed((): ITicket[] => {
  const list = useTickets();
  let reworkedList = checked.value ? list.value.filter((ticket: ITicket) => !ticket.closed) : list.value;

  if (search.value) {
    reworkedList = reworkedList.filter(ticket => ticket.title.toLowerCase().includes(search.value.toLowerCase()));
  }

  return reworkedList.sort((a, b) => a.createdAt.getTime() > b.createdAt.getTime() ? -1 : 1);
});
</script>

<template>
  <PageRoot
    name="help"
    class="py-4 grid grid-cols-4 gap-4"
  >
    <aside class="flex flex-col gap-4">
      <NewTicketDialog>
        <Button>
          <Plus />
          <span>Nouveau ticket</span>
        </Button>
      </NewTicketDialog>

      <Card>
        <CardHeader class="flex-row items-center justify-between gap-4 border-b border-border">
          <p>Masquer les tickets clôturés</p>
          <Switch
            :checked="checked"
            @update:checked="checked = $event"
          />
        </CardHeader>
        <CardContent class="p-6 italic text-sm text-muted-foreground bg-muted">
          <p>Si vous avez une requête, veuillez créer un ticket. Votre ticket sera adressé à la personne de notre équipe la plus à même de vous aider.</p>
          <p class="font-bold">
            Assurez-vous de fournir le plus d’informations possible.
          </p>
          <p class="mt-4">
            Nous répondons généralement sous 24 heures. Vous recevrez une notification quand nous aurons répondu à votre requête.
          </p>
        </CardContent>
      </Card>
    </aside>

    <main class="col-span-3 flex flex-col gap-4">
      <div class="relative">
        <Input
          v-model="search"
          placeholder="Recherchez un ticket..."
        />
        <Search class="size-4 absolute top-3 right-4 text-muted-foreground pointer-events-none" />
      </div>
      <template v-if="tickets.length">
        <TicketDialog
          v-for="ticket in tickets"
          :key="ticket.title"
          :ticket="ticket"
        />
      </template>
      <template v-else>
        <p class="italic text-muted-foreground">
          Pas de tickets ouverts pour l'instant...
        </p>
      </template>
    </main>
  </PageRoot>
</template>
