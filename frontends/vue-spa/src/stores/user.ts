import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const useUserStore = defineStore('user', () => {
  const user: any = ref()
  const getUserDetails = async () => {
    const token = localStorage.getItem('access_token')
    const { data } = await axios.get(`${BACKEND_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(data)
    user.value = data
  }
  const logout = () => {
    localStorage.removeItem('access_token')
    user.value = null
  }

  return { user, getUserDetails, logout }
})
