<template>
  <div class="sticky top-0 w-full bg-gray-200 flex flex-row justify-between py-2">
    <div class="place-items-center px-4">
      <NuxtLink to="/">
        <p>B</p>
      </NuxtLink>
    </div>
    <div class="flex flex-row gap-8 px-4">
      <div v-for="items in navigation" :key="navigation.name">
        <NuxtLink :to="items.href">
          <p>{{ items.name }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const navigation = [
  { name: "Work", href: "work", current: true },
  { name: "Development", href: "development", current: false },
  { name: "Contact", href: "contact", current: false },
];
</script>
