import { defineStore } from "pinia";
import type { ProfileInterface, LinkInterface } from "~/types/links.d";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    profile: [] as ProfileInterface[],
    links: [] as LinkInterface[],
  }),
  actions: {
    async getProfile() {
      try {
        const data = await $fetch<ProfileInterface[]>("/api/links", {
          method: "GET",
          headers: useRequestHeaders(["cookie"]),
        });
        this.profile = data ?? [];
        return data;
      } catch (error) {
        console.log(error);
      }
    },
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

    async addLink() {
      const newLink = [
        {
          url: "",
          type: "",
        },
      ];
      try {
        const data = await $fetch("/api/links", {
          method: "POST",
          headers: useRequestHeaders(["cookie"]),
          body: {
            links: newLink,
          },
        });
        this.getLinks();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async saveLinks() {
      try {
        const data = await $fetch("/api/links", {
          method: "PUT",
          headers: useRequestHeaders(["cookie"]),
          body: {
            links: this.links,
          },
        });
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async saveProfile() {
      try {
        const data = await $fetch("/api/links", {
          method: "POST",
          body: {
            profiles: this.profile,
          },
        });
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    setProfile(updatedProfile: ProfileInterface[]) {
      this.profile = updatedProfile;
    },
    setLinks(updatedLinks: LinkInterface[]) {
      this.links = updatedLinks;
    },
  },
});
