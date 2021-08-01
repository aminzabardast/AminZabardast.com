import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { format } from 'date-fns'
import { assign, orderBy } from 'lodash'

Vue.use(Vuex)

export default new Store({
  state: {
    categories: [
      {
        title: 'No Categories',
        id: 0,
        order: 2
      },
      {
        title: 'Book Reviews',
        id: 1,
        order: 1
      }
    ],
    blogPosts: [
      {
        date: Date.parse('2021-07-27T10:00:00'),
        active: true,
        favorite: true,
        category: 0,
        id: 'test-blog-post',
        title: 'Post 1'
      },
      {
        date: Date.parse('2020-09-26T00:00:00'),
        active: true,
        favorite: true,
        category: 0,
        id: 'the-beginning',
        title: 'The Beginning'
      },
      {
        date: Date.parse('2021-04-24T00:00:00'),
        active: true,
        favorite: false,
        category: 0,
        id: 'git-gamification',
        title: 'You do not need to be a developer to use Git'
      }
    ]
  },
  getters: {
    getAllPosts: state => {
      let posts = state.blogPosts.map(post => {
        const year = format(post.date, 'Y')
        const month = format(post.date, 'MM')
        const day = format(post.date, 'd')
        assign(post, {
          year: year,
          month: month,
          day: day,
          url: `/blog/${year}/${month}/${day}/${post.id}`,
          dateString: format(post.date, 'MMM d Y')
        }, post)
        return post
      })
      posts = orderBy(posts, ['date'], ['desc'])
      return posts
    },
    get10latestPosts: (state, getters) => {
      return getters.getAllPosts.slice(0, 10)
    },
    getFavoritePosts: (state, getters) => {
      return getters.getAllPosts.filter(post => post.favorite)
    },
    getPostsByCategory: (state, getters) => (categoryID) => {
      return getters.getAllPosts.filter(post => post.category === categoryID)
    },
    getAllCategories: state => {
      return state.categories
    },
    getPostsByCategories: (state, getters) => {
      const categories = getters.getAllCategories
      categories.map(category => {
        assign(category, {
          posts: getters.getPostsByCategory(category.id)
        }, category)
      })
      return orderBy(categories, ['order'], ['asc'])
    }
  }
})

