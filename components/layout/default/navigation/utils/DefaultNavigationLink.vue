<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

const props = defineProps<{
  to: string;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Button
    variant="ghost"
    :class="cn('justify-start', props.class)"
    as-child
  >
    <NuxtLinkLocale
      :to="to"
      active-class="bg-secondary text-secondary-foreground"
    >
      <slot />
    </NuxtLinkLocale>
  </Button>
</template>
