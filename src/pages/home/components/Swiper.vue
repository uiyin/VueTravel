<template>
  <div class="swiperwrapper">
    <!-- 加v-if就是为了防止轮播图展现最后一个，必须要加length,这样等数据出来后就会看的到 -->
    <swiper :options="swiperOption"
            ref="mySwiper"
            v-if="SwiperList.length">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in SwiperList"
                    :key="index"
                    @click.native="gotourl"
                    :id="item.id">
        <img class="imgcontent"
             :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['SwiperList'],
  name: 'HomeSwiper',
  data () {
    return {
      banners: [
        {
          'src': require('@/assets/images/banner1.jpg'),
          'link': 'http://www.baidu.com'
        },
        {
          'src': require('@/assets/images/banner2.jpg'),
          'link': 'http://piao.qunar.com/touch/'
        },
        {
          'src': require('@/assets/images/banner3.jpg'),
          'link': 'http://www.sohu.com'
        }
      ],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true,
        pagination: '.swiper-pagination',
        paginationType: 'bullets'
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    gotourl () {
      let index = this.swiper.activeIndex
      window.location.href = this.banners[index].link
    }
  }
}
</script>

<style lang="less">
@import '~styles/common.less';
.swiperwrapper {
  width: 100%;
  height: 26.6vw;
  background: #ccc;
  margin-bottom: 0.2rem;
  .imgcontent {
    width: 100%;
    height: auto;
    display: block;
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background: white;
      opacity: 1;
      &.swiper-pagination-bullet-active {
        background: @bgcolor;
      }
    }
  }
}
</style>
