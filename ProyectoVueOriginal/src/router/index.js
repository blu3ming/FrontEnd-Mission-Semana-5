import { createRouter, createWebHashHistory } from 'vue-router'
import ArmaPastel from '../views/ArmaPastel.vue'
import Pastelero from '../views/Pastelero.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ArmaPastel
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: Pastelero
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
