<template>
  <div>
    <div class="header"
         v-if="flag">
      <router-link to="/"
                   class="iconwrap"
                   tag="div">
        <span class="iconfont icon-fanhui"></span>
      </router-link>
    </div>
    <div class="headercontent"
         v-if="!flag">
      <router-link to="/">
        <div class="header-left">
          <div class="iconfont icon-fanhui back-icon"></div>
        </div>
      </router-link>
      <div class="header-content"
           :style="styleobj">
        <div>景点位置</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '今天',
      flag: true,
      styleobj: {}
    }
  },
  activated () {
    document.documentElement.scrollTop = 0
    window.addEventListener('scroll', this.getTop)
  },
  deactivated () {
    window.removeEventListener('scroll', this.getTop)
  },
  methods: {
    getTop () {
      let top = document.documentElement.scrollTop
      if ((top > 70 && top < 210) || top > 400) {
        this.flag = false
        let zopacity = (top / 210) > 1 ? 1 : (top / 210)
        this.styleobj = {
          opacity: zopacity
        }
      } else if (top < 70) {
        this.flag = true
      }
    }
  }
}
</script>

<style scoped lang="less">
@import '~styles/common.less';
.header {
  position: absolute;
  left: 0px;
  top: 0.2rem;
  width: 100%;
  height: 0.8rem;
  .iconwrap {
    width: 0.8rem;
    height: 0.8rem;
    margin-left: 0.2rem;
    border-radius: 50%;
    background: black;
    color: white;
    line-height: 0.3rem;
    text-align: center;
    opacity: 0.6;
  }
}
.headercontent {
  line-height: 0.86rem;
  display: flex;
  background: @bgcolor;
  flex-flow: row nowrap;
  font-size: 14px;
  text-align: center;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  color: #fff;
  height: 0.86rem;

  a {
    text-decoration: none;
    color: white;
  }
  .header-left {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 0.64rem;
    height: 100%;
    z-index: 999;
    .back-icon {
      text-align: center;
      font-size: 20px;
    }
  }
  .header-content {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 0.86rem;
    font-size: 16px;
    color: #fff;
  }
}
</style>
