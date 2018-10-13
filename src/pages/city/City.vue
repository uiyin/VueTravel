<template>
  <div>
    <Cityheader></Cityheader>
    <CitySearch></CitySearch>
    <CityList :city="CityLetter"
              :hotcity="CityList"></CityList>
    <CityLetter :cityletter="CityLetter"></CityLetter>
  </div>
</template>

<script>
import axios from 'axios'
import Cityheader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/List.vue'
import CityLetter from './components/CityLetter.vue'
export default {
  data () {
    return {
      message: '城市',
      CityLetter: {},
      CityList: []
    }
  },
  components: {
    Cityheader,
    CitySearch,
    CityList,
    CityLetter
  },
  mounted () {
    axios.get('/static/mock/city.json').then(this.getData)
  },
  methods: {
    getData (res) {
      console.log(res)
      // 获取到所有城市
      this.CityLetter = res.data.data.cities
      this.CityList = res.data.data.hotCities
    }
  }
}
</script>

<style scoped>
</style>
