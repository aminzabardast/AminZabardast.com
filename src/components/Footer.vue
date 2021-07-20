<template>
    <v-container bg text-xs-center class="pa-0">
        <v-layout align-start justify-center row>
            <v-flex xs12 sm9 md8 lg6>

                <v-tooltip bottom v-for="link in orderedLinks" :key="link.order">
                    <template v-slot:activator="{ on }">
                        <v-btn fab flat v-on="on" :href="link.href" target="_blank">
                            <font-awesome-icon class="display-1 text--darken-3" :icon="link.icon"/>
                        </v-btn>
                    </template>
                    <span>{{link.tooltip}}</span>
                </v-tooltip>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Footer",
        data () {
            return {
                links: [
                    {
                        order: 5,
                        icon: ['fas', 'envelope'],
                        tooltip: 'zabardast.amin@metu.edu.tr',
                        href: 'mailto:zabardast.amin@metu.edu.tr'
                    },
                    {
                        order: 1,
                        icon: ['fab', 'github'],
                        tooltip: '/AminZabardast',
                        href: 'http://github.com/AminZabardast'
                    },
                    {
                        order: 2,
                        icon: ['fab', 'linkedin'],
                        tooltip: '/AminZabardast',
                        href: 'http://linkedin.com/in/AminZabardast'
                    },
                    {
                        order: 3,
                        icon: ['fab', 'twitter'],
                        tooltip: '@AminZabardast',
                        href: 'http://twitter.com/AminZabardast'
                    },
                    {
                        order: 4,
                        icon: ['fab', 'instagram'],
                        tooltip: '@AminZabardast',
                        href: 'http://instagram.com/AminZabardast'
                    }
                ]
            }
        },
        computed: {
            orderedLinks () {
                return this.links.slice().sort((a,b) => {
                    return a.order > b.order ? 1 : -1
                })
            }
        }
    }
</script>

<style scoped>

</style>