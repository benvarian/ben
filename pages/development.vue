<template>
  <div class="flex justify-center py-10">
    <div class="grid gap-4">
      <repo :data="store.repos" />
    </div>
  </div>
</template>

<script setup>
import { useReposStore } from "~~/stores/repos";
const store = useReposStore();
</script>
