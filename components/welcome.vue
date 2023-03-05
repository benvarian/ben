<template>
  <div class="flex items-center justify-center h-[calc(100vh-72px)]">
    <div class="">
      <p class="font-medium text-lg py-1">CYBER SECURITY STUDENT</p>
      <p class="font-medium text-6xl py-1">BEN VARIAN</p>
      <p class="font-medium text-lg py-1">COMPUTER SCIENCE & CYBER SECURITY @ UWA</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useReposStore } from "~~/stores/repos";
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
});
</script>
