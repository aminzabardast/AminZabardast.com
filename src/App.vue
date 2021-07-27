<template>
  <v-app>
    <TopLine/>
    <v-container class="app-main">
      <Header></Header>
      <v-content class="body">
        <router-view></router-view>
      </v-content>
    </v-container>
  </v-app>
</template>

<script lang="js">
import TopLine from "./components/TopLine";
import { defineComponent } from '@vue/composition-api'
import Header from './components/Header'

export default defineComponent({
  name: 'App',
  components: {
    TopLine,
    Header
  }
})
</script>

<style>
  .app-main {
    width: 650px;
    background: white;
    padding-top: 10px !important;
  }
</style>
