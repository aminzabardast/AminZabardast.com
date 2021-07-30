<template>
<!--  TODO: Add avatar -->
  <v-container class="py-4">
    <div>
      <h1 class="text--accent-4 pb-3"><router-link class="name" to="/">Amin Zabardast</router-link></h1>
    </div>
    <div>
      <span class="pr-2"><router-link to="/blog">Blog</router-link></span>
      <span class="pr-2">/</span>
      <span class="pr-2"><router-link to="/about">About</router-link></span>
      <span class="pr-2">/</span>
      <span class="pr-2"><a href="http://twitter.com/AminZabardast" target="_blank">Twitter</a></span>
      <span class="pr-2">/</span>
      <span class="pr-2"><a href="http://github.com/AminZabardast" target="_blank">Github</a></span>
    </div>
    <v-divider class="mt-4"></v-divider>
  </v-container>
</template>

<script lang="js">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Header',
  setup () {}
})
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bolder;
  color: black !important;
}
a:hover {
  color: #00a693 !important;
}
.router-link-active,
.router-link-exact-active {
  color: #00a693 !important;
}
</style>
