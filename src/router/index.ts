import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PageUnderConstruction from '@/views/PageUnderConstruction.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import MediumView from '@/views/MediumView.vue'
import UnsplashPopularView from '@/views/UnsplashPopularView.vue'
import UnsplashRandomView from '@/views/UnsplashRandomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: PageNotFoundView
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: PageUnderConstruction
    },
    {
      path: '/medium',
      name: 'Medium',
      component: MediumView
    },
    {
      path: '/photos',
      redirect: '/photos/random',
      children: [
        {
          path: 'random',
          name: 'Random Photos',
          component: UnsplashRandomView
        },
        {
          path: 'popular',
          name: 'Popular Photos',
          component: UnsplashPopularView
        }
      ]
    }
  ]
})

export default router
