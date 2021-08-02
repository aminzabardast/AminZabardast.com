<template>
  <v-container>
    <blog-post-list-item
        :posts="favorites"
        category="Favorites"
    ></blog-post-list-item>
  </v-container>
</template>

<script lang="js">
import { defineComponent, ref } from '@vue/composition-api'
import useStore from '@/hooks/store'
import BlogPostListItem from '@/components/Blog/ListPosts'

export default defineComponent({
  name: 'BlogFavoritePosts',
  components: {
    BlogPostListItem
  },
  setup () {
    const { store } = useStore()
    const favorites = ref(store.getters.getFavoritePosts)
    return {
      favorites
    }
  }
})
</script>

<style scoped>

</style>
