<script setup lang="ts">
import { Check, Lock } from "lucide-vue-next";
import type { IContent } from "~/types/contents";

const props = defineProps<{
  content: IContent;
  locked: boolean;
}>();
const isActive = computed(() => JSON.stringify(props.content) === JSON.stringify(useSelectedActivity().value ?? {}));

function selectActivity() {
  if (props.locked)
    return;

  useSelectedActivity().value = props.content;
}
</script>

<template>
  <Card
    class="cursor-pointer select-none"
    :class="{
      'border-primary': isActive,
      'cursor-not-allowed bg-secondary text-secondary-foreground': locked,
    }"
    @click="selectActivity"
  >
    <CardContent class="py-1 pl-1 pr-3 flex items-center gap-2">
      <div
        v-if="locked"
        class="grid place-items-center h-10 w-10 rounded-md [&_svg]:size-4 bg-black/5"
      >
        <Lock />
      </div>
      <Avatar
        v-else
        size="sm"
        shape="square"
      >
        <AvatarImage
          v-if="content.design.picture"
          :src="content.design.picture"
        />
        <AvatarFallback>
          {{ content.name.substring(0, 2).toUpperCase() }}
        </AvatarFallback>
      </Avatar>

      <p class="line-clamp-1 flex-1">
        {{ content.name }}
      </p>

      <template v-if="content.duration && !content.progression.done && !content.progression.viewed">
        <span class="text-xs text-muted-foreground">{{ content.duration }}min</span>
      </template>
      <Check
        v-if="content.progression.done"
        class="size-4"
      />
    </CardContent>
  </Card>
</template>
