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
  a {
    text-decoration: none;
    color: white;
  }
  line-height: 0.86rem;
  display: flex;
  background: @bgcolor;
  flex-flow: row nowrap;
  font-size: 14px;
  color: #fff;
  .header-left {
    width: 0.64rem;
    flex: 0 0 0.64rem;
    .back-icon {
      text-align: center;
      font-size: 20px;
    }
  }
  .header-content {
    flex: 1;
    font-size: 16px;
    color: #fff;
    text-align: center;
  }
}
</style>
