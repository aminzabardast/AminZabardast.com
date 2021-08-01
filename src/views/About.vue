<template>
  <v-container class="post-container">
    <h2>About this blog</h2>
    <p>
      I have <router-link to="/blog/2020/09/26/the-beginning">tried to make a habit of writing so many times</router-link> I've lost count of it.
      But I am resiliant.
      This blog is my latest - and hopefully last - attempt to become a regular writer.
      I like to write about many thing but it is too early to come up with any predictions.
      This will be updated.
    </p>
    <h2>About me</h2>
    <p>
      I am a graduate student who is trying to remain curious in a world filled with means of escapism.
      I like writing, reading books, and learning new things.
      I also quite enjoy reinventing the wheel if my goal is to learn about it.
    </p>
    <h2>Let's have a correspondence</h2>
    <p>
      I’m on Twitter at <a href="https://twitter.com/AminZabardast">@AminZabardast</a> and my email address is
      <a href="mailto:aminzabardast@gmail.com">aminzabardast@gmail.com</a>. I love hearing from people, and I try to reply to everyone.
    </p>
  </v-container>
</template>

<script lang="js">
import { defineComponent } from '@vue/composition-api'
import '@/assets/post.css'

export default defineComponent({
  name: 'About'
})
</script>

<style scoped>

* {
  font-family: 'Georgia', sans-serif;
}
</style>
