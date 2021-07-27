<template>
  <v-container class="py-0">
    <div v-if="loading">Loading ...</div>
    <div style="width: 100%" v-else v-html="html"></div>
  </v-container>
</template>

<script lang="js">
import { defineComponent, ref, computed, onMounted } from '@vue/composition-api'
import showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'
import 'showdown-prettify'
import axios from 'axios'
import 'highlight.js/styles/github.css'

export default defineComponent({
  name: 'BlogPost',
  setup (props, context) {
    const route = context.root.$route;
    const params = route.params
    const baseUrl = process.env.BASE_URL
    onMounted(() => {
      const location = `${baseUrl}blog_posts/${params['year']}/${params.month}/${params.day}/${params.id}.md`
      axios.get(location).then((data) => {
        loading.value = false
        rawPost.value = data.request.response
      })
    })

    const rawPost = ref('')

    showdown.setFlavor('github')
    const converter = new showdown.Converter({
      extensions: [
          showdownHighlight({pre: true}), 'prettify'
      ]
    })
    const html = computed(() => {
      return converter.makeHtml(rawPost.value)
    })
    const loading = ref(true)
    return {
      loading,
      html
    }
  }
})
</script>

<style>
code.hljs {
  width: 100% !important;
}
</style>
