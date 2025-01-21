<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  disabled?: boolean;
  test?: boolean;
  new?: boolean;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Card
    class="transition-all duration-300"
    :class="{
      'cursor-pointer hover:scale-105 hover:shadow-lg': !disabled,
      'select-none cursor-not-allowed bg-muted text-muted-foreground': disabled,
    }"
  >
    <CardContent
      class="relative p-6 flex flex-col items-center"
    >
      <Badge
        v-if="props.new"
        class="absolute top-4 right-4"
      >
        Nouveau
      </Badge>
      <Avatar size="base">
        <AvatarFallback>IMG</AvatarFallback>
      </Avatar>

      <p class="text-lg font-bold mt-4">
        <slot name="title">
          Unnamed
        </slot>
        <Badge
          v-if="test"
          variant="outline"
        >
          Test
        </Badge>
      </p>
      <span class="text-center text-muted-foreground text-sm"><slot name="caption" /></span>
    </CardContent>
  </Card>
</template>
