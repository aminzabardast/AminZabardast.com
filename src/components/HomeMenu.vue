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
  padding: 2px;
  margin: 10px;
  text-align: center;
}
</style>
