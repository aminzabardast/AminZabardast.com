<template>
  <v-app>
    <TopLine/>
    <v-content class="body">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import TopLine from "./components/TopLine";

export default {
  name: 'App',
  components: {
    TopLine
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  .body {
    /*Chosen Color Palette: https://encycolorpedia.com/00a693*/
    /*background-color: #ffffff*/
  }
</style>
