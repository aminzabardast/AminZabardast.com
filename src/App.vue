<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/GlobalFooter.vue'
</script>

<template>
  <main class="open-sans">
    <RouterView />
    <div class="footer">
      <Footer />
    </div>
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

<style lang="css" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
