<template>
  <div class="images" ref="imagesEl" data-grid-width="100">
    <ImageGalleryItem
      v-for="image in props.images"
      :key="image.imageUrl"
      :imageUrl="image.imageUrl"
      :color="image.color"
      :url="image.url"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onUpdated } from 'vue'
import { MasonryGrid } from '@egjs/grid'
import ImageGalleryItem from '@/components/ImageGalleryItem.vue'

export interface Props {
  images: (typeof ImageGalleryItem)[]
}

const props = withDefaults(defineProps<Props>(), {})

const imagesEl = ref()

onUpdated(() => {
  const grid = new MasonryGrid(imagesEl.value, {
    gap: 10,
    useResizeObserver: true,
    observeChildren: true
  })

  grid.renderItems()
})
</script>

<style lang="css" scoped>
div.images {
  position: relative;
  margin: auto;
}

@media (min-width: 1220px) {
  div.images {
    width: 1220px;
  }
}

@media (min-width: 810px) and (max-width: 1220px) {
  div.images {
    width: 810px;
  }
}

@media (min-width: 400px) and (max-width: 810px) {
  div.images {
    width: 400px;
  }
}

@media (max-width: 400px) {
  div.images {
    width: 100%;
  }
  img {
    width: 100%;
  }
}
</style>
