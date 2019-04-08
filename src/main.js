import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'

import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'

import './assets/soapbox.scss'
import './assets/fonts/font-awesome/css/all.min.css'

Vue.use(BootstrapVue)
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
