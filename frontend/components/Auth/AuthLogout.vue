<template>
    <button @click="logout()" class="home-button">
        Logout
    </button>
</template>

<script setup lang="ts">
import { deleteCookie } from '@/composables/utils'

const router = useRouter()

const logout = () => {
    deleteCookie('accessToken')
    router.push('/login')
}
</script>