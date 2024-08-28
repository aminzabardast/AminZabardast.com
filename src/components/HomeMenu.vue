<script lang="ts" setup>
import {} from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/blog">Blog</RouterLink>
  </div>
  <div>
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<style lang="css" scoped>
a {
  display: block;
  padding: 10px;
  margin: 10px;
  background-color: cadetblue;
  text-align: center;
}
</style>
