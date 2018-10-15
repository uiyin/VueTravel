<template>
  <div class="zhouyou">
    <div class="zhanwei"></div>
    <div class="zhouyouheader border-bottom">
      <img src="../../../assets/images/huo.png"
           alt=""
           class="imgcontent">
      <div class="imgtext">{{header}}</div>
    </div>
    <div class="zhoucontent">
      <router-link :to="'/detail/'+item.id"
                   tag="div"
                   class="contentitem"
                   v-for="(item,index) in weekendList"
                   :key="index"
                   :id="item.id">
        <img :src="item.imgUrl"
             class="imgcontent"
             alt="">
        <p class="title">{{item.title}}</p>
        <p class="info">{{item.desc}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['weekendList'],
  data () {
    return {
      header: '周末游',
      dataall: [
        {
          'src': require('@/assets/images/zhouyou.jpg'),
          'title': '天津赏秋地推荐',
          'info': '飒飒秋风中，漫山的红叶翩翩翻转'
        },
        {
          'src': require('@/assets/images/zhouyou.jpg'),
          'title': '天津必游TOP10',
          'info': '到此领略北方港口城市的魅力'
        },
        {
          'src': require('@/assets/images/zhouyou.jpg'),
          'title': '本地人玩转天津',
          'info': '原来天津有这么多乐园'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import '~styles/common.less';
.zhouyou {
  overflow: hidden;
  .zhouyouheader {
    font-size: 16px;
    color: @fontcolor;
    width: 100%;
    height: 1rem;
    overflow: hidden;
    .imgcontent {
      margin-top: 0.1rem;
      display: block;
      float: left;
    }
    .imgtext {
      margin-top: 0.3rem;
      float: left;
      margin-left: 0.1rem;
    }
  }
  .zhoucontent {
    .contentitem {
      width: 100%;
      height: 4rem;
      border-bottom: 10px solid #f5f5f5;
      .imgcontent {
        width: 100%;
        height: auto;
        display: block;
      }
      .title,
      .info {
        width: 100%;
        font-size: 16px;
        color: @fontcolor;
        height: 0.5rem;
        line-height: 0.5rem;
        text-indent: 0.2rem;
      }
      .info {
        font-size: 12px;
      }
    }
  }
}
</style>
