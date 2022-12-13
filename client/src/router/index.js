import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notfound from '../views/404.vue'
//import Header from '../app_header.vue'
import Nosotros from '../views/Nosotros.vue'
import Informacion from '../views/Informacion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',  
    component: () => import('../views/Home.vue')
  },
  {
    path: '/notfound',
    name: 'Notfound',
    //component: Header
    component: () => import('../views/404.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/informacion',
    name: 'Informacion',
    component: Informacion
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
