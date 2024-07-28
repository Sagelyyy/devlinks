<script setup lang="ts">
interface LinkInterface {
  id: number;
  url: string;
  user_id: number;
  created_at: string;
  type: string;
}
defineProps<{
  links: LinkInterface[];
}>();
</script>

<template>
  <div
    v-for="link in links"
    :key="link.id"
    class="flex flex-col mb-6 justify-center items-center bg-off-white p-5 rounded-xl"
  >
    <p class="text-light-grey text-sm font-instrument-regular self-start">
      Platform
    </p>
    <SelectVue :items="[{ id: 1, name: 'Link' }]" />
    <p class="text-light-grey text-sm font-instrument-regular self-start">
      Link
    </p>
    <InputVue
      placeholder="e.g. https://www.github.com/johnappleseed "
      type="text"
      v-model="link.url"
    />
  </div>
</template>
