// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//初始化样式
import './common/stylus/index.styl'
//移动端适配
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false
/*vant-ui*/
/*import { Tab, Tabs, Stepper ,PullRefresh ,List,Toast} from 'vant';
Vue.use(Tab).use(Tabs).use(Stepper).use(PullRefresh).use(List).use(Toast)*/
/*import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
