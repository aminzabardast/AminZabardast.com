<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import Link from './AnimatedLink.vue'
import { rotatePastelColors } from '@/colors'

const pastelColorGenerator = rotatePastelColors()
</script>

<template>
  <div class="menu-item">
    <Link :color="pastelColorGenerator.next().value">
      <RouterLink to="/about">Get to Know Me a Bit Better</RouterLink>
    </Link>
  </div>
  <div class="menu-item">
    <Link :color="pastelColorGenerator.next().value">
      <RouterLink to="/medium">Check Out My Latest Medium Musings</RouterLink>
    </Link>
  </div>
  <div class="menu-item">
    <Link :color="pastelColorGenerator.next().value">
      <RouterLink to="/photos/random">Browse Photos from My Unsplash Collection</RouterLink>
    </Link>
  </div>
  <div class="menu-item">
    <Link :color="pastelColorGenerator.next().value">
      <RouterLink to="/photos/popular">Peek at Popular Photos on My Unsplash</RouterLink>
    </Link>
  </div>
</template>

<style lang="css" scoped>
.menu-item a {
  padding: 3px;
  display: block;
  text-align: center;
  font-size: 1em;
  text-decoration: none;
  -webkit-transition: font-size 0.5s ease;
  -moz-transition: font-size 0.5s ease;
  -o-transition: font-size 0.5s ease;
  transition: font-size 0.5s ease;
  color: inherit;
}
.menu-item a:hover {
  font-size: 1em;
}
</style>
