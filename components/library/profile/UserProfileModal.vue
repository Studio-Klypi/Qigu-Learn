<script setup lang="ts">
import { wait } from "~/lib/utils";
import ProfileModalContent from "~/components/library/profile/ProfileModalContent.vue";

defineProps<{
  open: boolean;
}>();
defineEmits<{
  stateChange: [boolean];
}>();

const loading = ref<boolean>(false);
const editMode = ref<boolean>(false);
const me = useMe();

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
  <Dialog
    :open="open"
    @update:open="$emit('stateChange', $event)"
  >
    <DialogContent>
      <ProfileModalContent
        :user="me"
        :loading="loading"
        :edit-mode="editMode"
        @edit="editMode = true"
        @save="save"
      />
    </DialogContent>
  </Dialog>
</template>
