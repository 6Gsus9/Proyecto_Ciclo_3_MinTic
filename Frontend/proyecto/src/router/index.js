import Vue from 'vue'
import VueRouter from 'vue-router'
// importacion de pagina inicio
import inicio from '../views/inicio.vue'

Vue.use(VueRouter)

const routes = [
  // {// primera pagina es la de inicio
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {// primera pagina es la de inicio
    path: '/',
    name: 'inicio',
    component: inicio
  },
  {
    path: '/registro',
    name: 'registro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/registro.vue')
  },
  {
    path: '/cursos',
    name: 'cursos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaDeCursos.vue')
  },
  {
    path: '/ListaDeEstudiantes',
    name: 'ListaE',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaDeEstudiante.vue')
  },{
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/ProgramarCurso',
    name: 'ProgramarCurso',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProgramarCurso.vue')
  },
  {
    path: '/DescripCurso',
    name: 'DescripCurso',
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoCurso.vue')
  },
  {
    path: '/Clases-Pendientes',
    name: 'Clases-Pendientes',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClassDates.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
