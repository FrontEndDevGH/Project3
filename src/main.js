import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

Vue.config.productionTip = false

Vue.use(VModal)
Vue.use(VueToast)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
