<template>
    <div v-for="entry in entries">
        {{ entry.title }}
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { get, map } from 'lodash'

// FIXME: These are all temporary
const entries = ref([])

const fetchFeed = async () => {
    const response = await fetch('http://workstation.amnz.me:8148/api/v1/medium/')
    const jsonResponse = await response.json()
    return jsonResponse as JSON
}

const processFeed = (jsonResponse: JSON) => {
    return map(get(jsonResponse, 'entries', []), (entry: JSON) => {
        return {
            title: get(entry, 'title', '')
        }
    })
}

fetchFeed().then((body) => {
    entries.value = processFeed(body)
})
</script>
