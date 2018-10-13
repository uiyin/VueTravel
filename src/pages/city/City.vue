<template>
  <div>
    <Cityheader></Cityheader>
    <CitySearch :city="CityLetter"></CitySearch>
    <CityList :city="CityLetter"
              :hotcity="CityList"
              :letter="letter"
              @change="gotoel"></CityList>
    <CityLetter :cityletter="CityLetter"
                :letter="letter"
                @change="gotoel"></CityLetter>
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
      CityList: [],
      letter: ''
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
    },
    gotoel (res) {
      this.letter = res
      console.log(this.letter)
    }
  }
}
</script>

<style scoped>
</style>
