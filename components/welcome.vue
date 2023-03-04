<template>
  <div class="flex items-center justify-center h-screen">
    <div class="">
      <p class="font-mono text-sm">CYBER SECURITY STUDENT</p>
      <p class="font-mono text-4xl">BEN VARIAN</p>
      <p class="font-mono text-sm">COMPUTER SCIENCE & CYBER SECURITY @ UWA</p>
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
    await store.getRepo("codersforcauses/wadl");
    await store.getRepos();
  } catch (error) {
    console.log(error);
  }
});
</script>
