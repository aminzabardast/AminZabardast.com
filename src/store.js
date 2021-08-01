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
        id: 0
      },
      {
        title: 'Book Reviews',
        id: 1
      }
    ],
    blogPosts: [
      {
        date: Date.parse('2021-07-27T10:00:00'),
        active: true,
        favorite: true,
        category: 1,
        id: 'test-blog-post',
        title: 'Post 1'
      },
      {
        date: Date.parse('2021-07-27T12:00:00'),
        active: true,
        favorite: false,
        category: 1,
        id: 'test-blog-post',
        title: 'Post 2'
      },
      {
        date: Date.parse('2021-07-25T00:00:00'),
        active: true,
        favorite: false,
        category: 1,
        id: 'test-blog-post',
        title: 'Post 3'
      },
      {
        date: Date.parse('2021-12-26T00:00:00'),
        active: true,
        favorite: true,
        category: 1,
        id: 'test-blog-post',
        title: 'Post 4'
      },
      {
        date: Date.parse('2020-09-26T00:00:00'),
        active: true,
        favorite: false,
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
    getAllPosts (state) {
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
    get10latestPosts (state, getters) {
      return getters.getAllPosts.slice(0, 2)
    }

  }
})

