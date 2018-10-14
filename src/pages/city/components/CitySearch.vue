<template>
  <div class="citysearch">
    <div class="citybox">
      <div class="citywraper">
        <input class="citytext"
               type="text"
               placeholder="请输入城市名称或者拼音"
               v-model="keyword">
      </div>
      <!--遮罩层开始-->
      <div class="searchcontent"
           v-if="keyword">
      </div>
      <!--遮罩层结束-->
      <!--内容开始-->
      <div class="searchcontent2"
           v-if="keyword">
        <div v-if="listcontent.length>0">
          <div class="listitem"
               v-for="(item,index) in listcontent"
               :key="index"
               @click="changecity2(item)">{{item}}</div>
        </div>
        <div v-else>
          <div class="listitem">对不起没有符合的地点</div>
        </div>
      </div>

      <!--内容结束-->
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['city'],
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      listcontent: [],
      time: null
    }
  },
  methods: {
    changecity2 (res) {
      this.changecity(res)
      this.keyword = ''
      this.listcontent = []
      this.$router.push({ path: '/' })
    },
    ...mapMutations(['changecity'])
  },
  watch: {
    keyword () {
      // 设置节流防止多加数据
      if (this.time) {
        clearTimeout(this.time)
      }
      this.time = setTimeout(() => {
        let value = this.keyword
        if (!value) {
          this.listcontent = []
          return
        }
        let city = this.city
        let result = []
        for (let i in city) {
          let content = city[i]
          for (let n = 0; n < content.length; n++) {
            let name = content[n].name
            let pinyin = content[n].spell
            // console.log(name + '||' + pinyin)
            if (name.indexOf(value) > -1 || pinyin.indexOf(value) > -1) {
              result.push(name)
            }
          }
        }
        this.listcontent = result
      }, 100)
    }
  }
}

</script>

<style scoped lang="less">
@import '~styles/common.less';
.citysearch {
  .citybox {
    width: 100%;
    height: 0.86rem;
    background: @bgcolor;
    overflow: hidden;
    .citywraper {
      position: relative;
      width: 98%;
      height: 0.66rem;
      margin: 0 auto;
      margin-top: 0.1rem;
      background: #fff;
      border-radius: 5px;
      .citytext {
        position: absolute;
        left: 2%;
        top: 0px;
        width: 96%;
        height: 0.62rem;
        text-align: center;
        border: none;
        font-size: 14px;
        &:focus {
          outline: none;
        }
      }
    }
    .searchcontent {
      position: absolute;
      left: 0px;
      top: 1.72rem;
      bottom: 0px;
      right: 0px;
      background: #fff;
      opacity: 0.9;
      overflow: hidden;
      z-index: 1;
      filter: blur(1px);
    }
    .searchcontent2 {
      position: absolute;
      left: 0px;
      top: 1.72rem;
      bottom: 0px;
      right: 0px;
      overflow: hidden;
      z-index: 2;
      .listitem {
        border-bottom: 1px solid #ccc;
        line-height: 0.6rem;
        font-size: 14px;
        color: #777;
        z-index: 2;
        text-indent: 0.2rem;
      }
    }
  }
}
</style>
