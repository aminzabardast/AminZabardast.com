<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style lang="css">
/* Light mode */
@media (prefers-color-scheme: light) {
  body {
    background-color: white;
    color: black;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;
  }
}
</style>
