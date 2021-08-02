import Vue from 'vue'
import '@/plugins/showdown'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCompositionAPI from '@vue/composition-api'
import vuetify from '@/plugins/vuetify'

library.add(faGithub, faTwitter, faEnvelope, faLinkedin, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
