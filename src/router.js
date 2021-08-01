import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog/Blog'),
      children: [
        {
          path: '',
          name: 'blog_post_list',
          component: () => import('./views/Blog/BlogPostList')
        },
        {
          path: ':year/:month/:day/:id',
          name: 'blog_post',
          component: () => import('./views/Blog/BlogPost')
        }
      ]
    }
  ]
})
