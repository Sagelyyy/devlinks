<script setup lang="ts">
defineProps<{
  state: string;
  svgPath: string;
}>();

function getState(state: string) {
  switch (state) {
    case "active":
      return "bg-pale-blurple text-blurple";
    default:
      return "bg-transparent text-dark-grey hover:text-blurple";
  }
}
</script>

<template>
  <div
    :class="getState(state)"
    class="w-[138px] h-[46px] transition-colors text-center font-instrument-bold flex justify-center gap-2 cursor-pointer text-light-grey hover:text-blurple"
  >
    <svg
      class="self-center"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <path fill="#737373" :d="svgPath" />
    </svg>
    <span class="self-center"><slot></slot></span>
  </div>
</template>

<style scoped>
div:hover > svg > path {
  fill: #633cff;
}
</style>
