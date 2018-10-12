<template>
  <div class="citysearch">
    <div class="citybox">
      <div class="citywraper">
        <input class="citytext"
               type="text"
               placeholder="请输入城市名称">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style scoped lang="less">
@import '~styles/common.less';
.citysearch {
  .citybox {
    width: 100%;
    height: 0.86rem;
    background: @bgcolor;
    overflow: hidden;
    .citywraper {
      position: relative;
      width: 98%;
      height: 0.66rem;
      margin: 0 auto;
      margin-top: 0.1rem;
      background: #fff;
      border-radius: 5px;
      .citytext {
        position: absolute;
        left: 2%;
        top: 0px;
        width: 96%;
        height: 0.62rem;
        text-align: center;
        border: none;
        font-size: 14px;
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
