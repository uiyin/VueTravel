<template>
  <div class="bangdan">
    <div class="zhanwei"></div>
    <div class="bangdanheader border-bottom">
      <img src="../../../assets/images/huo.png"
           alt=""
           class="imgcontent">
      <div class="imgtext">{{header}}</div>
    </div>
    <div class="bangdanwrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in dataall"
                      :key="index"
                      class="slidecontent">
          <img :src="item.src"
               alt=""
               class="imgcontent">
          <p class="textcontent">{{item.text}}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header: '本周热门榜单',
      dataall: [
        {
          'src': require('@/assets/images/bangdan1.jpg'),
          'link': '',
          'text': '天津海昌极地海洋公园'
        },
        {
          'src': require('@/assets/images/bangdan2.jpg'),
          'link': '',
          'text': '天津欢乐谷'
        },
        {
          'src': require('@/assets/images/bangdan3.jpg'),
          'link': '',
          'text': '天津方特欢乐世界'
        },
        {
          'src': require('@/assets/images/bangdan4.jpg'),
          'link': '',
          'text': '天津盘山风景名胜区'
        }, {
          'src': require('@/assets/images/bangdan5.jpg'),
          'link': '',
          'text': '光合谷旅游渡假区'
        },
        {
          'src': require('@/assets/images/bangdan6.jpg'),
          'link': '',
          'text': '梨木台'
        },
        {
          'src': require('@/assets/images/bangdan7.jpg'),
          'link': '',
          'text': '大沽口炮台遗址'
        },
        {
          'src': require('@/assets/images/bangdan8.jpg'),
          'link': '',
          'text': '塘沽外滩游船'
        },
        {
          'src': require('@/assets/images/bangdan9.jpg'),
          'link': '',
          'text': '静园-末代皇帝溥仪旧居'
        },
        {
          'src': require('@/assets/images/bangdan10.jpg'),
          'link': '',
          'text': '天津泰达航母主题公园'
        }

      ],
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        observer: true,
        observeParents: true

      }
    }
  }
}
</script>

<style scoped lang="less">
@import '~styles/common.less';
/deep/.slidecontent {
  width: 2rem;
  height: 2.5rem;
  float: left;
  margin-left: 0.2rem;
}
.bangdan {
  .zhanwei {
    width: 100%;
    height: 0.4rem;
    background: #f5f5f5;
  }
  .bangdanheader {
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
  .bangdanwrapper {
    .imgcontent {
      width: 100%;
      height: auto;
      display: block;
    }
    .textcontent {
      width: 100%;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      color: @fontcolor;
    }
  }
}
</style>
