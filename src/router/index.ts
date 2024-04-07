import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
//import  HomeView from '@/views/System/HomeView.vue';
import VerEstudiantes from '@/views/System/VerEstudiantes.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  /*   {
      path: '/',
      name: 'home',
      component: HomeView
    }, */
   
    {
      path: '/agregar-estudiante',
      name: 'agregar-estudiante',
      component: () => import('@/views/System/AgregarEstudiante.vue'),
      props:{titulo:'agregar nuevo estudiante'}
    },
    {
      path: '/ver-estudiantes',
      name: 'ver-estudiantes',
      component:() => import('@/views/System/VerEstudiantes.vue')
    },
    
  ]
})

export default router
