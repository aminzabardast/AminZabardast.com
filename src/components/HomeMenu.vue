<script lang="ts" setup>
import {} from 'vue-router'
</script>

<template>
  <div>
    <RouterLink class="hidden-link" to="/blog">Blog</RouterLink>
  </div>
  <div>
    <RouterLink class="hidden-link" to="/about">About</RouterLink>
  </div>
</template>

<style lang="css" scoped>
a {
  display: block;
  margin: 5px;
  text-align: center;
  font-size: 1.5em;
}
</style>
