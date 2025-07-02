// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import MainApp from '@/views/main.vue'
import InicioPage from '@/views/pages/inicioPage.vue'
import ContatoPage from '@/views/pages/contatoPage.vue'
import ProjectsPage from '@/views/pages/projectsPage.vue'

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
        path: '/projetos',
        name: 'Projetos',
        component: ProjectsPage
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