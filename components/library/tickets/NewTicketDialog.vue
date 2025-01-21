<script setup lang="ts">
import { GitPullRequestCreate, LoaderCircle } from "lucide-vue-next";
import { useForm } from "vee-validate";
import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { wait } from "~/lib/utils";

const { t } = useI18n();

const programs = usePrograms();
const selectedProgram = useSelectedProgram();

const open = ref<boolean>(false);
const loading = ref<boolean>(false);

const schema = toTypedSchema(z.object({
  title: z.string().min(1),
  description: z.string().min(10),
  category: z.string().min(5).default("other"),
  programId: z.string().default(`${selectedProgram.value.id}`),
}));
const { handleSubmit } = useForm({
  validationSchema: schema,
});
const save = handleSubmit(async (values) => {
  loading.value = true;

  await wait(1000 + Math.round(Math.random() * 1000));
  createTicket({
    ...values,
    programId: Number(values.programId),
  });

  loading.value = false;
  open.value = false;
});
</script>

<template>
  <Dialog
    :open="open"
    @update:open="open = $event"
  >
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Nouveau ticket</DialogTitle>
      </DialogHeader>

      <form
        class="flex flex-col gap-4"
        @submit="save"
      >
        <FormField
          v-slot="{ componentField }"
          name="programId"
        >
          <FormItem>
            <FormLabel>{{ t("help.fields.program") }}</FormLabel>
            <FormControl v-bind="componentField">
              <Select>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    v-for="p in programs"
                    :key="`prog-${p.id}`"
                    :value="`${p.id}`"
                  >
                    {{ p.name }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="category"
        >
          <FormItem>
            <FormLabel>{{ t("help.fields.category") }}</FormLabel>
            <FormControl v-bind="componentField">
              <Select>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="logistic">
                    {{ t("help.ticket.category.logistic") }}
                  </SelectItem>
                  <SelectItem value="usage">
                    {{ t("help.ticket.category.usage") }}
                  </SelectItem>
                  <SelectItem value="data">
                    {{ t("help.ticket.category.data") }}
                  </SelectItem>
                  <SelectItem value="other">
                    {{ t("help.ticket.category.other") }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="title"
        >
          <FormItem>
            <FormLabel>{{ t("help.fields.title.label") }}</FormLabel>
            <FormControl v-bind="componentField">
              <Input :placeholder="t('help.fields.title.placeholder')" />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField
          v-slot="{ componentField }"
          name="description"
        >
          <FormItem>
            <FormLabel>{{ t("help.fields.description.label") }}</FormLabel>
            <FormControl v-bind="componentField">
              <Textarea :placeholder="t('help.fields.description.placeholder')" />
            </FormControl>
          </FormItem>
        </FormField>

        <DialogFooter>
          <Button
            type="submit"
            :disabled="loading"
          >
            <template v-if="loading">
              <LoaderCircle class="animate-spin" />
              <span>{{ t("help.createAction.loading") }}</span>
            </template>
            <template v-else>
              <GitPullRequestCreate />
              <span>{{ t("help.createAction.idle") }}</span>
            </template>
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
