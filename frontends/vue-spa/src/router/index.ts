import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const PROTECTED_ROUTES = ['dashboard']
  console.log(to.name)
  const authRequired = PROTECTED_ROUTES.includes(to.name as string)
  if (authRequired && !localStorage.getItem('access_token')) {
    console.log('AUth required')
    next('/login')
  }

  next()
})

export default router
