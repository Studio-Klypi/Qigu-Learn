<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { ExternalLink } from "lucide-vue-next";
import { cn } from "~/lib/utils";
import type { IContent } from "~/types/contents";

const props = defineProps<{
  activity: IContent;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Card
    :class="cn('', props.class)"
  >
    <CardHeader class="p-4 border-b border-border flex flex-row items-center gap-2">
      <Avatar shape="square">
        <AvatarImage
          v-if="!!activity.design?.picture"
          :src="activity.design?.picture"
        />
        <AvatarFallback>
          {{ activity.name.substring(0, 2).toUpperCase() }}
        </AvatarFallback>
      </Avatar>
      <p class="text-lg font-bold">
        {{ activity.name }}
      </p>
    </CardHeader>
    <CardContent class="p-4">
      <p class="leading-relaxed text-pretty">
        {{ activity.content }}
      </p>
    </CardContent>
    <CardFooter
      v-if="activity.link && activity.link.length"
      class="p-4 border-t border-border"
    >
      <Button
        v-for="(link, index) in activity.link"
        :key="`link-${index}`"
        as-child
      >
        <NuxtLink
          :to="link.url"
          target="_blank"
        >
          <ExternalLink v-if="link.type === 'external'" />
          <span>{{ link.label }}</span>
        </NuxtLink>
      </Button>
    </CardFooter>
  </Card>
</template>
