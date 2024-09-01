<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import Link from './AnimatedLink.vue'
import { PASTEL1, PASTEL2, PASTEL3, PASTEL4 } from '@/colors'
</script>

<template>
  <div class="menu-item">
    <Link :color="PASTEL1">
      <RouterLink to="/about">Get to Know Me a Bit Better</RouterLink>
    </Link>
  </div>
  <div class="menu-item">
    <Link :color="PASTEL2">
      <RouterLink to="/medium">Check Out My Latest Medium Musings</RouterLink>
    </Link>
  </div>
  <div class="menu-item">
    <Link :color="PASTEL3">
      <RouterLink to="/photos/featured">Peek at My Featured Photos on Unsplash</RouterLink>
    </Link>
  </div>
  <div class="menu-item">
    <Link :color="PASTEL4">
      <RouterLink to="/photos/favorites"
        >Browse My Top Picks from My Unsplash Collection</RouterLink
      >
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
