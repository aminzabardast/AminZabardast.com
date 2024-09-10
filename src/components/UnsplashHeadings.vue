<template>
  <h2>
    Unsplash Gallery / <span>{{ modeText }}</span>
  </h2>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

export interface Props {
  mode: 'random' | 'popular'
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'random'
})

const modeText = computed(() => {
  if (props.mode === 'random') {
    return 'Random Photos'
  }
  if (props.mode === 'popular') {
    return 'Most Popular Photos'
  }
  return ''
})
</script>

<style lang="css" scoped>
h2 {
  font-family: 'Unica One', sans-serif;
  padding-bottom: 20px;
}
</style>
