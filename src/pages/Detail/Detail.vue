<template>
  <div>
    <DetailBanner></DetailBanner>
  </div>
</template>

<script>
import DetailBanner from './components/banner.vue'
export default {
  name: 'Detail',
  data () {
    return {
      message: '详情'
    }
  },
  components: {
    DetailBanner
  }
}
</script>

<style scoped lang="less">
@import '~styles/common.less';
</style>
