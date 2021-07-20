<template>
    <v-container bg text-xs-center class="mt-5 pa-0">
        <v-layout align-start justify-center row>
            <v-flex xs12 sm9 md8 lg6>

                <v-avatar size="250">
                    <img :src="require('../assets/amin2.jpg')" alt="avatar">
                </v-avatar>

                <p class="display-2 logo mt-5 mb-4 text--darken-3">
                    {{title}}
                </p>

                <p class="pa-0 ma-0 text--darken-2 title mb-2" v-for="(msg, idx) in smallMsgs" :key="idx">
                    {{msg}}
                </p>

                <v-divider class="mt-5"></v-divider>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Logo",
        data () {
            return {
                title: "I'm Amin Zabardast",
                smallMsgs: [
                    "I mess around with data, I enjoy computer graphics,",
                    "and I like combining these two.",
                    "An advocate of any creative process."
                ],
            }
        }
    }
</script>

<style scoped>
    .logo {
        font-family: sans-serif;
        font-weight: bold;
    }
</style>