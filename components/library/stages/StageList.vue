<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import Stage from "~/components/library/stages/Stage.vue";
import type { IStage } from "~/types/stages";
import { cn } from "~/lib/utils";

const props = defineProps<{
  stages: IStage[];
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <aside :class="cn('flex flex-col gap-2', props.class)">
    <Stage
      v-for="(stage, index) in stages"
      :key="index"
      :stage="stage"
    />
  </aside>
</template>
