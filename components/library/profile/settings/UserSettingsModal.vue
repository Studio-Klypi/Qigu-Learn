<script setup lang="ts">
import SettingSection from "~/components/library/profile/settings/SettingSection.vue";
import SettingDescriptor from "~/components/library/profile/settings/SettingDescriptor.vue";
import SettingTitle from "~/components/library/profile/settings/SettingTitle.vue";
import SettingDescription from "~/components/library/profile/settings/SettingDescription.vue";
import SettingControl from "~/components/library/profile/settings/SettingControl.vue";

const { t, locale, locales } = useI18n();
const colorMode = useColorMode();
watch(locale, (value) => {
  selectLocale(value);
});

defineProps<{
  open?: boolean;
}>();
defineEmits<{
  stateChange: [boolean];
}>();

const programNotificationsOptions = [
  "inApp",
  "appAndPush",
  "appAndEmail",
  "everywhere",
  "automatic",
];
const programNotifications = ref<string>("automatic");
const activityReportNotificationsOptions = [
  "no",
  "daily",
  "weekly",
  "monthly",
];
const activityReportNotifications = ref<string>("daily");

const selectLocale = (locale: "fr" | "en" | "de") => {
  navigateTo(useSwitchLocalePath()(locale));
};
</script>

<template>
  <Dialog
    :open="open ?? false"
    @update:open="$emit('stateChange', $event)"
  >
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ t("settings.title") }}</DialogTitle>
        <DialogDescription>{{ t("settings.description") }}</DialogDescription>
      </DialogHeader>

      <Separator :label="t('settings.sections.interface')" />
      <SettingSection>
        <SettingDescriptor>
          <SettingTitle>Langue</SettingTitle>
          <SettingDescription>Sélectionnez la langue dans laquelle vous souhaitez que votre interface s'affiche à l'avenir.</SettingDescription>
        </SettingDescriptor>
        <SettingControl>
          <Select v-model="locale">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="loc in locales"
                :key="`locale-${loc}`"
                :value="loc as unknown as string"
              >
                {{ t(`locales.${loc}`) }}
              </SelectItem>
            </SelectContent>
          </Select>
        </SettingControl>
      </SettingSection>
      <SettingSection>
        <SettingDescriptor>
          <SettingTitle>Apparence</SettingTitle>
          <SettingDescription>Sélectionnez le thème que vous souhaitez utiliser pour votre interface.</SettingDescription>
        </SettingDescriptor>
        <SettingControl>
          <Select v-model="colorMode.preference">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="system">
                {{ t("themes.system") }}
              </SelectItem>
              <SelectItem value="light">
                {{ t("themes.light") }}
              </SelectItem>
              <SelectItem value="dark">
                {{ t("themes.dark") }}
              </SelectItem>
            </SelectContent>
          </Select>
        </SettingControl>
      </SettingSection>
      <Separator :label="t('settings.sections.notifications')" />
      <SettingSection>
        <SettingDescriptor>
          <SettingTitle>{{ t("settings.programNotifications.title") }}</SettingTitle>
          <SettingDescription>{{ t("settings.programNotifications.description") }}</SettingDescription>
        </SettingDescriptor>
        <SettingControl>
          <Select v-model="programNotifications">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="option in programNotificationsOptions"
                :key="option"
                :value="option"
              >
                {{ t(`settings.programNotifications.options.${option}`) }}
              </SelectItem>
            </SelectContent>
          </Select>
        </SettingControl>
      </SettingSection>
      <SettingSection>
        <SettingDescriptor>
          <SettingTitle>{{ t("settings.activityReportNotifications.title") }}</SettingTitle>
          <SettingDescription>{{ t("settings.activityReportNotifications.description") }}</SettingDescription>
        </SettingDescriptor>
        <SettingControl>
          <Select v-model="activityReportNotifications">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="option in activityReportNotificationsOptions"
                :key="option"
                :value="option"
              >
                {{ t(`settings.activityReportNotifications.options.${option}`) }}
              </SelectItem>
            </SelectContent>
          </Select>
        </SettingControl>
      </SettingSection>
    </DialogContent>
  </Dialog>
</template>
