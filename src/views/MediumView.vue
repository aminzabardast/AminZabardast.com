<template>
  <div class="medium-container">
    <MediumHeadings />
    <div class="loading-container" v-if="loading">
      <LoadingSpinner />
    </div>
    <div v-else-if="error">
      <Box type="error"> Some error happened. Reload the page. </Box>
    </div>
    <div v-else>
      <div v-for="year in distinctYearsDesc" :key="year">
        <Year>
          {{ year }}
        </Year>
        <Entry
          v-for="entry in get(entriesGroupedByYear, year)"
          :key="entry.url"
          :url="entry.url"
          :published="entry.published"
          :title="entry.title"
          :color-generator="colorGenerator"
        />
      </div>
      <MediumFooter :color-generator="colorGenerator" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref, computed } from 'vue'
import { get, map, groupBy, keys, reverse } from 'lodash'
import { format } from 'date-fns'
import MediumHeadings from '@/components/MediumHeadings.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import MediumFooter from '@/components/MediumFooter.vue'
import Box from '@/components/InfoBox.vue'
import Year from '@/components/MediumYear.vue'
import Entry from '@/components/MediumEntry.vue'
import { rotateThemeColors } from '@/colors'
import { API_URL } from '@/config'

type Post = {
  title: string
  published: Date
  url: string
}

// FIXME: These are all temporary
const entries = ref([]) as Ref<Post[]>
const entriesGroupedByYear = computed(() => {
  return groupBy(entries.value, (item: Post): string => format(item.published, 'yyyy'))
})
const distinctYearsDesc = computed(() => reverse(keys(entriesGroupedByYear.value)))
const loading = ref(false)
const error = ref(false)

const fetchFeed = async () => {
  loading.value = true
  const response = await fetch(`${API_URL}/api/v1/medium/`)
  const jsonResponse = await response.json()
  return jsonResponse as JSON
}

const processFeed = (jsonResponse: JSON): Post[] => {
  return map(get(jsonResponse, 'entries', []), (entry: JSON) => {
    return {
      title: get(entry, 'title', ''),
      published: new Date(get(entry, 'published', '')),
      url: get(entry, 'id', '')
    }
  })
}

fetchFeed()
  .then((body) => {
    entries.value = processFeed(body)
  })
  .catch(() => {
    error.value = true
  })
  .finally(() => {
    loading.value = false
  })

const colorGenerator = rotateThemeColors()
</script>

<style lang="css" scoped>
div.medium-container {
  max-width: 800px;
  margin: auto;
}
.loading-container div {
  margin: auto;
}
</style>
