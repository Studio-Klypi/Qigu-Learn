<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

const props = defineProps<{
  name?: string;
  class?: HTMLAttributes["class"];
}>();

const program = useSelectedProgram();

const { t } = useI18n();
useHead({
  title: t(`${props.name}.tab`, {
    program: program.value.name,
  }),
});
</script>

<template>
  <div
    :data-page="name ?? 'home'"
    :class="cn('w-[min(100%,1600px)] mx-auto', props.class)"
  >
    <slot>{{ name }}</slot>
  </div>
</template>
