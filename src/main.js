import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apis from './api/apis'
import '@vant/touch-emulator';

import './assets/styles/reset.less'
import './assets/styles/common.less'

import { Toast, Loading } from 'vant';

Vue.use(Toast);
Vue.use(Loading);

Vue.config.productionTip = false
Vue.prototype.$apis = apis

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
