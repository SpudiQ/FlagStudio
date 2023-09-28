<template>
  <div class="container">
    <div class="title">{{ response ? response.title : '' }}</div>
    <div class="article" v-if="response" v-html="response.content"/>
    <p>
      <NuxtLink href="/" class="home-button">Back to Home</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useFetchAsyncData } from '#imports';
import { PageData } from '@/models/page.model'

let response: PageData | null = ref(null);

try {
  response = await useFetchAsyncData('pages/page3') as PageData;
} catch (e) {
  console.error(e);
}

useHead({
  title: response?.title
})

definePageMeta({
  middleware: 'is-authenticated'
});
</script>