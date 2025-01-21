<script setup lang="ts">
import { CircleAlert } from "lucide-vue-next";
import LayoutRoot from "~/components/composing/layout/LayoutRoot.vue";
import DefaultHeader from "~/components/layout/default/navigation/DefaultHeader.vue";

const { t } = useI18n();
</script>

<template>
  <LayoutRoot class="flex flex-col">
    <NuxtLoadingIndicator />

    <DefaultHeader />

    <main class="px-8">
      <NuxtPage />
    </main>

    <Alert
      variant="destructive"
      class="w-fit bg-background fixed bottom-4 left-1/2 -translate-x-1/2"
    >
      <CircleAlert class="size-4" />
      <AlertTitle>{{ t("responsiveNotAvailable.title") }}</AlertTitle>
      <AlertDescription>{{ t("responsiveNotAvailable.description") }}</AlertDescription>
    </Alert>
  </LayoutRoot>
</template>
