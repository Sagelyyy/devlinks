<script setup lang="ts">
import { socials } from "../utils/socials";
import type { LinkInterface } from "../types/links";

defineProps<{
  links: LinkInterface[];
}>();
</script>

<template>
  <div
    v-for="(link, index) in links"
    :key="link.id"
    class="flex flex-col mb-6 justify-center items-center bg-off-white p-5 rounded-xl"
  >
    {{ (link.url, link.type) }}
    <p class="text-light-grey text-sm font-instrument-regular self-start">
      Platform
    </p>
    <SelectVue
      :items="
        socials.map((social) => ({
          id: link.id,
          name: social.name,
          path: social.path,
          selected:
            social.name.toLocaleLowerCase() === link.type.toLocaleLowerCase()
              ? true
              : false,
        }))
      "
      @update:selected="(selected) => (link.type = selected.name)"
    />
    <p class="text-light-grey text-sm font-instrument-regular self-start">
      Link
    </p>
    <InputVue
      placeholder="e.g. https://www.github.com/johnappleseed "
      type="text"
      v-model="link.url"
    />
  </div>
  <div class="flex justify-end">
    <ButtonVue class="self-center w-1/6" state="active">Save</ButtonVue>
  </div>
</template>
