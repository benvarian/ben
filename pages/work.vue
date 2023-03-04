<template>
  <div class="flex items-center justify-center h-screen">
    <div class="">
      <p class="text-center pb-2 text-2xl font-bold font-mono">What im currently working on</p>
      <div class="px-2 py-2 bg-white border rounded-lg shadow-md ">
        <p class="font-bold font-mono text-2xl px-2 py-2">{{ store.repo.name }}</p>
        <p class="font-light font-mono px-2 py-2">
          url:
          <span class="hover:underline text-blue-400">
            <NuxtLink :to="store.repo.url">{{ store.repo.url }}</NuxtLink></span
          >
        </p>
        <p class="font-light font-mono px-2 py-2">Description: {{ store.repo.description }}</p>
        <p class="font-light font-mono px-2 py-2">Commits: {{ store.repo.commits }}</p>
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
import { useReposStore } from "~~/stores/repos";;
const store = useReposStore();
</script>
