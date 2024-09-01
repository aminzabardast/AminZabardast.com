<template>
  <a :href="props.href" :target="props.target">
    <span></span>
    <div>
      <slot></slot>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

export interface Props {
  href?: string
  color: string
  backgroundColor?: string
  target?: '_blank' | ''
  underline?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  target: '',
  mode: '',
  underline: false,
  backgroundColor: 'inherit'
})

const spanHeight = computed(() => {
  return props.underline ? '8px' : '0'
})
</script>

<style lang="css" scoped>
a {
  position: relative;
  bottom: 0;
  background-color: v-bind('$props.backgroundColor');
}

a div {
  display: inline-block;
  position: relative;
  z-index: 2;
  height: 100%;
}

span {
  z-index: 1;
  position: absolute;
  height: v-bind('spanHeight');
  width: 100%;
  background-color: v-bind('$props.color');
  bottom: 0;
  left: 0;
  -webkit-transition: height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -moz-transition: height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-transition: height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: height 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

a:hover span {
  height: 100%;
}
</style>
