<template>
  <div>
    <div class="lettercontent">
      <div class="letteritem"
           v-for="(item,key,index) in cityletter"
           :key="index">{{key}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cityletter'],
  data () {
    return {
      message: '信息'
    }
  }
}
</script>

<style scoped lang="less">
@import '~styles/common.less';
.lettercontent {
  position: absolute;
  right: 0px;
  top: 1.72rem;
  bottom: 0px;
  width: 0.4rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  .letteritem {
    width: 100%;
    height: 0.4rem;
    text-align: center;
    color: @bgcolor;
    font-size: 12px;
  }
}
</style>
