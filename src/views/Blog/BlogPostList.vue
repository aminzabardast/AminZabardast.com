<template>
  <v-container>
    <ul v-for="post in blogPosts" :key="post.id">
      <li><router-link :to="post.url">{{ post.date }} / {{ post.title }}</router-link></li>
    </ul>
  </v-container>
</template>

<script lang="js">
import { defineComponent, ref } from '@vue/composition-api'
import store from '../../store.js'

export default defineComponent({
  name: 'BlogPostList',
  setup () {
    const blogPosts = ref(store.getters.getAllPosts)
    return {
      blogPosts
    }
  }
})
</script>

<style scoped>

</style>
