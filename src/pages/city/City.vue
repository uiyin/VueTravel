<template>
  <div>
    <Cityheader></Cityheader>
    <CitySearch></CitySearch>
    <CityList></CityList>
    <CityLetter></CityLetter>
  </div>
</template>

<script>
import Cityheader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/List.vue'
import CityLetter from './components/CityLetter.vue'
export default {
  data () {
    return {
      message: '城市'
    }
  },
  components: {
    Cityheader,
    CitySearch,
    CityList,
    CityLetter
  }
}
</script>

<style scoped>
</style>
