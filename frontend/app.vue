<template>
  <div>
    <!-- <Loader v-if="loading"/> -->
    <NuxtPage/>
  </div>
</template>

<script setup>
import Loader from "~/components/Loader.vue";

const nuxtApp = useNuxtApp();
const loading = ref(true)

nuxtApp.hook("page:start", () => {
    loading.value = true;
});

nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    loading.value = false;
  }, 500)
});
</script>