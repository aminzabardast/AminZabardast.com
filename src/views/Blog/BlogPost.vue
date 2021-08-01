<template>
  <v-container>
    <div v-if="loading">Loading ...</div>
    <VueShowdown
      :markdown="rawPost"
      :extensions="extensions"
    />
  </v-container>
</template>

<script lang="js">
import { defineComponent, ref, onMounted } from '@vue/composition-api'
import showdownHighlight from 'showdown-highlight'
import axios from 'axios'
import 'highlight.js/styles/github.css'

export default defineComponent({
  name: 'BlogPost',
  setup (props, context) {
    const route = context.root.$route;
    const params = route.params
    const baseUrl = process.env.BASE_URL
    onMounted(() => {
      const location = `${baseUrl}blog_posts/${params.year}/${params.month}/${params.day}/${params.id}.md`
      axios.get(location).then((data) => {
        loading.value = false
        rawPost.value = data.request.response
      }).catch((error) => {
        if (error.response.status === 404) {
          loading.value = false
          rawPost.value = 'No Such Post is Available'
        }
      })
    })
    const extensions = [
      showdownHighlight({pre: true})
    ]
    const rawPost = ref('')
    const loading = ref(true)
    return {
      loading,
      rawPost,
      extensions
    }
  }
})
</script>

<style>
img {
  width: 100%;
}
</style>
