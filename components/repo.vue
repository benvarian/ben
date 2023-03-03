<template>
  <div v-for="repo in data" :key="data.id">
    <p>{{ repo.name }}</p>
    <p>{{ repo.url }}</p>
    <p>{{ repo.readme }}</p>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: "",
  },
});
</script>
