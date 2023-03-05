<template>
  <section class="flex items-center justify-center h-[calc(100vh-72px)]">
    <form class="" @submit.prevent="submitForm">
      <div class="">
        <p class="font-medium text-5xl pb-10">Get in touch.</p>
        <FormField
          v-model="form.name"
          label="Your name"
          placeholder="name"
          type="text"
        />
        <FormField
          v-model="form.email"
          label="Your email"
          placeholder="email"
          type="email"
        />
        <FormField
          v-model="form.interest"
          label="What are you interested in"
          placeholder="interest"
          type="text"
        />
        <div class="pt-2">
          <Button
            size="xlarge"
            buttonText="Submit"
            buttonColor="bg-black"
            textColor="text-white"
          />
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { useContactStore } from "~~/stores/contact";
const store = useContactStore();
const form = reactive({
  name: "",
  email: "",
  interest: "",
});
const submitForm = async () => {
  try {
    await store.addContact(form);
  } catch (error) {
    console.log(error);
  }
};
</script>
