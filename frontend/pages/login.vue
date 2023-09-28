<template>
  <form class="container" @submit.prevent="handleLogin()">
    <h2 class="title">Authentication</h2> 
    <input 
      v-model="creds.login"
      type="text" 
      class="input-field" 
      placeholder="Username"  
      name="username"
      autocomplete="username"
    >
    <input 
      v-model="creds.password" 
      type="password" 
      class="input-field" 
      placeholder="Password" 
      name="password"
      autocomplete="current-password"
    >
    <button type="submit" class="login-button">Login</button>
  </form>
</template>

<script setup lang="ts">
import { usePostAsyncData } from '~/composables/useAsyncData';
import { setCookie } from '@/middleware/setCookie'

const creds = ref({
  login: null,
  password: null
})

const router = useRouter()

const handleLogin = async () => {
  try {
    const response = await usePostAsyncData('login', creds.value);
    const token = response.token;

    if(token) {
      document.cookie = setCookie('accessToken', token, {
        maxAge: 365 * 24 * 60 * 60, // здесь - 1 год
        path: '/',
      }); // в контроллере на бэке нет кукисов :(

      router.push('/')
    }

  } catch (error) {
    console.error('Login failed:', error); // можно было бы отображать ошибочку для UX'a
  }
}

useHead({
  title: 'Login'
})

definePageMeta({
  middleware: 'if-authed'
});
</script>