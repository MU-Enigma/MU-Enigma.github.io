import { createRouter, createWebHistory } from "vue-router"
import Home from './Home.vue'
import About from './About.vue'
import Blogs from './Blogs.vue'
import BlogsList from '../components/blogs/BlogsList.vue'
import BlogPost from '../components/blogs/BlogPost.vue'
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
      path: '/blogs',
      component: Blogs,
      name: 'blogs',
      children: [
        {
          path: '',
          component: BlogsList,
          name: 'blog-list'
        },
        {
          path: ':post',
          component: BlogPost,
          name: 'post'
        }
      ]
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