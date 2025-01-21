<script setup lang="ts">
import { MessagesSquare, Users } from "lucide-vue-next";
import { formatDate } from "~/lib/utils";
import type { ITicket } from "~/types/tickets";

const props = defineProps<{
  ticket: ITicket;
}>();

const user = props.ticket.author;
</script>

<template>
  <div
    class="flex items-center gap-2 justify-start px-4 py-2 outline outline-border rounded-md cursor-pointer transition-colors hover:bg-accent"
  >
    <Avatar>
      <AvatarImage
        v-if="user.avatarUrl"
        :src="user.avatarUrl"
      />
      <AvatarFallback>{{ user.firstname.substring(0, 1).toUpperCase() }}{{ user.lastname.substring(0, 1).toUpperCase() }}</AvatarFallback>
    </Avatar>

    <div class="flex flex-col items-start">
      <p class="font-bold">
        {{ ticket.title }} <Badge variant="outline">
          {{ ticket.category }}
        </Badge> <Badge
          v-if="ticket.closed"
          variant="destructive"
        >
          fermé
        </Badge>
      </p>
      <span class="text-sm text-muted-foreground line-clamp-1">{{ ticket.description }}</span>
    </div>

    <div class="shrink-0 ml-auto flex items-center divide-x text-sm text-muted-foreground">
      <div class="px-2">
        <span>{{ formatDate(ticket.createdAt) }}</span>
      </div>
      <!-- answers -->
      <div class="px-2 flex items-center gap-2">
        <span>0</span>
        <MessagesSquare class="size-4" />
      </div>
      <!-- contacts -->
      <div class="px-2 flex items-center gap-2">
        <span>12</span>
        <Users class="size-4" />
      </div>
    </div>
  </div>
</template>
