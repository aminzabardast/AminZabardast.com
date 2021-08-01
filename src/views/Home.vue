<template>
  <v-container>
    <div class="text-left">
      <p>
        Hey! I'm Amin.
        Welcome to my personal corner of the internet.
      </p>
      <p>
        Here are the most recent posts I have written.
        A complete list is available in the <router-link to="/blog">Blog</router-link> section.
        Enjoy!
      </p>
    </div>
    <blog-post-list
        :posts="last10BlogPosts"
        category="Most Recent Blog Entries"
    ></blog-post-list>
  </v-container>
</template>

<script lang="js">
import { defineComponent, ref } from '@vue/composition-api'
import BlogPostList from '@/components/Blog/ListPosts'
import useStore from '@/hooks/store'

export default defineComponent({
  name: 'Home',
  components: {
    BlogPostList
  },
  setup () {
    const { store } = useStore()
    const last10BlogPosts = ref(store.getters.get10latestPosts)
    return {
      last10BlogPosts
    }
  }
})
</script>

<style scoped>
* {
  font-family: 'Georgia', sans-serif;
}
</style>

<style>
p {
  font-size: 1.1em;
}
</style>
