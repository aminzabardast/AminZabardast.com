<template>
  <v-row class="footer">
    <v-container>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center" align-self="center">
          <span class="pr-2">&copy; Amin Zabardast</span>
        </v-col>
      </v-row>
      <v-tooltip
          left
          v-if="showScrollTop"
          class="to-top-button"
      >
        <template
            v-slot:activator="{ on, attrs }"
        >
          <v-btn
              v-bind="attrs"
              v-on="on"
              fab
              class="to-top-button"
              @click="goToTop"
          >
            <v-icon>
              mdi-chevron-up
            </v-icon>
          </v-btn>
        </template>
        <span>Go To Top</span>
      </v-tooltip>
    </v-container>
  </v-row>
</template>

<script lang="js">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import $ from 'jquery'

export default defineComponent({
  name: 'Footer',
  setup () {
    const goToTop = () => {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    }
    const showScrollTop = ref(false)
    const catchScroll = () => {
      const scrollTop = $('html').scrollTop()
      showScrollTop.value = scrollTop > 300
    }
    onMounted(() => {
      window.addEventListener('scroll', catchScroll)
    })
    return {
      goToTop,
      showScrollTop
    }
  }
})
</script>

<style scoped>
.footer {
  position: absolute;
  width: 100%;
  bottom: 20px;
}
.to-top-button {
  position: fixed;
  right: 40px;
  bottom: 40px;
}
</style>
