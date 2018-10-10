<template>
  <div>
    <HomeHeader></HomeHeader>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
export default {
  data () {
    return {
      message: '首页'
    }
  },
  components: {
    HomeHeader
  }
}
</script>

<style scoped lang="less">
@lvse: green;
div {
  color: @lvse;
}
</style>
