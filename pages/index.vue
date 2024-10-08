<script setup lang="ts">
import type { RealtimeChannel } from "@supabase/supabase-js";
import type { LinkInterface } from "~/types/links";

const client = useSupabaseClient();
const user = useSupabaseUser();

let realtimeChannel: RealtimeChannel;
const links = useState("links", () => [] as LinkInterface[]);

const { data } = await useAsyncData("links", async () => {
  const { data } = await client
    .from("links")
    .select("*")
    .eq("profile_id", user.value.id);
  links.value = data?.slice() ?? [];
  return data;
});

onMounted(() => {
  realtimeChannel = client
    .channel("public:links")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "links" },
      (payload) => {
        if (payload.eventType === "INSERT") {
          links.value = [...links.value, payload.new as LinkInterface];
        } else if (payload.eventType === "UPDATE") {
          const index = links.value.findIndex(
            (link) => link.id === payload.old.id
          );
          if (index !== -1) {
            links.value.splice(index, 1, payload.new as LinkInterface);
          }
        } else if (payload.eventType === "DELETE") {
          const index = links.value.findIndex(
            (link) => link.id === payload.old.id
          );
          if (index !== -1) {
            links.value.splice(index, 1);
          }
        }
      }
    )
    .subscribe();
});

onUnmounted(() => {
  client.removeChannel(realtimeChannel);
});
</script>

