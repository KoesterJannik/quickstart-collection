<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/user';
import router from './router';


const userStore = useUserStore()

function logoutUser(){
  userStore.logout()
  router.push('/login')
}
</script>

<template>

  <div>


    <button v-if="userStore.user" @click="logoutUser">Logout</button>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
    
    <RouterView />
  </div>
</template>

