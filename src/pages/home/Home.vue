<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper :SwiperList="SwiperList"></HomeSwiper>
    <HomeIconNav :IconNavList="IconNavList"></HomeIconNav>
    <HomeBangDan :RecommendList="RecommendList"></HomeBangDan>
    <HomeYoulike :RecommendList="RecommendList"></HomeYoulike>
    <HomeZhouMoYou :weekendList="weekendList"></HomeZhouMoYou>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIconNav from './components/IconNav.vue'
import HomeBangDan from './components/BangDan.vue'
import HomeYoulike from './components/Youlike.vue'
import HomeZhouMoYou from './components/Zhoumoyou.vue'
import axios from 'axios'
export default {
  data () {
    return {
      message: '首页',
      SwiperList: [],
      IconNavList: [],
      RecommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIconNav,
    HomeBangDan,
    HomeYoulike,
    HomeZhouMoYou
  },
  mounted () {
    axios.get('/api/index.json').then(this.getdata)
  },
  methods: {
    getdata (res) {
      console.log(res)
      this.SwiperList = res.data.data.swiperList
      this.IconNavList = res.data.data.iconList
      this.RecommendList = res.data.data.recommendList
      this.weekendList = res.data.data.weekendList
    }
  }
}
</script>

<style scoped lang="less">
@lvse: green;
div {
  color: @lvse;
}
</style>
