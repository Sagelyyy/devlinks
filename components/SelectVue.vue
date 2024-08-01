<script setup lang="ts">
interface ItemInterface {
  id: number;
  name: string;
  selected?: boolean;
  path: string;
}

const props = defineProps<{
  items: ItemInterface[];
}>();

const isOpen = ref(false);
const currentIcon = ref("");
const currentSelection = ref();
const currentType = ref("");

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function setType(type: string) {
  currentType.value = type;
}

function selectItem(id: number) {
  currentSelection.value = props.items.find((item) => item.id === id);
}

function setIcon(path: string) {
  currentIcon.value = path;
}

onMounted(() => {
  props.items.forEach((item, index) => {
    if (item.selected) {
      setIcon(item.path);
      currentSelection.value = index;
      currentType.value = item.name;
    }
  });
});

function updateSelection(link_id: number, type: string) {
  console.log(link_id, type);
  try {
    $fetch("/api/links/", {
      method: "POST",
      headers: useRequestHeaders(["cookie"]),
      body: {
        id: link_id,
        type,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="relative w-full">
    <svg
      class="absolute top-4 left-6 z-40"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path fill="#737373" :d="currentIcon" />
    </svg>
    <ul
      @click="toggleDropdown"
      class="relative pl-12 rounded-xl w-full h-[48px] bg-white font-instrument-regular text-grey border-pale-grey border-2 hover:border-blurple hover:cursor-pointer outline-none"
    >
      <span class="absolute top-1/4 left-16 select-none">
        {{ currentType || "Select an option..." }}</span
      >
      <svg
        :class="isOpen ? 'rotate-180' : 'rotate-0'"
        class="absolute top-4 right-6 transition-transform"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="9"
        fill="none"
        viewBox="0 0 14 9"
      >
        <path stroke="#633CFF" stroke-width="2" d="m1 1 6 6 6-6" />
      </svg>
      <div
        v-show="isOpen"
        class="absolute top-14 left-0 rounded-xl w-full bg-white font-instrument-regular text-grey border-pale-grey border-2 p-2 z-10 shadow-xl"
      >
        <li
          @click="
            [
              selectItem(item.id),
              setIcon(item.path),
              updateSelection(item.id, item.name),
              setType(item.name),
            ]
          "
          :class="item.selected ? 'text-blurple' : ''"
          v-for="(item, index) in items"
          :key="item.id"
          class="border-b-2 border-pale-grey p-2 hover:text-blurple last:border-none flex gap-2 self-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              :fill="item.selected ? '#633CFF' : '#737373'"
              :d="item.path"
            />
          </svg>
          <span class="self-center">
            {{ item.selected ? item.name + " (Selected)" : item.name }}</span
          >
        </li>
      </div>
    </ul>
  </div>
</template>

<style scoped></style>
