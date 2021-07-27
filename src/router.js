import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import BlogPostList from "./views/Blog/BlogPostList";
import BlogPost from "./views/Blog/BlogPost";

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog/Blog'),
      children: [
        {
          path: '',
          name: 'blog_post_list',
          component: BlogPostList
        },
        {
          path: ':year/:month/:day/:id',
          name: 'blog_post',
          component: BlogPost
        }
      ]
    }
  ]
})
