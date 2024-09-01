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
    <p>
      <span class="icon">🚧</span>
    </p>
    <p>Things are under construction</p>
    <p>
      <span class="icon">⚠️</span>
    </p>
    <div>
      <Link href="/" :color="PASTEL3" :backgroundColor="buttonColor">Go to Home Page</Link>
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

div.page div {
  padding: 10px;
}

div.page div a {
  padding: 10px;
  margin: 10px;
  width: 100px;
  color: inherit;
}
</style>
