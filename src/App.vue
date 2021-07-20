<template>
  <v-app>
    <TopLine/>
    <v-content class="body">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="js">
import TopLine from "./components/TopLine";
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'App',
  components: {
    TopLine
  }
})
</script>

<style>
  .body {
    background-color: #def0ec
  }
</style>
