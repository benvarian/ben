<template>
  <div
    class="sticky top-0 w-full bg-white flex flex-row justify-between py-6 px-20"
  >
    <div class="place-items-center px-4">
      <NuxtLink to="/">
        <p class="font-mono font-light">BEN VARIAN</p>
      </NuxtLink>
    </div>
    <div class="flex flex-row gap-8 px-4">
      <div v-for="items in navigation" :key="navigation.name">
        <NuxtLink :to="items.href">
          <p class="font-light font-mono">{{ items.name }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
  <hr class="bg-gray-50 mx-24 pb-0.5" />
</template>

<script setup>
const navigation = [
  { name: "Work", href: "work", current: true },
  { name: "Development", href: "development", current: false },
  { name: "Contact", href: "contact", current: false },
];
</script>
