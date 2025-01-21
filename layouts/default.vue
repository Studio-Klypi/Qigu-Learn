<script setup lang="ts">
import LayoutRoot from "~/components/composing/layout/LayoutRoot.vue";
import DefaultHeader from "~/components/layout/default/navigation/DefaultHeader.vue";
</script>

<template>
  <LayoutRoot class="flex flex-col">
    <NuxtLoadingIndicator />

    <DefaultHeader />

    <main class="px-8">
      <NuxtPage />
    </main>
  </LayoutRoot>
</template>
