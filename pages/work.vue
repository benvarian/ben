<template>
  <div v-if="!loading" class="flex items-center justify-center h-[calc(100vh-72px)] px-24">
    <div class="">
      <p class="text-center pb-24 text-5xl font-medium">
        What im currently working on.
      </p>
      <div class="px-6 py-4 bg-white border rounded-lg shadow-md">
        <p class="font-bold font-mono text-2xl px-2 py-2">
          {{ store.repo.name }}
        </p>
        <p class="font-light font-mono px-2 py-2">
          url:
          <span class="hover:underline text-blue-400">
            <NuxtLink :to="store.repo.url">{{ store.repo.url }}</NuxtLink></span
          >
        </p>
        <p class="font-light font-mono px-2 py-2">
          Description: {{ store.repo.description }}
        </p>
        <p class="font-light font-mono px-2 py-2">
          Commits: {{ store.repo.commits }}
        </p>
        <div>
          <p class="font-light font-mono px-2 py-2">Languages used:</p>
          <div v-for="(amount, language) in store.repo.languages">
            <p class="font-light font-mono px-2 py-1">{{ language }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useReposStore } from "~~/stores/repos";
import { onMounted, ref } from "vue";
const loading = ref(true);
const store = useReposStore();
onMounted(async () => {
  try {
    store.repos = [];
    store.repo = null;
    await store.getRepo();
    await store.getRepos();
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
});
</script>
