<template>
  <div>
    <span>
      {{ getMonthDay(props.published) }}
    </span>
    <Link :color="props.colorGenerator.next().value" :href="props.url" underline>{{
      props.title
    }}</Link>
  </div>
</template>

<script lang="ts" setup>
import { format } from 'date-fns'
import Link from './AnimatedLink.vue'

export interface Props {
  url: string
  title: string
  published: Date
  colorGenerator?: Generator<string>
}

const props = withDefaults(defineProps<Props>(), {
  colorGenerator: function* () {
    while (true) {
      yield 'green'
    }
  }
})

const getMonthDay = (date: Date) => {
  return format(date, 'MMM dd')
}
</script>

<style lang="css" scoped>
div {
  padding: 10px;
  padding-left: 70px;
  position: relative;
  z-index: 3;
}
span {
  padding: 15px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 4;
}
a {
  display: inline-block;
  color: inherit;
  text-decoration: inherit;
  width: 100%;
  padding: 5px;
}
</style>
