<template>
  <div>
    <div class="citylist"
         ref="citylist">
      <div>
        <div class="area"
             ref="nowcity">
          <div class="areatitle">
            当前城市
          </div>
          <div class="areacontent">
            <div class="areaitem">
              北京
            </div>
          </div>
        </div>
        <div class="area"
             ref="hotcity">
          <div class="areatitle">
            热门城市
          </div>
          <div class="areacontent">
            <div class="areaitem"
                 v-for="(item,index) in hotcity"
                 :key="index"
                 :id="item.id">
              {{item.name}}
            </div>

          </div>
        </div>
        <div class="area"
             v-for="(item,key,index2) in city"
             :key="index2"
             :ref="key">
          <div class="areatitle">
            {{key}}
          </div>
          <div class="listcontent">
            <div class="listitem border-bottom"
                 v-for="(content,index) in item"
                 :key="index"
                 :id="content.id">
              {{content.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: ['city', 'hotcity', 'letter'],
  data () {
    return {
      message: 'list',
      scrolly: 0,
      currentIndex: 0
    }
  },
  mounted () {
    // 绑定
    const citylist = this.$refs.citylist
    this.scroll = new BScroll(citylist, {
      probeType: 3
    })
    this.scroll.on('scroll', (res) => {
      let scrollY = Math.abs(Math.round(res.y))
      this.scrolly = scrollY
    })
  },
  computed: {
    listHeight () {
      let heightresult = []
      let city = this.city
      let nowcity = this.$refs.nowcity.clientHeight
      let hotcity = this.$refs.hotcity.clientHeight
      // 获取到以前的高度
      let heightall = nowcity + hotcity
      // 计算每个区块
      heightresult.push(heightall)

      for (var i in city) {
        heightall += this.$refs[i][0].clientHeight
        heightresult.push(heightall)
      }
      return heightresult
    },
    // 循环的就是字母
    letterresult () {
      let letters = []
      for (let i in this.city) {
        letters.push(i)
      }
      return letters
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    },
    scrolly () {
      let height = this.listHeight
      for (let i = 0; i < height.length; i++) {
        let height1 = height[i]
        let height2 = height[i + 1]
        if (this.scrolly <= height2 && this.scrolly >= height1) {
          this.currentIndex = i
        } else if (this.scrolly < height[0]) {
          this.currentIndex = 0
        } else if (this.scrolly > height[height.length - 1]) {
          this.currentIndex = height.length - 1
        }
      }
    },
    currentIndex () {
      let value = this.letterresult[this.currentIndex]
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped lang="less">
@import '~styles/common.less';
.citylist {
  position: absolute;
  top: 1.72rem;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
  .areatitle {
    width: 100%;
    height: 0.56rem;
    font-size: 14px;
    line-height: 0.56rem;
    text-indent: 3vw;
    background: #f5f5f5;
    color: #777;
  }
  .areacontent {
    width: 94vw;
    padding: 0.2rem 0rem;
    overflow: hidden;
    margin: 0 auto;
    .areaitem {
      width: 28%;
      font-size: 14px;
      line-height: 0.5rem;
      text-align: center;
      color: #777;
      border: 1px solid @bgcolor;
      border-radius: 5px;
      float: left;
      margin-right: 0.2rem;
      margin-bottom: 0.2rem;
    }
  }
  .listcontent {
    width: 100%;
    overflow: hidden;
    .listitem {
      line-height: 0.3rem;
      text-indent: 3vw;
      font-size: 14px;
      padding: 0.2rem 0rem;
    }
  }
}
</style>
