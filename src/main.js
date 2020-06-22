import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import 'amfe-flexible'
//初始化样式
import './common/stylus/index.styl'
Vue.config.productionTip = false

Vue.use(utils)
import { Button } from 'vant';
Vue.use(Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
