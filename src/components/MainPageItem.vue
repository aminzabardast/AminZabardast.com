<template>
    <v-container bg class="pa-0">
        <v-layout align-start justify-center row>
            <v-flex xs12 sm9 md8 lg6>

                <v-card elevation="0">
                    <v-card-title>
                        <font-awesome-icon pull="left" class="display-1" :icon="icon"/>
                        <span class="title font-weight-bold">{{title}}</span>
                    </v-card-title>

                    <v-card-text>
                        <p class="body-2">
                            <strong>Lorem ipsum dolor sit amet</strong>, <i>consectetur adipisicing elit</i>. <strong><i>Adipisci aliquid architecto aspernatur beatae eaque</i></strong> error explicabo hic illo maxime modi nesciunt nisi nulla, quidem quos repellendus tenetur veniam veritatis voluptatibus!
                        </p>
                        <p class="body-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda debitis doloremque dolores, dolorum, facilis inventore, ipsam maxime nam nulla officiis reiciendis temporibus! Blanditiis et, explicabo labore nemo quia vero?
                        </p>
                        <h3 class="font-weight-bold">Header Withing Block</h3>
                        <v-img src="https://c1.staticflickr.com/5/4236/35489589970_d90aa35988_b.jpg" class="my-2">
                            <!--<div class="fill-height repeating-gradient"></div>-->
                        </v-img>
                        <p class="body-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur cupiditate distinctio est facilis fuga hic incidunt magnam nesciunt omnis perspiciatis quae quaerat quia quisquam repellendus reprehenderit, rerum, tempora tempore.
                        </p>
                        <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Satellite_view_of_Niuafo%27ou%2C_2005-03-19.jpg/1024px-Satellite_view_of_Niuafo%27ou%2C_2005-03-19.jpg" class="my-2">
                        </v-img>
                        <p class="body-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio recusandae temporibus voluptate? Incidunt reiciendis sequi tenetur vel! Eveniet labore laboriosam molestiae porro! Adipisci, dicta laborum minima nihil sed velit veritatis?
                        </p>
                    </v-card-text>
                </v-card>

                <v-divider class="my-0 py-0"></v-divider>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "MainPageItem",
        data () {
            return {
                icon: ['fab', 'twitter'],
                'title': 'This is a card'
            }
        }
    }
</script>

<style scoped>
    .repeating-gradient {
        background-image: repeating-linear-gradient(-45deg,
        #def0ec33,
        #def0ec33 5px,
        rgba(0,0,0,.25) 5px,
        rgba(0,0,0,.25) 10px
        );
    }
</style>