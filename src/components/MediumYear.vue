<template>
  <h3><slot></slot></h3>
</template>

<script lang="ts" setup>
export interface Props {
  published: Date
  url: string
}
</script>

<style lang="css" scoped>
h3 {
  font-family: 'Unica One', sans-serif;
  padding: 10px;
  margin: 0;
}
</style>
