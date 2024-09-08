<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/GlobalFooter.vue'
</script>

<template>
  <div class="container open-sans">
    <main class="content">
      <RouterView />
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<style lang="css">
body {
  margin: 0;
  padding: 0;
}

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
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  padding-top: 100px;
}

.footer {
  text-align: center;
}
</style>
