<template>
  <div class="container">
    <div class="title">Main Page</div>
    <div class="description">Welcome to my website! Here are some articles:</div>
    <NuxtLink href="page1" class="index-link">Space, the final frontier</NuxtLink>
    <NuxtLink href="page2" class="index-link">Animals</NuxtLink>
    <NuxtLink href="page3" class="index-link">The Future</NuxtLink>
    <div class="description">Feel free to explore and enjoy!</div>
    <AuthLogout/>
  </div>
</template>

<script setup>

useHead({
  title: 'Main Page'
})

definePageMeta({
  middleware: 'is-authenticated'
});
</script>