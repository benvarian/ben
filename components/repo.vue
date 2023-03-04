<template>
  <div v-for="repo in data" :key="data.id">
    <div v-if="Object.keys(repo.languages).length">
    <div
      class="flex-1 px-2 py-2 bg-white border rounded-lg shadow-md hover:bg-gray-100"
    >
      <p
        class="px-4 py-2 text-2xl font-bold font-mono tracking-tight text-gray-900"
      >
        {{ repo.name }}
      </p>
      <p class="font-light px-4 py-2 text-blue-400 hover:underline">
        <NuxtLink :to="repo.url">{{ repo.url }}</NuxtLink>
      </p>
      <div>
        <p class="px-4 py-1">Languages used:</p>
        <div v-for="(amount, language) in repo.languages">
          <p class="px-4 py-1">{{ language }}</p>
        </div>
      </div>
    </div> 
  </div>
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
