<template>
  <v-container>
    <div class="pa-3 pb-8">
      View all my <router-link to="/blog/favorites">favorite posts</router-link>.
    </div>
    <div v-for="category in postsByCategories" v-bind:key="category.id">
      <blog-post-list-item
          :posts="category.posts"
          :category="category.title"
      ></blog-post-list-item>
    </div>
  </v-container>
</template>

<script lang="js">
import { defineComponent, ref } from '@vue/composition-api'
import useStore from '@/hooks/store'
import BlogPostListItem from '@/components/Blog/ListPosts'

export default defineComponent({
  name: 'BlogPosts',
  components: {
    BlogPostListItem
  },
  setup () {
    const { store } = useStore()
    const postsByCategories = ref(store.getters.getPostsByCategories)
    return {
      postsByCategories
    }
  }
})
</script>

<style scoped>

</style>
