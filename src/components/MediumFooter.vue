<template>
  <h2>
    Read More on
    <Link
      href="https://amnz.me/Medium?o=personal-page"
      :color="props.colorGenerator.next().value"
      underline
      >Medium</Link
    >
    <span class="separator">|</span>
    Go to
    <Link :color="props.colorGenerator.next().value" underline>
      <RouterLink to="/">Home Page</RouterLink>
    </Link>
  </h2>
</template>

<script lang="ts" setup>
import Link from './AnimatedLink.vue'

export interface Props {
  colorGenerator: Generator<string>
}

const props = withDefaults(defineProps<Props>(), {
  colorGenerator: function* () {
    while (true) {
      yield 'green'
    }
  }
})
</script>

<style lang="css" scoped>
h2 {
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
