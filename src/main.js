// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})