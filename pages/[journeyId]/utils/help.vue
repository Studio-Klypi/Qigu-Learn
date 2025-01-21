<script setup lang="ts">
import { Plus, Search } from "lucide-vue-next";
import PageRoot from "~/components/composing/page/PageRoot.vue";
import TicketDialog from "~/components/library/tickets/TicketDialog.vue";
import NewTicketDialog from "~/components/library/tickets/NewTicketDialog.vue";
import type { ITicket } from "~/types/tickets";

const { t } = useI18n();

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
          <span>{{ t("help.ticket.create") }}</span>
        </Button>
      </NewTicketDialog>

      <Card>
        <CardHeader class="flex-row items-center justify-between gap-4 border-b border-border">
          <p>{{ t("help.config.hideClosed") }}</p>
          <Switch
            :checked="checked"
            @update:checked="checked = $event"
          />
        </CardHeader>
        <CardContent class="p-6 italic text-sm text-muted-foreground bg-muted">
          <p>{{ t("help.config.explanation") }}</p>
          <p class="font-bold">
            {{ t("help.config.information") }}
          </p>
          <p class="mt-4">
            {{ t("help.config.timing") }}
          </p>
        </CardContent>
      </Card>
    </aside>

    <main class="col-span-3 flex flex-col gap-4">
      <div class="relative">
        <Input
          v-model="search"
          :placeholder="t('help.ticket.search')"
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
          {{ t("help.ticket.noOpened") }}
        </p>
      </template>
    </main>
  </PageRoot>
</template>
