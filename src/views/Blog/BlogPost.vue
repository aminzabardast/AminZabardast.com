<template>
  <v-container class="py-0">
    This is a post
    {{ params }}
  </v-container>
</template>

<script lang="js">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'BlogPost',
  setup (props, context) {
    const route = context.root.$route;
    const params = ref(route.params)
    return {
      params
    }
  }
})
</script>

<style scoped>

</style>
