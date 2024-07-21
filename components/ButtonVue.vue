<script setup lang="ts">
const props = defineProps({
  state: {
    type: String,
    required: true
  }
})

function getState(state: string) {
  switch (state) {
    case 'disabled':
      return 'rounded-xl bg-pale-blurple font-instrument-bold text-white w-[227px] h-[46px]'
    default:
      return 'rounded-xl bg-blurple hover:bg-light-blurple font-instrument-bold text-white w-full h-[46px]'
  }
}
</script>

<template>
  <button :class="getState(props.state)">
    <slot></slot>
  </button>
</template>
