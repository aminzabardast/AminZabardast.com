<template>
  <v-app class="app-main">
    <TopLine/>
    <v-container class="app-column" style="height: 100%">
      <v-row>
        <Header></Header>
      </v-row>
      <v-row>
        <v-main class="body">
          <router-view></router-view>
        </v-main>
      </v-row>
      <v-row>
        <Footer></Footer>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="js">
import TopLine from "./components/TopLine";
import { defineComponent } from '@vue/composition-api'
import Header from './components/Header'
import Footer from './components/Footer'

export default defineComponent({
  name: 'App',
  components: {
    TopLine,
    Header,
    Footer
  }
})
</script>

<style>
  .app-column {
    width: 650px;
    background: white;
    padding-top: 10px !important;
  }
  .app-main {
    background-color: #def0ec !important;
  }
</style>
