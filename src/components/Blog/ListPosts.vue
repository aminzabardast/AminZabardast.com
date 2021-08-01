<template>
  <v-container class="pb-10 body-1">
    <div
        class="pb-5 text-h6"
    >
      {{ category }}
    </div>
    <div
        v-for="post in posts"
        v-bind:key="post.id"
    >
      <router-link :to="post.url">
        <span class="block date-block">
          {{ post.dateString }}
        </span>
        <span class="block favorite-block">
          <v-icon
              small
              v-if="post.favorite"
              color="#a62400"
          >
            mdi-star
          </v-icon>
        </span>
        <span class="block title-block">{{ post.title }}</span>
      </router-link>
    </div>
  </v-container>
</template>

<script lang="js">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'ListPosts',
  props: [
      'posts',
      'category'
  ],
  setup (props) {
    const posts = ref(props.posts)
    return {
      posts
    }
  }
})
</script>

<style scoped>
a {
  color: black !important;
}
a:hover {
  color: #00a693 !important;
}
.block {
  display: inline-block;
}
.date-block {
  width: 150px;
}
.title-block {}
.favorite-block {
  width: 20px;
}
</style>