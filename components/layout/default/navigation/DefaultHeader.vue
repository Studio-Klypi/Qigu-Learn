<script setup lang="ts">
import DefaultMobileHeader from "~/components/layout/default/navigation/mobile/DefaultMobileHeader.vue";
import DefaultDesktopHeader from "~/components/layout/default/navigation/desktop/DefaultDesktopHeader.vue";

const isMobile = useIsMobile();
</script>

<template>
  <DefaultMobileHeader v-if="isMobile" />
  <DefaultDesktopHeader v-else />
</template>
