<template>
  <div>
    <div class="citylist">
      <div class="area">
        <div class="areatitle">
          当前城市
        </div>
        <div class="areacontent">
          <div class="areaitem">
            北京
          </div>
          <div class="areaitem">
            北京
          </div>
          <div class="areaitem">
            北京
          </div>
          <div class="areaitem">
            北京
          </div>
        </div>
      </div>
      <div class="area">
        <div class="areatitle">
          热门城市
        </div>
        <div class="areacontent">
          <div class="areaitem">
            北京
          </div>
          <div class="areaitem">
            北京
          </div>
          <div class="areaitem">
            北京
          </div>
          <div class="areaitem">
            北京
          </div>
        </div>
      </div>
      <div class="area">
        <div class="areatitle">
          A
        </div>
        <div class="listcontent">
          <div class="listitem border-bottom">北京</div>
          <div class="listitem border-bottom">北京</div>
          <div class="listitem border-bottom">北京</div>
          <div class="listitem border-bottom">北京</div>
          <div class="listitem border-bottom">北京</div>
          <div class="listitem border-bottom">北京</div>
          <div class="listitem border-bottom">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="areatitle">
          B
        </div>
        <div class="listcontent">
          <div class="listitem border-bottom">北京</div>
          <div class="listitem border-bottom">北京</div>
          <div class="listitem border-bottom">北京</div>
          <div class="listitem border-bottom">北京</div>
          <div class="listitem border-bottom">北京</div>
          <div class="listitem border-bottom">北京</div>
          <div class="listitem border-bottom">北京</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
