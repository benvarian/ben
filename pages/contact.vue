<template>
  <section>
    <form @submit.prevent="">
      <div class="px-10">
        <FormField
          label="Your name"
          placeholder="name"
          required="true"
          type="text"
        />
        <FormField
          label="Your email"
          placeholder="email"
          required="true"
          type="email"
        />
        <FormField
          label="What are you interested in"
          placeholder="interest"
          required="false"
          type="text"
        />
      </div>
    </form>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
