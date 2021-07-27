import Vue from 'vue'
import './plugins/vuetify'
import './plugins/showdown'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCompositionAPI from '@vue/composition-api'

library.add(faGithub, faTwitter, faEnvelope, faLinkedin, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
