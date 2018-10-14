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
import { mapState } from 'vuex'
export default {
  data () {
    return {
      oldcity: '',
      message: '首页',
      SwiperList: [],
      IconNavList: [],
      RecommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState({
      city: 'city'
    })
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
    this.oldcity = this.city
    axios.get('/api/index.json?city=' + this.city).then(this.getdata)
  },
  // 这个必须和keepalive配合这样能更改数据，mounted只执行一次,actived只要页面渲染就执行一次
  activated () {
    if (this.oldcity !== this.city) {
      this.oldcity = this.city
      axios.get('/api/index.json?city=' + this.city).then(this.getdata)
    }
    console.log('actived')
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
