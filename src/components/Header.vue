<template>
<!--  TODO: Add avatar -->
  <v-row class="mt-1">
    <v-col
        align="center"
        align-self="center"
        class="pl-5"
    >
      <div>
        <router-link class="name" to="/">
          <v-avatar
              color="primary"
              size="196"
          >
            <img
                src="../assets/amin2.jpg"
                alt="AZ"
            >
          </v-avatar>
          <h1 class="font-weight-bold">Amin Zabardast</h1>
        </router-link>
        <span class="pr-2"><router-link to="/blog">Blog</router-link></span>
        <span class="pr-2">/</span>
        <span class="pr-2"><router-link to="/about">About</router-link></span>
        <span class="pr-2">/</span>
        <span class="pr-2"><a href="http://twitter.com/AminZabardast" target="_blank">Twitter</a></span>
        <span class="pr-2">/</span>
        <span class="pr-2"><a href="http://github.com/AminZabardast" target="_blank">Github</a></span>
      </div>

    </v-col>
  </v-row>
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
