<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-fanhui back-icon"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>
    </div>
    <router-link to="/city"
                 class="ziti">
      <div class="header-right">{{city}}
        <span class="iconfont icon-jiantouxia xia-icon"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
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
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: 20px;
    }
  }
  .header-input {
    flex: 1;
    background: #fff;
    border-radius: 5px;
    margin-top: 0.12rem;
    height: 0.64rem;
    margin-left: 0.2rem;
    color: #ccc;
    line-height: 0.64rem;
    padding-left: 0.2rem;
  }
  .ziti {
    color: white;
    .header-right {
      width: 1.6rem;
      float: right;
      text-align: center;
      font-size: 12px;
      .xia-icon {
        margin-left: 0.05rem;
        font-size: 10px;
      }
    }
  }
}
</style>
