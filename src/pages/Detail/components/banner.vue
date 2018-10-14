<template>
  <div>
    <div class="banner">
      <img class="imgcontent"
           src="http://img1.qunarzz.com/sight/p0/1505/a6/a61815053184d725.water.jpg_600x330_2e7df514.jpg"
           alt="">
      <div class="bannercontent">
        <div class="bannerleft">天津光合谷（天沐）温泉(开始免费申请)</div>
        <div class="bannerright">
          <div class="iconfont icon-tupian iconbg"></div>
          <div class="ictontext"> 108</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
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
