<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont icon-fanhui back-icon"></div>
      </div>
    </router-link>

    <div class="header-content">
      <div>城市选择</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  methods: {
  }
}
</script>

<style scoped lang="less">
// @import '~@/assets/styles/common.less';
@import '~styles/common.less';
.header {
  line-height: 0.86rem;
  display: flex;
  background: @bgcolor;
  flex-flow: row nowrap;
  font-size: 14px;
  text-align: center;
  position: relative;
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
