<template>
  <div>
    <div class="item"
         v-for="(item,index) in list"
         :key="index">
      <div class="iconfont icon-jiantouxia weizhi"></div>
      <div class="itemtitle">{{item.title}}</div>
      <div v-if="item.children"
           class="leftindent">
        <DetailList :list="item.children"></DetailList>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: ['list']
}
</script>

<style scoped lang="less">
@import '~styles/common.less';
.item {
  .weizhi {
    font-size: 14px;
    float: left;
    line-height: 0.6rem;
    margin-right: 0.2rem;
    color: @bgcolor;
    margin-left: 0.2rem;
  }
  .itemtitle {
    width: 100%;
    line-height: 0.6rem;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    color: @bgcolor;
  }
  .leftindent {
    .weizhi {
      text-indent: 0.2rem;
    }
  }
}
</style>
