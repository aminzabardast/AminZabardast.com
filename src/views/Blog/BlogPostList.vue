<template>
  <v-container>
    <blog-post-list-item
        :posts="blogPosts"
        category="Last 10 Posts"
    ></blog-post-list-item>
  </v-container>
</template>

<script lang="js">
import { defineComponent, ref } from '@vue/composition-api'
import useStore from '@/hooks/store'
import BlogPostListItem from '@/components/Blog/ListPosts'

export default defineComponent({
  name: 'BlogPostList',
  components: {
    BlogPostListItem
  },
  setup () {
    const { store } = useStore()
    const blogPosts = ref(store.getters.getAllPosts)
    return {
      blogPosts
    }
  }
})
</script>

<style scoped>

</style>
