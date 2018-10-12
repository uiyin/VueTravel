<template>
  <div>
    <Cityheader></Cityheader>
    <CitySearch></CitySearch>
  </div>
</template>

<script>
import Cityheader from './components/CityHeader.vue'
import CitySearch from './components/CitySearch.vue'
export default {
  data () {
    return {
      message: '城市'
    }
  },
  components: {
    Cityheader,
    CitySearch
  }
}
</script>

<style scoped>
</style>
