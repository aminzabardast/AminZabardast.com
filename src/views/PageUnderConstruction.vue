<script setup lang="ts">
import Link from '@/components/AnimatedLink.vue'
import { PASTEL3 } from '@/colors'
import { computed, ref } from 'vue'

const isDark = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)

// TODO: Find better solution
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  isDark.value = event.matches ? true : false
})

const buttonColor = computed(() => {
  return isDark.value ? '#333333' : 'lightgrey'
})
</script>

<template>
  <div class="page">
    <p class="text">Under Construction</p>
    <p>
      <span class="icon">🚧</span>
    </p>
    <div>
      <Link :color="PASTEL3" :background-color="buttonColor">
        <RouterLink to="/" class="abc">Go To Homepage</RouterLink>
      </Link>
    </div>
  </div>
</template>

<style lang="css" scoped>
div.page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

div.page .icon {
  font-size: 6em;
}
div.page .text {
  font-size: 2em;
  padding: 0;
  margin: 0;
  letter-spacing: 0.15em !important;
}

div.page div {
  padding: 10px;
}

div.page div a {
  padding: 10px;
  margin: 10px;
  width: 100px;
  color: inherit;
  text-decoration: none;
}
</style>
