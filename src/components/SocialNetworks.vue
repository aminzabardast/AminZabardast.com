<script setup lang="ts">
import { computed } from 'vue'
import Link from '@/components/AnimatedLink.vue'

export type SocialMediaItem = {
  url: string
  path: string
  color: string
}

export interface Props {
  items: SocialMediaItem[]
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  height: 25
})

const margin = computed(() => {
  return `${props.height / 4}px`
})
</script>

<template>
  <Link
    v-for="item in props.items"
    :key="item.url"
    :href="item.url"
    target="_blank"
    :color="item.color"
    underline
  >
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
  </Link>
</template>

<style lang="css" scoped>
a {
  padding: v-bind('margin');
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
