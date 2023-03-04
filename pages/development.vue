<template>
  <div v-if="!obj.loading" class="flex justify-center py-10">
    <div class="grid gap-4">
      <repo :data="store.repos" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useUserStore } from "~~/stores/user";
const store = useUserStore();
const obj = reactive({
  loading: true,
});
onMounted(async () => {
  try {
    await store.getRepos();
  } catch (error) {
    console.log(error);
  }
  obj.loading = false;
});
</script>
