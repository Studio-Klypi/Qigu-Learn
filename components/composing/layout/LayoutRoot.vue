<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

const size = useScreenSize();
const isMobile = useIsMobile();

const props = defineProps<{
  name?: string;
  class?: HTMLAttributes["class"];
}>();

function updateSize() {
  size.value = document.body.offsetWidth;
  isMobile.value = size.value <= 768;
}

onMounted(() => {
  size.value = document.body.offsetWidth;
  window.addEventListener("resize", updateSize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSize);
});
</script>

<template>
  <div
    :data-layout="name ?? 'default'"
    :class="cn('', props.class)"
  >
    <slot />
  </div>
</template>
