<template>
  <v-container>
    <div class="text-center">
      <p>
        Hey! I'm Amin.
        Welcome to my personal corner of the internet.
        I am interested in Data Science, Computer Graphics, Books.
      </p>
    </div>
  </v-container>
</template>

<script lang="js">
import { defineComponent } from '@vue/composition-api'
import BlogPostList from '@/components/Blog/ListPosts'

export default defineComponent({
  name: 'Home',
  components: {
    BlogPostList
  }
})
</script>

<style scoped>

</style>
