<template>
  <router-view></router-view>
</template>

<script lang="js">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Blog'
})
</script>

<style scoped>
* {
  font-family: 'Georgia', sans-serif;
}
</style>
