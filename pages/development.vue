<template>
  <div v-if="!loading" class="flex flex-col items-center justify-center py-10">
    <p class="text-center pt-10 pb-20 text-5xl font-medium">
        Previous Projects.
      </p>
    <div class="grid gap-4">
      <repo :data="store.repos" />
    </div>
  </div>
</template>

<script setup>
import { useReposStore } from "~~/stores/repos";
import { onMounted, ref } from "vue";
const store = useReposStore();
const loading = ref(true);
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
