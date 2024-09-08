<template>
  <!-- TODO: Title of page is missing -->
  <!-- TODO: Link to home is missing -->
  <div class="loading-div" v-if="loading">
    <LoadingSpinner />
  </div>
  <ImageGallery :images="listOfImages" />
  <!-- TODO: More on Unsplash is missing -->
</template>

<script lang="ts" setup>
import ImageGallery, { type Image } from '@/components/ImageGallery.vue'
import { ref, onMounted, type Ref } from 'vue'
import { get, map } from 'lodash'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const fetchFeed = async () => {
  const apiUrl = ''
  const response = await fetch(`${apiUrl}/api/v1/unsplash/random/`)
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
        console.log(item)
        return {
          imageUrl: get(item, 'urls.small'),
          url: get(item, 'links.html'),
          color: get(item, 'color')
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
</style>
