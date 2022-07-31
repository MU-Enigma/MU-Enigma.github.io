import { createRouter, createWebHistory } from "vue-router"
import Home from './Home.vue'
import About from './About.vue'
import Events from './Events.vue'
import Gallery from './Gallery.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    },
    {
      path: '/events',
      component: Events,
      name: 'events'
    },
    {
      path: '/gallery',
      component: Gallery,
      name: 'gallery'
    }
  ]
})