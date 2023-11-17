<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "../stores/user";
import router from "../router";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


const email = ref("");
const password = ref("");
const errorMessage = ref("");
async function register(){
  try {
    const res = await axios.post(`${BACKEND_URL}/auth/login`, {
    email: email.value,
    password: password.value,
  });
  console.log(res);
  localStorage.setItem("access_token", res.data.access_token);
  await userStore.getUserDetails()
  // move the user to /dashboard
  router.push('/dashboard')
  } catch (error:any) {

    errorMessage.value = error.response.data
    
  }

  
}
const userStore = useUserStore()
</script>

<template>
  <main>
    <span v-if="errorMessage">{{errorMessage}}</span>

    Login
    <form @submit.prevent="register">
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </main>
</template>
