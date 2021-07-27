import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import Blog from './views/Blog/Blog'
import BlogPostList from './views/Blog/BlogPostList'
import BlogPost from './views/Blog/BlogPost'

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
      component: About
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
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
