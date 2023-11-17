<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserStore } from '../stores/user';


const userStore = useUserStore()

onMounted(async () => {
  await userStore.getUserDetails()
})
</script>

<template>
  <main>
Welcome, {{ userStore.user?.email }}
  </main>
</template>
