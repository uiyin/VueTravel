import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () =>
        import('@/pages/home/Home')

  },
  {
    path: '/city',
    name: 'City',
    component: () =>
        import('@/pages/city/City')

  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () =>
        import('@/pages/Detail/Detail')

  }
  ],
  // 自定义路由切换时页面如何滚动
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
