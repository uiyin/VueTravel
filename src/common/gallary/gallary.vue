<template>
  <div>
    <div class="wrapper"
         @click="flagchange">
      <div class="swiperContent">
        <!-- 加v-if就是为了防止轮播图展现最后一个，必须要加length,这样等数据出来后就会看的到 -->
        <swiper :options="swiperOption"
                ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="(item,index) in list"
                        :key="index">
            <img class="imgcontent"
                 :src="item">
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
  props: ['list'],
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
    // console.log('this is current swiper instance object', this.swiper)
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
  z-index: 1;
  .swiperContent {
    background: black;
    position: absolute;
    left: 0px;
    top: 40%;
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
    top: 80%;
    right: 0px;
    transform: translate(0%, -10%);
    height: 5vw;
    font-size: 16px;
    color: white;
  }
}
</style>
