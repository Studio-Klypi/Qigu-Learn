<script setup lang="ts">
import { LaptopMinimal, Video, Users, Lock } from "lucide-vue-next";
import type { IStage } from "~/types/stages";
import ContentItem from "~/components/library/contents/ContentItem.vue";

const collapsed = ref<boolean>(true);

defineProps<{
  stage: IStage;
}>();
</script>

<template>
  <Card
    class="grid grid-rows-[min-content,0fr] transition-all duration-300"
    :class="{
      '!bg-secondary text-secondary-foreground': stage.isLocked,
      'grid-rows-[min-content,1fr]': !collapsed,
    }"
  >
    <CardHeader
      class="p-4 cursor-pointer select-none flex flex-row items-center"
      @click="collapsed = !collapsed"
    >
      <div class="flex-1">
        <p class="font-bold line-clamp-1">
          {{ stage.name }}
        </p>
        <div class="flex items-center gap-1 [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:text-muted-foreground">
          <Video v-if="stage.type.includes('videoconference')" />
          <Users v-if="stage.type.includes('presential')" />
          <LaptopMinimal v-if="stage.type.includes('e-learning')" />
        </div>
      </div>
      <Lock
        v-if="stage.isLocked"
        class="size-4"
      />
    </CardHeader>
    <CardContent
      class="p-0 overflow-hidden border-t border-transparent transition-colors duration-300"
      :class="{ 'border-border': !collapsed }"
    >
      <div class="p-2 flex flex-col gap-2">
        <template v-if="!!stage.contents.length">
          <ContentItem
            v-for="(content, index) in stage.contents"
            :key="`content-${index}`"
            :content="content"
            :locked="stage.isLocked"
          />
        </template>
        <template v-else>
          <p class="italic text-muted-foreground">
            No content to display...
          </p>
        </template>
      </div>
    </CardContent>
  </Card>
</template>
