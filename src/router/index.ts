// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import MainApp from '@/views/main.vue'
import InicioPage from '@/views/pages/inicioPage.vue'
import SobrePage from '@/views/pages/sobrePage.vue'
import ContatoPage from '@/views/pages/contatoPage.vue'

const routes = [
  {
    path: '/',
    component: MainApp,
    children: [
      {
        path: '',
        name: 'Inicio',
        component: InicioPage
      },
      {
        path: '/sobre',
        name: 'sobre',
        component: SobrePage
      },
      {
        path: '/contato',
        name: 'contato',
        component: ContatoPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router