import { createRouter, createWebHistory } from 'vue-router'
import MainApp from '@/views/main.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: MainApp
}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
