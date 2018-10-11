<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIconNav></HomeIconNav>
    <HomeBangDan></HomeBangDan>
    <HomeYoulike></HomeYoulike>
    <HomeZhouMoYou></HomeZhouMoYou>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIconNav from './components/IconNav.vue'
import HomeBangDan from './components/BangDan.vue'
import HomeYoulike from './components/Youlike.vue'
import HomeZhouMoYou from './components/Zhoumoyou.vue'
export default {
  data () {
    return {
      message: '首页'
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIconNav,
    HomeBangDan,
    HomeYoulike,
    HomeZhouMoYou
  }
}
</script>

<style scoped lang="less">
@lvse: green;
div {
  color: @lvse;
}
</style>
