<template>
  <div class="iconNav">
    <div class="iconNavContent">
      <swiper :options="swiperOption">
        <!-- 每一个swiper-slide就是一屏幕 -->
        <swiper-slide v-for="(content, page) in pages"
                      :key="page">
          <div class="iconNavItem"
               v-for="(item, index) in content"
               :key="index">
            <img :src="item.src"
                 alt=""
                 class="imgcontent">
            <p class="itemtext">{{item.text}}</p>
          </div>
        </swiper-slide>
      </swiper>
      <div class="iconnav_all"
           slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: '.iconnav_all',
        paginationType: 'bullets',
        paginationBulletRender: function (swiper, index, classname) {
          return "<span class='" + classname + "'style='margin-left:0.2rem;'>" +
            '</span>'
        }
      },
      dataall: [
        {
          'src': require('@/assets/images/iconnav_1.png'),
          'link': '',
          'text': '景点门票'
        },
        {
          'src': require('@/assets/images/iconnav_2.png'),
          'link': '',
          'text': '海昌极地'
        },
        {
          'src': require('@/assets/images/iconnav_3.png'),
          'link': '',
          'text': '天津必游'
        },
        {
          'src': require('@/assets/images/iconnav_4.png'),
          'link': '',
          'text': '盘山'
        },
        {
          'src': require('@/assets/images/iconnav_5.png'),
          'link': '',
          'text': '一日游'
        },
        {
          'src': require('@/assets/images/iconnav_6.png'),
          'link': '',
          'text': '游乐场'
        },
        {
          'src': require('@/assets/images/iconnav_7.png'),
          'link': '',
          'text': '天津欢乐谷'
        },
        {
          'src': require('@/assets/images/iconnav_8.png'),
          'link': '',
          'text': '打卡圣地'
        },
        {
          'src': require('@/assets/images/iconnav_9.png'),
          'link': '',
          'text': '天津相声'
        },
        {
          'src': require('@/assets/images/iconnav_10.png'),
          'link': '',
          'text': '全部玩乐'
        }
      ]
    }
  },
  computed: {
    pages () {
      let pages = []
      let value = this.dataall
      value.forEach((item, index) => {
        // 要是比0大就是第二页了
        let num = Math.floor(index / 8)
        // 存起来
        if (!pages[num]) {
          pages[num] = []
        }
        pages[num].push(value[index])
      })
      return pages
    }
  }
}
</script>
<style>
.swiper-pagination-bullets {
  font-size: 10px;
  bottom: 0px;
}
</style>

<style scoped lang="less">
@import '~styles/common.less';
.iconNav {
  .iconNavContent {
    width: 100%;
    height: 50.6vw;
    overflow: hidden;
    padding-top: 0.3rem;
    .iconNavItem {
      position: relative;
      width: 25%;
      height: 22vw;
      float: left;
      overflow: hidden;
      .imgcontent {
        width: 70%;
        height: auto;
        position: absolute;
        left: 15%;
        top: 0;
      }
      .itemtext {
        width: 100%;
        height: 20%;
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 14px;
        text-align: center;
        color: @fontcolor;
      }
    }
    .iconnav_all {
      text-align: center;
      margin-top: 0.2rem;
    }
  }
}
</style>
