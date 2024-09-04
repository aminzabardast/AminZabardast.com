<template>
  <div>Posts</div>
  <hr />
  <div v-if="loading">Loading ...</div>
  <div v-else-if="error">Some error happened. Reload the page.</div>
  <div v-else>
    <div v-for="entry in entries" :key="entry.url">
      {{ getYear(entry.published) }}
      /
      <a :href="entry.url">{{ entry.title }}</a>
      /
      {{ getMonthDay(entry.published) }}
    </div>
    <hr />
    <div>Read More on Medium</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { get, map } from 'lodash'
import { format } from 'date-fns'

type Post = {
  title: string
  published: Date
  url: string
}

// FIXME: These are all temporary
const entries = ref([]) as Ref<Post[]>
const loading = ref(false)
const error = ref(false)

const fetchFeed = async () => {
  loading.value = true
  const apiUrl = ''
  const response = await fetch(`${apiUrl}/api/v1/medium/`)
  const jsonResponse = await response.json()
  return jsonResponse as JSON
}

/**
 * TODO: This is temp and should moved to a Utils section.
 * @param date
 */
const getYear = (date: Date) => {
  return format(date, 'yyyy')
}

/**
 * TODO: This is temp and should moved to a Utils section.
 * @param date
 */
const getMonthDay = (date: Date) => {
  return format(date, 'MMM dd')
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
    loading.value = false
  })
  .catch((e) => {
    error.value = true
    loading.value = false
  })
</script>
