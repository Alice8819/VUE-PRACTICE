import Vue from 'vue'
import App from './App.vue';
import router from './router.js';
import axios from './http.js';
import './assets/reset.css'

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),   
  router,
}).$mount('#app')

