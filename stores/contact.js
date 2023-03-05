import { defineStore } from "pinia";
import { useNuxtApp } from "#imports";
import { addDoc, collection } from "firebase/firestore";

export const useContactStore = defineStore("contact", {
  actions: {
    async addContact(form) {
      const { $clientFirestore } = useNuxtApp();
      const ref = collection($clientFirestore, "contacts");
      await addDoc(ref, form);
    },
  },
  getters: {},
});
