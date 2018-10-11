<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIconNav></HomeIconNav>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIconNav from './components/IconNav.vue'
export default {
  data () {
    return {
      message: '首页'
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIconNav
  }
}
</script>

<style scoped lang="less">
@lvse: green;
div {
  color: @lvse;
}
</style>
