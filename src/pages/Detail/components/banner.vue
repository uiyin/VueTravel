<template>
  <div>
    <div class="banner"
         @click="flagchange">
      <img class="imgcontent"
           :src="dataall.bannerImg"
           alt="">
      <div class="bannercontent">
        <div class="bannerleft">{{dataall.sightName}}</div>
        <div class="bannerright">
          <div class="iconfont icon-tupian iconbg"></div>
          <div class="ictontext"
               v-if="dataall.gallaryImgs">{{dataall.gallaryImgs.length}}</div>
        </div>
      </div>
    </div>
    <FadeAnimation>
      <CommonGallary slot="fade"
                     v-if="flag"
                     @change="close"
                     :list='dataall.gallaryImgs'></CommonGallary>
    </FadeAnimation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: ['dataall'],
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      flag: false
    }
  },
  methods: {
    close (e) {
      this.flag = e
    },
    flagchange () {
      this.flag = true
    }
  }
}
</script>

<style scoped lang="less">
@import '~styles/common.less';
.banner {
  width: 100%;
  height: 54vw;
  position: relative;
  .imgcontent {
    width: 100%;
    height: 100%;
    display: block;
  }
  .bannercontent {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 0.6rem;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    display: flex;
    flex-flow: row nowrap;
    color: white;
    text-align: center;
    .bannerleft {
      flex: 1;
      height: 0.6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      line-height: 0.6rem;
    }
    .bannerright {
      flex: 0 0 1rem;
      height: 0.6rem;
      position: relative;
      .iconbg {
        font-size: 14px;
        position: absolute;
        left: 0.05rem;
        top: 0.2rem;
      }
      .ictontext {
        font-size: 14px;
        position: absolute;
        left: 0.4rem;
        top: 0.2rem;
      }
    }
  }
}
</style>
