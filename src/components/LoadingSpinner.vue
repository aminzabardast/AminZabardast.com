<template>
  <div class="loader"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { rotateThemeColors } from '@/colors'

const themeColorGenerator = rotateThemeColors()

const color1 = ref(themeColorGenerator.next().value)
const color2 = ref(themeColorGenerator.next().value)
</script>

<style lang="css">
.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  animation: l14 4s infinite;
}
.loader::before,
.loader::after {
  content: '';
  grid-area: 1/1;
  border: 8px solid;
  border-radius: 50%;
  border-color: v-bind('color1') v-bind('color1') #0000 #0000;
  mix-blend-mode: darken;
  animation: l14 1s infinite linear;
}
.loader::after {
  border-color: #0000 #0000 v-bind('color2') v-bind('color2');
  animation-direction: reverse;
}
@keyframes l14 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
