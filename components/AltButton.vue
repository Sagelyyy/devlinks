<script setup lang="ts">
defineProps<{
  state: string;
  width?: string;
}>();

function getState(state: string) {
  switch (state) {
    case "disabled":
      return "rounded-xl transparent font-instrument-bold text-pale-blurple border-pale -blurple border-2  w-full h-[46px]";
    default:
      return "rounded-xl transparent hover:bg-pale-blurple font-instrument-bold text-blurple border-blurple border-2 w-full h-[46px]";
  }
}
</script>

<template>
  <button :class="getState(state)" :style="{ width: width }">
    <slot></slot>
  </button>
</template>
