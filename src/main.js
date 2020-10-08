import Vue from 'vue'
import App from './App.vue'
//1.引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from "router/index";

// 引入第三方toast组件
import toastRegistry from 'toast_demo_based_vue'
Vue.use(toastRegistry)

//2.注册插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
