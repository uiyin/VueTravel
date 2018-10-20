<template>
  <div>
    <DetailBanner :dataall="dataall"></DetailBanner>
    <Header></Header>
    <DetailList :list="list"></DetailList>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/banner.vue'
import Header from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      message: '详情',
      dataall: {}
    }
  },
  mounted () {
    let id = this.$route.params.id
    let data = {
      params: {
        id: id
      }
    }
    axios.get('/static/mock/detail.json', data).then(this.getdata)
  },
  methods: {
    getdata (res) {
      let resresult = res.data
      if (resresult.ret) {
        this.dataall = resresult.data
      }
    }
  },
  components: {
    DetailBanner,
    Header,
    DetailList
  },
  computed: {
    list () {
      return this.dataall.categoryList
    }
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
