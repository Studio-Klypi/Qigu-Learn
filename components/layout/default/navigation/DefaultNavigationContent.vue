<script setup lang="ts">
import DefaultNavigationLink from "~/components/layout/default/navigation/utils/DefaultNavigationLink.vue";

const { t } = useI18n();
</script>

<template>
  <DefaultNavigationLink to="/">
    {{ t("navigation.links.program") }}
  </DefaultNavigationLink>
  <!-- <DefaultNavigationLink to="/actions">
    {{ t("navigation.links.actions") }}
  </DefaultNavigationLink> -->
  <DefaultNavigationLink to="/people">
    {{ t("navigation.links.people") }}
  </DefaultNavigationLink>
  <DefaultNavigationLink to="/success">
    {{ t("navigation.links.success") }}
  </DefaultNavigationLink>
</template>
