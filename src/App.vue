<template>
  <v-app class="app">
    <TopLine/>
    <v-container class="app-column">
      <Header></Header>
      <v-row>
        <v-main class="main">
          <router-view></router-view>
        </v-main>
      </v-row>
      <Footer></Footer>
    </v-container>
  </v-app>
</template>

<script lang="js">
import TopLine from "@/components/TopLine";
import { defineComponent } from '@vue/composition-api'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  max-width: 650px;
  background: white;
  padding-top: 10px !important;
  height: 100%;
  position:relative;
}
.app {
  background-color: #def0ec !important;
}
.main {
  padding-bottom: 100px !important;
}
a {
  color: black !important;
}
a:hover {
  color: #00a693 !important;
}
.router-link-active,
.router-link-exact-active {
  color: #00a693 !important;
}
</style>
