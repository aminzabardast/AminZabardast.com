<template>
  <div class="image-container">
    <a :href="props.url" target="_blank">
      <div class="image-detail">
        <div>Views:</div>
        <div>Dowload:</div>
      </div>
      <div class="image">
        <img :src="props.imageUrl" loading="lazy" :style="getStyle(props.ratio, props.color)" />
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { type CSSProperties } from 'vue'

export interface Props {
  imageUrl: string
  url?: string
  color?: string
  ratio: number
}

const props = withDefaults(defineProps<Props>(), {
  color: 'grey'
})

const getStyle = (ratio: number, color: string): CSSProperties => {
  return {
    width: '400px',
    height: `${400 * ratio}px`,
    backgroundColor: color
  }
}
</script>

<style lang="css" scoped>
div.image-container {
  position: relative;
}

div.image-detail {
  position: absolute;
  display: none;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 100;
  padding: 10px;
  margin: 10px;
  color: black;
}

/* TODO: This should be changed to `block` when details of images are intoduced */
div.image-container:hover div.image-detail {
  display: none;
}

img {
  padding: 0;
  margin: 0;
  transition: 0.5s ease;
}

a:hover img {
  box-shadow:
    1px 1px v-bind('props.color'),
    2px 2px v-bind('props.color'),
    3px 3px v-bind('props.color'),
    4px 4px v-bind('props.color'),
    5px 5px v-bind('props.color'),
    6px 6px v-bind('props.color');
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
  transition: 0.5s ease;
}

.image {
  padding: 0;
  margin: 0;
}
</style>