<template>
  <div class="flex justify-center bg-off-white h-fit pb-6">
    <div class="grid grid-cols-3 gap-6 bg-off-white">
      <div class="bg-white p-20 flex justify-center rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="308"
          height="632"
          fill="none"
          viewBox="0 0 308 632"
        >
          <path
            stroke="#737373"
            d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
          />
          <path
            fill="#fff"
            stroke="#737373"
            d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
          />
          <circle cx="153.5" cy="112" r="48" fill="#EEE" />
          <rect width="160" height="16" x="73.5" y="185" fill="#EEE" rx="8" />
          <rect width="72" height="8" x="117.5" y="214" fill="#EEE" rx="4" />
          <rect width="237" height="44" x="35" y="278" fill="#EEE" rx="8" />
          <rect width="237" height="44" x="35" y="342" fill="#EEE" rx="8" />
          <rect width="237" height="44" x="35" y="406" fill="#EEE" rx="8" />
          <rect width="237" height="44" x="35" y="470" fill="#EEE" rx="8" />
          <rect width="237" height="44" x="35" y="534" fill="#EEE" rx="8" />
        </svg>
      </div>
      <div class="bg-white flex flex-col col-span-2 rounded-xl p-10 gap-10">
        <div>
          <h3 class="text-3xl font-instrument-bold text-dark-grey">
            Customize your links
          </h3>
          <p class="text-light-grey text-xs">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <AltButton @click="console.log('NYI')" state="active"
          >+ Add new link</AltButton
        >
        <div
          v-show="!links || links.length === 0"
          class="flex flex-col self-center gap-6 text-center bg-off-white p-5 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            height="161"
            fill="none"
            viewBox="0 0 250 161"
            class="self-center"
          >
            <path
              fill="#fff"
              d="M48.694 15.421C23.379 25.224 4.594 50.068.858 80.128c-3.12 25.331 4.335 53.318 48.23 61.291 85.406 15.52 173.446 17.335 193.864-24.525 20.417-41.86-7.525-108.891-50.873-113.53C157.683-.326 98.146-3.721 48.694 15.42Z"
              opacity=".3"
            />
            <path
              fill="#333"
              d="M157.022 9.567H93.044a7.266 7.266 0 0 0-7.266 7.267v120.91a7.266 7.266 0 0 0 7.266 7.266h63.978a7.266 7.266 0 0 0 7.267-7.266V16.834a7.266 7.266 0 0 0-7.267-7.267Z"
            />
            <path
              fill="#333"
              d="M125.033 140.872a5.687 5.687 0 1 0 0-11.374 5.687 5.687 0 0 0 0 11.374Z"
              opacity=".03"
            />
            <path
              fill="#EFEBFF"
              d="M156.628 21.321H93.431V126.78h63.197V21.321Z"
            />
            <path
              fill="#333"
              d="M117.797 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13Z"
              opacity=".03"
            />
            <path
              fill="#fff"
              d="M125.033 120.508a2.066 2.066 0 1 0 0-4.132 2.066 2.066 0 0 0 0 4.132Z"
              opacity=".44"
            />
            <path
              fill="#333"
              d="M132.269 120.508a2.066 2.066 0 1 0 0-4.132 2.066 2.066 0 0 0 0 4.132ZM148.199 32.953h-46.332v39.552h46.332V32.953ZM134.373 80.129h-32.506v3.621h32.506V80.13ZM148.199 80.129h-11.632v3.621h11.632V80.13ZM117.053 91.237h-15.186v3.622h15.186v-3.622ZM148.199 91.237H120.28v3.622h27.919v-3.622ZM136.954 102.353h-35.087v3.622h35.087v-3.622Z"
              opacity=".03"
            />
            <path
              fill="#EFEBFF"
              d="M78.656 21.321H15.459V126.78h63.197V21.321Z"
            />
            <path
              fill="#fff"
              d="M39.825 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13Z"
              opacity=".44"
            />
            <path
              fill="#333"
              d="M47.061 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13ZM54.297 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13ZM70.227 32.953H23.895v39.552h46.332V32.953ZM56.4 80.129H23.895v3.621H56.4V80.13ZM70.227 80.129H58.595v3.621h11.632V80.13ZM39.08 91.237H23.896v3.622H39.08v-3.622ZM70.227 91.237h-27.92v3.622h27.92v-3.622ZM58.982 102.353H23.895v3.622h35.087v-3.622Z"
              opacity=".03"
            />
            <path
              fill="#EFEBFF"
              d="M234.6 21.321h-63.197V126.78H234.6V21.321Z"
            />
            <path
              fill="#333"
              d="M195.769 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13ZM203.005 120.508a2.066 2.066 0 1 0 0-4.132 2.066 2.066 0 0 0 0 4.132Z"
              opacity=".03"
            />
            <path
              fill="#fff"
              d="M210.242 120.508a2.066 2.066 0 1 0-.001-4.131 2.066 2.066 0 0 0 .001 4.131Z"
              opacity=".44"
            />
            <path
              fill="#333"
              d="M226.171 32.953h-46.332v39.552h46.332V32.953ZM212.345 80.129h-32.506v3.621h32.506V80.13ZM226.171 80.129h-11.632v3.621h11.632V80.13ZM195.025 91.237h-15.186v3.622h15.186v-3.622ZM226.179 91.237H198.26v3.622h27.919v-3.622ZM214.926 102.353h-35.087v3.622h35.087v-3.622Z"
              opacity=".03"
            />
            <path
              fill="#333"
              d="M146.597 145.041c0-.76-1.61-31.891-.577-36.522 1.033-4.632 10.509-27.274 8.011-29.917-2.498-2.642-11.648 3.372-11.648 3.372s1.671-27.267-2.278-29.21c-3.948-1.944-5.702 5.671-5.702 5.671L132.3 88.936l-10.418 55.96 24.715.145Z"
              opacity=".1"
            />
            <path
              fill="#F4A28C"
              d="M139.559 113.295c1.328-5.316 3.325-10.502 4.601-15.87.843-3.553 6.295-18.405 7.821-22.779.47-1.344.873-2.969-.038-4.062a2.646 2.646 0 0 0-2.422-.76 4.842 4.842 0 0 0-2.339 1.223c-1.519 1.337-4.32 7.95-6.371 7.943-2.482 0-1.313-6.834-1.381-8.148-.281-5.656.136-12.908-2.073-18.223-1.64-3.948-5.71-3.417-6.667.85-.957 4.268-.919 22.15-.919 22.15s-15.884-2.727-18.595 2.118c-2.711 4.844 1.868 35.618 1.868 35.618l26.515-.06Z"
            />
            <path
              fill="#633CFF"
              d="m141.495 160.5-.289-48.906-29.681-6.515L99.574 160.5h41.921Z"
            />
            <path
              fill="#333"
              d="m141.495 160.5-.289-48.906-14.168-3.113-2.536 52.019h16.993Z"
              opacity=".1"
            />
          </svg>
          <div class="w-1/2 self-center">
            <h2 class="text-3xl font-instrument-bold text-dark-grey">
              Let's get you started
            </h2>
            <p class="text-light-grey text-xs">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>
        <div v-show="links">
          <LinkEditor :links="links" />
        </div>
      </div>
    </div>
  </div>
</template>
