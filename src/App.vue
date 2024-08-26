<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>Header</header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  background-color: antiquewhite;
}
main {
  background-color: powderblue;
}
</style>
