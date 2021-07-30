<template>
  <v-row class="footer">
    <v-container>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center" align-self="center">
          <span class="pr-2">&copy; Amin Zabardast</span>
          <span class="pr-2">/</span>
          <span class="pr-2">
            <v-btn
                x-small
                :dark="false"
                depressed
            >
              <v-icon>
                mdi-chevron-up
              </v-icon>
              Back To Top
            </v-btn>
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script lang="js">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Footer',
  setup () {}
})
</script>

<style scoped>
.footer {
  position: absolute;
  width: 100%;
  bottom: 20px;
}
</style>
