import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { format } from 'date-fns'

Vue.use(Vuex)

export default new Store({
  state: {
    blogPosts: [
      {
        date: Date.parse('2021-07-27'),
        active: true,
        id: 'test-blog-post'
      }
    ]
  },
  getters: {
    getAllPosts (state) {
      return state.blogPosts.map(post => {
        const year = format(post.date, 'Y')
        const month = format(post.date, 'MM')
        const day = format(post.date, 'd')
        return {
          id: post.id,
          url: `/blog/${year}/${month}/${day}/${post.id}`,
          date: format(post.date, 'MMM d, Y'),
          title: 'Blogg'
        }
      })
    }
  }
})

