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
      return 'rounded-xl transparent font-instrument-bold text-pale-blurple border-pale -blurple border-2  w-[227px] h-[46px]'
    default:
      return 'rounded-xl transparent hover:bg-pale-blurple font-instrument-bold text-blurple border-blurple border-2 w-[227px] h-[46px]'
  }
}
</script>

<template>
  <button :class="getState(props.state)">
    <slot></slot>
  </button>
</template>
