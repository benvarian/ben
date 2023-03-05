import { defineStore } from "pinia";

export const useContactStore = defineStore("repos", {
  state() {
    return {};
  },
  actions: {
    async addContact(form) {
        console.log(form);
    },
  },
  getters: {},
});
