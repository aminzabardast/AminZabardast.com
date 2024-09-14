<template>
  <div class="unsplash-content-container">
    <UnsplashHeadings mode="random" />
    <UnsplashMenu :color-generator="colorGenerator" mode="random" />
  </div>
  <div class="loading-div" v-if="loading">
    <LoadingSpinner />
  </div>
  <ImageGallery :images="listOfImages" />
</template>

<script lang="ts" setup>
import ImageGallery, { type Image } from '@/components/ImageGallery.vue'
import { ref, onMounted, type Ref } from 'vue'
import { get, map } from 'lodash'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import UnsplashHeadings from '@/components/UnsplashHeadings.vue'
import { rotateThemeColors } from '@/colors'
import UnsplashMenu from '@/components/UnsplashMenu.vue'
import { API_URL } from '@/config'

const colorGenerator = rotateThemeColors()

const fetchFeed = async () => {
  const response = await fetch(`${API_URL}/api/v1/unsplash/random`)
  const jsonResponse = await response.json()
  return jsonResponse as JSON
}

const listOfImages = ref([]) as Ref<Image[]>
const loading = ref(false)

onMounted(() => {
  loading.value = true
  fetchFeed()
    .then((data) => {
      const processedData = map(data, (item): Image => {
        const width = parseFloat(get(item, 'width', '1'))
        const height = parseFloat(get(item, 'height', '1'))
        // @ts-ignore FIXME: TS Issue
        return {
          imageUrl: get(item, 'urls.small'),
          url: get(item, 'links.html'),
          color: get(item, 'color'),
          ratio: height / width
        }
      })
      listOfImages.value = processedData
    })
    .finally(() => {
      loading.value = false
    })
})
</script>

<style lang="css" scoped>
.loading-div > div {
  margin: auto;
}
.unsplash-content-container {
  max-width: 800px;
  margin: auto;
  padding-bottom: 50px;
}
a {
  color: inherit;
  text-decoration: inherit;
}
</style>
