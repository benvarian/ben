<template>
  <div class="flex justify-center py-10">
    <div class="grid gap-4">
      <repo :data="store.repos" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "~~/stores/user";
const store = useUserStore();
onMounted(async () => {
  try {
    await store.getRepos();
  } catch (error) {
    console.log(error);
  }
});
</script>
