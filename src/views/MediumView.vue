<template>
    <div v-for="entry in entries">
        {{ entry.title }}
    </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { get, map } from 'lodash'

type Post = {
    title: string
}

// FIXME: These are all temporary
const entries = ref([]) as Ref<Post[]>

const fetchFeed = async () => {
    const response = await fetch('/api/v1/medium/')
    const jsonResponse = await response.json()
    return jsonResponse as JSON
}

const processFeed = (jsonResponse: JSON): Post[] => {
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
