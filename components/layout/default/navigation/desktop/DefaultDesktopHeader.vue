<script setup lang="ts">
import { Wrench, Users, Presentation, Bell, CircleHelp, User, Settings, Info, Tag, LogOut, ChevronDown } from "lucide-vue-next";
import DefaultNavigationContent from "~/components/layout/default/navigation/DefaultNavigationContent.vue";
import type { IProgram } from "~/types/programs";
import UserSettingsModal from "~/components/library/profile/settings/UserSettingsModal.vue";
import UserProfileModal from "~/components/library/profile/UserProfileModal.vue";

const { t, locale } = useI18n();
const me = useMe();
const program = useSelectedProgram();
const programs = usePrograms();

const settingsOpen = ref<boolean>(false);
const profileOpen = ref<boolean>(false);

function selectProgram(target: IProgram) {
  program.value = target;
}
</script>

<template>
  <header class="sticky top-0 w-full h-14 border-b border-border px-8 bg-background">
    <div class="w-[min(100%,1600px)] h-14 mx-auto flex items-center gap-1">
      <p>Think</p>
      <!-- workspace selector -->

      <nav class="ml-12 flex items-center gap-1">
        <DefaultNavigationContent />
      </nav>

      <Button
        variant="ghost"
        size="icon"
        class="ml-auto"
      >
        <Bell />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">
            <span>{{ program.name }}</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            v-for="p in programs"
            :key="`program-${p.id}`"
            @click="selectProgram(p)"
          >
            <Avatar shape="square">
              <AvatarImage
                v-if="p.picture"
                :src="p.picture"
              />
              <AvatarFallback>
                {{ p.name.split(" ").slice(0, 2).map((prog: string) => prog.substring(0, 1).toUpperCase()).join("") }}
              </AvatarFallback>
            </Avatar>
            <div class="flex flex-col items-start">
              <p class="font-medium">
                {{ p.name }}
              </p>
              <span class="text-xs text-muted-foreground">Distribution de Loïc</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            class="rounded-full"
          >
            <Avatar
              shape="square"
              size="xs"
            >
              <AvatarImage
                v-if="me.avatarUrl"
                :src="me.avatarUrl"
              />
              <AvatarFallback>{{ me.firstname.substring(0, 1).toUpperCase() }}{{ me.lastname.substring(0, 1).toUpperCase() }}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          side="bottom"
        >
          <DropdownMenuGroup class="flex gap-2 items-center px-2 py-1">
            <Avatar
              shape="square"
            >
              <AvatarImage
                v-if="me.avatarUrl"
                :src="me.avatarUrl"
              />
              <AvatarFallback>{{ me.firstname.substring(0, 1).toUpperCase() }}{{ me.lastname.substring(0, 1).toUpperCase() }}</AvatarFallback>
            </Avatar>
            <div class="flex flex-col">
              <p class="text-sm font-medium">
                Loïc MAES
              </p>
              <span class="text-xs text-muted-foreground">loic@humonio.com</span>
            </div>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem @click="profileOpen = true">
              <User />
              <span>{{ t("navigation.user.profile") }}</span>
            </DropdownMenuItem>
            <DropdownMenuItem @click="settingsOpen = true">
              <Settings />
              <span>{{ t("navigation.user.settings") }}</span>
            </DropdownMenuItem>
            <DropdownMenuItem as-child>
              <NuxtLinkLocale :to="useJourneyUrl('/utils/help')">
                <CircleHelp />
                <span>{{ t("navigation.user.help") }}</span>
              </NuxtLinkLocale>
            </DropdownMenuItem>
            <DropdownMenuItem as-child>
              <NuxtLink
                :to="`https://qigu.app/${locale}`"
                target="_blank"
              >
                <Info />
                <span>{{ t("navigation.user.about") }}</span>
              </NuxtLink>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Tag class="!h-4 !w-4 mr-2" />
              <span>{{ t("navigation.user.changeRole") }}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Wrench />
                  <span>{{ t("roles.coordinator") }}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Presentation />
                  <span>{{ t("roles.facilitator") }}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users />
                  <span>{{ t("roles.coach") }}</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <LogOut />
              <span>{{ t("navigation.user.logout") }}</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <UserProfileModal
      :open="profileOpen"
      @state-change="profileOpen = $event"
    />
    <UserSettingsModal
      :open="settingsOpen"
      @state-change="settingsOpen = $event"
    />
  </header>
</template>
