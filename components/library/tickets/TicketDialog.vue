<script setup lang="ts">
import { Send } from "lucide-vue-next";
import TicketTrigger from "~/components/library/tickets/TicketTrigger.vue";
import type { ITicket } from "~/types/tickets";

const { t } = useI18n();

defineProps<{
  ticket: ITicket;
}>();
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <TicketTrigger :ticket="ticket" />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <div class="flex items-center gap-2">
          <Avatar size="xxs">
            <AvatarImage
              v-if="ticket.author.avatarUrl"
              :src="ticket.author.avatarUrl"
            />
            <AvatarFallback>{{ ticket.author.firstname.substring(0, 1) }}{{ ticket.author.lastname.substring(0, 1) }}</AvatarFallback>
          </Avatar>
          <span class="text-sm text-muted-foreground">{{ ticket.author.firstname }} {{ ticket.author.lastname.substring(0, 1) }}.</span>
        </div>
        <DialogTitle class="text-2xl">
          {{ ticket.title }}
        </DialogTitle>
        <div class="flex items-center gap-1">
          <Badge variant="outline">
            {{ t(`help.ticket.category.${ticket.category}`) }}
          </Badge>
          <Badge
            v-if="ticket.closed"
            variant="destructive"
          >
            {{ t("help.ticket.closed") }}
          </Badge>
        </div>
      </DialogHeader>

      <p class="whitespace-pre-line">
        {{ ticket.description }}
      </p>

      <Separator class="mt-2" />

      <DialogFooter class="flex flex-row items-center justify-start">
        <Input :placeholder="t('help.reply')" />
        <Button
          class="shrink-0"
          size="icon"
        >
          <Send />
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
