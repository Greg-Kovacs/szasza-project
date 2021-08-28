import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Albums from '../components/Albums'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
