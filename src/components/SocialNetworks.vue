<script setup lang="ts">
import { computed } from 'vue'

export type SocialMediaItem = {
  url: string
  path: string
}

export interface Props {
  items: SocialMediaItem[]
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  items: [],
  height: 25
})

const margin = computed(() => {
  return `${props.height / 4}px`
})
</script>

<template>
  <a v-for="item in props.items" :key="item.url" :href="item.url" target="_blank">
    <svg
      :width="props.height"
      :height="props.height"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="social-icon"
      shape-rendering="optimizeQuality"
    >
      <path :d="item.path" />
    </svg>
  </a>
</template>

<style lang="css" scoped>
a {
  margin: v-bind('margin');
  display: inline-block;
}
/* Light mode */
@media (prefers-color-scheme: light) {
  .social-icon {
    color: black;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .social-icon {
    color: white;
  }
}
</style>
