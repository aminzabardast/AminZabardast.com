<template>
  <div class="loader"></div>
</template>

<script lang="ts" setup>
import { PASTEL1, PASTEL5 } from '@/colors'
</script>

<style lang="css">
/* HTML: <div class="loader"></div> */
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
  border-color: v-bind('PASTEL1') v-bind('PASTEL1') #0000 #0000;
  mix-blend-mode: darken;
  animation: l14 1s infinite linear;
}
.loader::after {
  border-color: #0000 #0000 v-bind('PASTEL5') v-bind('PASTEL5');
  animation-direction: reverse;
}
@keyframes l14 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
