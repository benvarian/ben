<template>
  <div>
    <repo :data="store.repos" />
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
