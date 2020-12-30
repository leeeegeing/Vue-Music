/*
 * @Author: 李剑颖
 * @Date: 2020-12-25 16:30:40
 * @LastEditTime: 2020-12-29 17:11:57
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \vue-axios\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import Vant from 'vant'
// import 'vant/lib/index.css'

Vue.config.productionTip = false

// Vue.use(Vant)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
