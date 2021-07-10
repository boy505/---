import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//axios
import axios from "axios"
//vant
import Vant from 'vant';
import 'vant/lib/index.css';
//vant
Vue.use(Vant);
//axios
Vue.prototype.axios=axios;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
