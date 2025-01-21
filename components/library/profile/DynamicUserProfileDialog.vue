<script setup lang="ts">
import ProfileModalContent from "~/components/library/profile/ProfileModalContent.vue";
import type { IUser } from "~/types/user";

defineProps<{
  user: IUser;
  me?: boolean;
  loading?: boolean;
  editMode?: boolean;
}>();
defineEmits<{
  save: [{
    firstname: string;
    lastname: string;
    email: string;
    phone?: string;
    linkedin?: string;
  }];
  edit: [];
}>();
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent>
      <ProfileModalContent
        :user="user"
        :loading="loading ?? false"
        :edit-mode="editMode ?? false"
        :disable-edit-mode="!me"
        @edit="$emit('edit')"
        @save="$emit('save', $event)"
      />
    </DialogContent>
  </Dialog>
</template>
