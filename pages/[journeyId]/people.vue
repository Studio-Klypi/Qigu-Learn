<script setup lang="ts">
import { Search, Plus } from "lucide-vue-next";
import PageRoot from "~/components/composing/page/PageRoot.vue";
import type { IUser } from "~/types/user";
import DynamicUserProfileDialog from "~/components/library/profile/DynamicUserProfileDialog.vue";
import { wait } from "~/lib/utils";

const users = useUsers();
const me = useMe();
const search = ref<string>("");

const editMode = ref<boolean>(false);
const loading = ref<boolean>(false);

const filteredUsers = computed((): IUser[] => search.value
  ? users.value.filter((u: IUser) => u.email.includes(search.value.toLowerCase()))
  : users.value);

async function save() {
  loading.value = true;

  console.log("saving");
  await wait(1000 + Math.round(Math.random() * 1000));
  console.log("saved");
  editMode.value = false;

  loading.value = false;
}
</script>

<template>
  <PageRoot
    name="people"
    class="py-4 grid grid-cols-3 gap-4"
  >
    <div class="col-span-2 flex flex-col gap-4">
      <div class="relative">
        <Input
          v-model="search"
          placeholder="Search someone"
        />
        <Search class="absolute !h-4 !w-4 top-3 right-4 text-muted-foreground pointer-events-none" />
      </div>

      <div class="flex flex-col gap-1">
        <template
          v-for="(user, index) in filteredUsers"
          :key="`${user.id}${index}`"
        >
          <DynamicUserProfileDialog
            :user="user"
            :me="user.id === me.id"
            :edit-mode="editMode"
            :loading="loading"
            @edit="editMode = true"
            @save="save"
          >
            <Button
              class="h-auto justify-start"
              variant="ghost"
            >
              <Avatar size="sm">
                <AvatarImage
                  v-if="user.avatarUrl"
                  :src="user.avatarUrl"
                />
                <AvatarFallback>
                  {{ user.firstname.substring(0, 1) }}{{ user.lastname.substring(0, 1) }}
                </AvatarFallback>
              </Avatar>
              <div class="flex flex-col items-start">
                <p class="text-md">
                  {{ user.firstname }} {{ user.lastname }} <Badge
                    v-if="user.id === me.id"
                    variant="secondary"
                  >
                    vous
                  </Badge>
                </p>
                <span class="text-xs text-muted-foreground">Team 1</span>
              </div>
            </Button>
          </DynamicUserProfileDialog>
        </template>
        <p
          v-if="search"
          class="text-sm text-muted-foreground self-center"
        >
          {{ filteredUsers.length }} résultat(s)
        </p>
        <p
          v-else
          class="text-sm text-muted-foreground self-center"
        >
          {{ filteredUsers.length }} participant(s)
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <section class="flex flex-col gap-2">
        <p class="font-medium">
          Votre mentor
        </p>
        <Button>
          <Plus />
          <span>Inviter votre mentor</span>
        </Button>
      </section>
      <section class="flex flex-col gap-2">
        <p class="font-medium">
          Vos facilitateurs
        </p>
        <div class="flex flex-col gap-1">
          <p class="italic text-muted-foreground text-sm">
            Aucun facilitateurs...
          </p>
        </div>
      </section>
    </div>
  </PageRoot>
</template>
