<template>
  <div>
    <DetailBanner></DetailBanner>
    <Header></Header>
    <DetailList :list="list"></DetailList>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/banner.vue'
import Header from './components/Header.vue'
import DetailList from './components/List.vue'
export default {
  name: 'Detail',
  data () {
    return {
      message: '详情',
      list: [{
        'title': '成人票',
        'children': [{
          'title': '成人三馆联票',
          'children': [{
            'title': '成人三馆联票 - 某一连锁店销售'
          }]
        }, {
          'title': '成人五馆联票'
        }]
      }, {
        'title': '学生票'
      }, {
        'title': '儿童票'
      }, {
        'title': '特惠票'
      }]
    }
  },
  components: {
    DetailBanner,
    Header,
    DetailList
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
