<script setup lang="ts">
import WebsiteTile from '@/components/WebsiteTitle.vue'
import HomeIntro from '@/components/HomeIntro.vue'
import SocialNetworks from '@/components/SocialNetworks.vue'
import HomeMenu from '@/components/HomeMenu.vue'
import Footer from '@/components/GlobalFooter.vue'
</script>

<template>
  <div class="flex-container">
    <div class="row">
      <div class="flex-item">
        <WebsiteTile />
      </div>
      <div class="flex-item">
        <HomeIntro />
      </div>
      <div class="flex-item">
        <SocialNetworks />
      </div>
      <div class="flex-item content-column">
        <HomeMenu />
      </div>
    </div>
  </div>
  <div class="footer">
    <Footer />
  </div>
</template>

<style lang="css">
html,
body,
div#app,
main {
  height: 100%;
}
body {
  margin: 0;
}
.flex-container {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.flex-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-column {
  flex-direction: column;
  align-items: normal;
}
</style>

<style lang="css" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
