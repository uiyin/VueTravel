<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <div>城市</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
export default {
  data () {
    return {
      message: '首页'
    }
  },
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped lang="less">
@lvse: green;
div {
  color: @lvse;
}
</style>
