<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

export type ErrorType = 'error' | 'warning' | 'info' | 'success'

export interface Props {
  type: ErrorType
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info'
})

const className = computed(() => {
  return `box ${props.type}`
})
</script>

<style lang="css" scoped>
.box {
  height: 20px;
  border: 2px solid #000;
  margin: 0 auto 15px;
  text-align: center;
  padding: 20px;
  font-weight: bold;
  border-radius: 10px;
}

.info {
  background-color: #ddd;
  border-color: #aaa;
}

.warning {
  background-color: #fff484;
  border-color: #dcc600;
}

.success {
  background-color: #b9ffab;
  border-color: #116400;
  color: #116400;
}

.error {
  background-color: #ebb1b1;
  border-color: #973939;
  color: #973939;
}
</style>
