<script setup lang="ts">
const model = defineModel();
defineProps<{
  placeholder: string;
  type: string;
  svgPath?: string;
}>();
</script>

<template>
  <div class="relative w-full">
    <svg
      class="absolute top-4 left-6"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path fill="#737373" :d="svgPath" />
    </svg>
    <input
      class="pl-12 pr-16 rounded-xl w-full h-[48px] bg-transparent font-instrument-regular text-grey border-pale-grey border-2 hover:border-blurple hover:cursor-pointer outline-none self-center"
      :placeholder="placeholder"
      :type="type"
      v-model="model"
    />
  </div>
</template>
