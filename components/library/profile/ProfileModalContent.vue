<script setup lang="ts">
import { Edit2, Hourglass, Linkedin, LoaderCircle, Mail, Phone, Save } from "lucide-vue-next";
import type { IUser } from "~/types/user";

const props = defineProps<{
  user: IUser;
  loading: boolean;
  editMode?: boolean;
  disableEditMode?: boolean;
}>();
const emit = defineEmits<{
  save: [{
    firstname: string;
    lastname: string;
    email: string;
    phone?: string;
    linkedin?: string;
  }];
  edit: [];
}>();

const firstname = ref(props.user.firstname);
const lastname = ref(props.user.lastname);
const email = ref(props.user.email);
const phone = ref(props.user.phone);
const linkedin = ref(props.user.linkedin);

function save() {
  emit("save", {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    phone: phone.value,
    linkedin: linkedin.value,
  });
}
</script>

<template>
  <DialogHeader>
    <Avatar
      size="lg"
      class="mx-auto outline outline-primary outline-2 outline-offset-4"
    >
      <AvatarImage
        v-if="user.avatarUrl"
        :src="user.avatarUrl"
      />
      <AvatarFallback>
        {{ user.firstname.substring(0, 1).toUpperCase() }}{{ user.lastname.substring(0, 1).toUpperCase() }}
      </AvatarFallback>
    </Avatar>
  </DialogHeader>

  <div class="flex items-center justify-center gap-2">
    <template v-if="editMode">
      <Input
        v-model="firstname"
        placeholder="Prénom"
        :disabled="loading"
      />
      <Input
        v-model="lastname"
        placeholder="Nom"
        :disabled="loading"
      />
    </template>
    <p
      v-else
      class="text-2xl font-bold"
    >
      {{ firstname }} {{ lastname }}
    </p>
    <div
      v-if="!disableEditMode"
      class="shrink-0 inline-block"
    >
      <Button
        v-if="editMode"
        class="inline-flex"
        size="icon"
        variant="ghost"
        :disabled="loading"
        @click="save"
      >
        <LoaderCircle
          v-if="loading"
          class="animate-spin"
        />
        <Save v-else />
      </Button>
      <Button
        v-else
        class="inline-flex"
        size="icon"
        variant="ghost"
        @click="emit('edit')"
      >
        <Edit2 />
      </Button>
    </div>
  </div>

  <div
    v-if="editMode"
    class="flex flex-col gap-2"
  >
    <div class="space-y-2">
      <Label for="email">Adresse e-mail</Label>
      <Input
        id="email"
        v-model="email"
        placeholder="Adresse e-mail"
        :disabled="loading"
      />
    </div>
    <div class="space-y-2">
      <Label for="phone">Numéro de téléphone</Label>
      <Input
        id="phone"
        v-model="phone"
        placeholder="Numéro de téléphone"
        :disabled="loading"
      />
    </div>
    <div class="space-y-2">
      <Label for="linkedin">Compte LinkedIn</Label>
      <Input
        id="linkedin"
        v-model="linkedin"
        placeholder="Compte LinkedIn"
        :disabled="loading"
      />
    </div>
    <div
      v-if="loading"
      class="mt-2 flex items-center gap-2 italic text-sm text-muted-foreground"
    >
      <LoaderCircle class="animate-spin" />
      <span>Sauvegarde du profil...</span>
    </div>
  </div>
  <div
    v-else
    class="grid grid-cols-2 gap-2"
  >
    <Separator class="mb-3 col-span-2" />

    <Button
      variant="outline"
      class="justify-start"
      as-child
    >
      <NuxtLink :to="`mailto:${email}`">
        <Mail />
        <span>{{ email }}</span>
      </NuxtLink>
    </Button>
    <Button
      v-if="phone"
      variant="outline"
      class="justify-start"
      as-child
    >
      <NuxtLink :to="`tel:${phone}`">
        <Phone />
        <span>{{ phone }}</span>
      </NuxtLink>
    </Button>
    <Button
      v-if="linkedin"
      variant="outline"
      class="justify-start"
      as-child
    >
      <NuxtLink
        :to="`https://www.linkedin.com/in/${linkedin}`"
        target="_blank"
      >
        <Linkedin />
        <span>{{ linkedin }}</span>
      </NuxtLink>
    </Button>
    <Button
      variant="outline"
      class="justify-start"
    >
      <Hourglass />
      <span>Europe/Paris</span>
    </Button>
  </div>
</template>
