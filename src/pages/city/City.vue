<template>
  <div>
    <Cityheader></Cityheader>
    <CitySearch></CitySearch>
    <CityList></CityList>
  </div>
</template>

<script>
import Cityheader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
import CityList from './components/List.vue'
export default {
  data () {
    return {
      message: '城市'
    }
  },
  components: {
    Cityheader,
    CitySearch,
    CityList
  }
}
</script>

<style scoped>
</style>
