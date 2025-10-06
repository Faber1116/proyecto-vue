import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/Contador.vue'),
    },
    {
      path: '/lista-tareas',
      name: 'lista-tareas',
      component: () => import('../components/ListaTareas.vue'),
    }
  ],
})

export default router
