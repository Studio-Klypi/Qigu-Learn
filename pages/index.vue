<script setup lang="ts">
import PageRoot from "~/components/composing/page/PageRoot.vue";
import ActivityDetail from "~/components/library/contents/ActivityDetail.vue";
import StageList from "~/components/library/stages/StageList.vue";

// const { t } = useI18n();
const program = useSelectedProgram();
const activity = useSelectedActivity();
</script>

<template>
  <PageRoot
    name="course"
    class="py-4 grid grid-cols-4 gap-4 items-start"
  >
    <Progress
      :model-value="program.stats.contentsDone / program.stats.contents * 100"
      class="col-span-4 h-1"
    />
    <StageList :stages="program.stages" />
    <ActivityDetail
      v-if="!!activity"
      :activity="activity"
      class="col-span-3"
    />
  </PageRoot>
</template>
