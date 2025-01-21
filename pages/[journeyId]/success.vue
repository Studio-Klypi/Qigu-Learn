<script setup lang="ts">
import PageRoot from "~/components/composing/page/PageRoot.vue";
import SuccessBadge from "~/components/library/badges/SuccessBadge.vue";

const { t } = useI18n();
</script>

<template>
  <PageRoot
    name="success"
    class="py-4 grid grid-cols-3 gap-4"
  >
    <section class="flex flex-col gap-4">
      <h2 class="text-2xl font-extrabold">
        {{ t("success.score.title") }}
      </h2>

      <div class="flex flex-col gap-2">
        <span class="italic text-muted-foreground">
          {{ t("success.score.noScores") }}
        </span>
      </div>
    </section>
    <section class="col-span-2 flex flex-col gap-4">
      <h2 class="text-2xl font-extrabold">
        {{ t("success.success.title") }}
      </h2>

      <div class="grid grid-cols-4 gap-4">
        <SuccessBadge new>
          <template #title>
            Succès n°2
          </template>
          <template #caption>
            Ouvre le premier contenu
          </template>
        </SuccessBadge>
        <SuccessBadge new>
          <template #title>
            Succès n°3
          </template>
          <template #caption>
            Terminer le premier contenu blended
          </template>
        </SuccessBadge>
        <SuccessBadge>
          <template #title>
            Succès n°1
          </template>
          <template #caption>
            Inscrivez-vous à la formation
          </template>
        </SuccessBadge>
        <SuccessBadge
          test
          disabled
        >
          <template #title>
            Succès n°4
          </template>
          <template #caption>
            Ouvre 10 contenus
          </template>
        </SuccessBadge>
      </div>
    </section>
  </PageRoot>
</template>
