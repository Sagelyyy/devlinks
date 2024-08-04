import type { LinkInterface } from "~/types/links.d";

export const useLinkStore = defineStore("links", {
  state: () => ({
    links: [] as LinkInterface[],
  }),
  actions: {
    async getLinks() {
      try {
        const data = await $fetch<LinkInterface[]>("/api/links", {
          method: "GET",
          headers: useRequestHeaders(["cookie"]),
        });
        this.links = data ?? [];
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async saveLinks() {
      console.log(this.links);
      try {
        const data = await $fetch("/api/links", {
          method: "POST",
          body: {
            links: this.links,
          },
        });
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    setLinks(updatedLinks: LinkInterface[]) {
      this.links = updatedLinks;
    },
  },
});
