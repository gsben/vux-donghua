// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import router from './router'
import App from './App'

//vuex只需要在mainjs中引一次就ok,其他组件可以随时调用
import store from './assets/store'

/*Vue.use(VueRouter)

const routes = [
 {
    path: '/',
    component: App
  },
  {
    path: '/animate', 
    component: animate
  }
]

const router = new VueRouter({
  routes
})
*/

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
