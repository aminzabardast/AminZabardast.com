<template>
  <h4 class="heading">
    View My Latest Photos on
    <Link
      href="https://amnz.me/Unsplash?o=personal-page"
      :color="props.colorGenerator.next().value"
      underline
      target="_blank"
      >Unsplash</Link
    >
    <span class="separator">|</span>
    <span v-if="isRandom">
      View the
      <Link :color="props.colorGenerator.next().value" underline>
        <RouterLink to="popular">Most Pupular Photos</RouterLink>
      </Link>
    </span>
    <span v-if="isPopular">
      View
      <Link :color="props.colorGenerator.next().value" underline>
        <RouterLink to="random">Random Photos</RouterLink>
      </Link>
    </span>
    <span class="separator">|</span>
    Go to
    <Link :color="props.colorGenerator.next().value" underline>
      <RouterLink to="/">Home Page</RouterLink>
    </Link>
  </h4>
</template>

<script lang="ts" setup>
import Link from './AnimatedLink.vue'
import { computed } from 'vue'

export interface Props {
  colorGenerator: Generator<string>
  mode?: 'random' | 'popular'
}

const props = withDefaults(defineProps<Props>(), {
  colorGenerator: function* () {
    while (true) {
      yield 'green'
    }
  },
  mode: 'random'
})

const isPopular = computed(() => {
  return props.mode === 'popular'
})

const isRandom = computed(() => {
  return props.mode === 'random'
})
</script>

<style lang="css" scoped>
.heading {
  font-family: 'Unica One', sans-serif;
  padding-top: 20px;
}
a {
  color: inherit;
  text-decoration: inherit;
}
span.separator {
  padding: 0 30px;
}
</style>
