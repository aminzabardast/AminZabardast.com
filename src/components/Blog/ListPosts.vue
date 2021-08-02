<template>
  <v-container
      class="pb-10"
  >
    <h3
        class="pb-2"
        v-if="category"
    >
      {{ category }}
    </h3>
    <div
        v-if="posts.length"
    >
      <div
          v-for="post in posts"
          v-bind:key="post.id"
      >
        <router-link
            :to="post.url"
        >
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
          <span class="block title-block">
          {{ post.title }}
        </span>
        </router-link>
      </div>
    </div>
    <div
        v-else
    >
      No Posts Here!
    </div>
  </v-container>
</template>

<script lang="js">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ListPosts',
  props: [
    'posts',
    'category'
  ]
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
  width: 200px;
}
.title-block {}
.favorite-block {
  width: 20px;
}
</style>