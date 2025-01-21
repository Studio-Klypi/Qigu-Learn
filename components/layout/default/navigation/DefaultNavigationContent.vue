<script setup lang="ts">
import DefaultNavigationLink from "~/components/layout/default/navigation/utils/DefaultNavigationLink.vue";

const { t } = useI18n();
</script>

<template>
  <DefaultNavigationLink :to="useJourneyUrl('/')">
    {{ t("navigation.links.program") }}
  </DefaultNavigationLink>
  <!-- <DefaultNavigationLink to="/actions">
    {{ t("navigation.links.actions") }}
  </DefaultNavigationLink> -->
  <DefaultNavigationLink :to="useJourneyUrl('/people')">
    {{ t("navigation.links.people") }}
  </DefaultNavigationLink>
  <DefaultNavigationLink :to="useJourneyUrl('/success')">
    {{ t("navigation.links.success") }}
  </DefaultNavigationLink>
</template>
