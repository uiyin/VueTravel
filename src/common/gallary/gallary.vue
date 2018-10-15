<template>
  <div>
    <div class="wrapper"
         @click="flagchange">
      <div class="swiperContent">
        <!-- 加v-if就是为了防止轮播图展现最后一个，必须要加length,这样等数据出来后就会看的到 -->
        <swiper :options="swiperOption"
                ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <img class="imgcontent"
                 src="http://img1.qunarzz.com/sight/p0/1505/a6/a61815053184d725.water.jpg_350x240_35738553.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="imgcontent"
                 src="http://img1.qunarzz.com/sight/p0/201310/12/e7930e5381028915c8d65eac.jpg_350x240_52cb1072.jpg">
          </swiper-slide>
        </swiper>
      </div>
      <!-- Optional controls -->
      <div class="swiper-pagination position"
           slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        loop: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper)
  },
  methods: {
    flagchange () {
      this.$emit('change', false)
    }
  }

}
</script>

<style scoped lang="less">
@import '~styles/common.less';
.wrapper {
  width: 100%;
  position: fixed;
  top: 0px;
  bottom: 0px;
  background: black;
  .swiperContent {
    background: black;
    position: absolute;
    left: 0px;
    top: 50%;
    right: 0px;
    transform: translate(0%, -50%);
    height: 72vw;
    .imgcontent {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .position {
    position: absolute;
    left: 0px;
    top: 70%;
    right: 0px;
    transform: translate(0%, -10%);
    height: 5vw;
    font-size: 16px;
    color: white;
  }
}
</style>
