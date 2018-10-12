<template>
  <div>
    <Cityheader></Cityheader>
  </div>
</template>

<script>
import Cityheader from './components/CityHeader.vue'
export default {
  data () {
    return {
      message: '城市'
    }
  },
  components: {
    Cityheader
  }
}
</script>

<style scoped>
</style>
