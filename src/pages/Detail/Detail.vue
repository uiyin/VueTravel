<template>
  <div>
    <DetailBanner></DetailBanner>
    <Header></Header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/banner.vue'
import Header from './components/Header.vue'
export default {
  name: 'Detail',
  data () {
    return {
      message: '详情'
    }
  },
  components: {
    DetailBanner,
    Header
  }
}
</script>

<style scoped lang="less">
@import '~styles/common.less';
.content {
  height: 2000px;
  width: 100%;
}
</style>
