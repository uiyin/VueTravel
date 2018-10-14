<template>
  <div>
    <div class="zhanwei"></div>
    <div class="youlike">
      <div class="youlikeheader border-bottom">
        <img src="../../../assets/images/like.png"
             alt=""
             class="imgcontent">
        <div class="imgtext">{{header}}</div>
      </div>
      <div class="contentall">

        <router-link :to="'/detail/'+item.id"
                     tag="div"
                     class="contentitem border-bottom"
                     v-for="(item,index) in RecommendList"
                     :key="index"
                     :id="item.id">
          <div class="left">
            <img :src="item.imgUrl"
                 alt="">
          </div>
          <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="info"></div>
            <div class="content">{{item.desc}}</div>
          </div>
        </router-link>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  props: ['RecommendList'],
  data () {
    return {
      header: '猜你喜欢',
      dataall: [
        {
          'src': require('@/assets/images/bangdan1.jpg'),
          'link': '',
          'text': '天津海昌极地海洋公园',
          'price': '￥50.00元起',
          'info': '帅过的人都去过了,你还等什么'

        },
        {
          'src': require('@/assets/images/bangdan2.jpg'),
          'link': '',
          'text': '天津欢乐谷',
          'price': '￥70.00元起',
          'info': '帅过的人都去过了,你还等什么'
        },
        {
          'src': require('@/assets/images/bangdan3.jpg'),
          'link': '',
          'text': '天津方特欢乐世界',
          'price': '￥80.00元起',
          'info': '帅过的人都去过了,你还等什么'
        },
        {
          'src': require('@/assets/images/bangdan4.jpg'),
          'link': '',
          'text': '天津盘山风景名胜区',
          'price': '￥90.00元起',
          'info': '帅过的人都去过了,你还等什么'
        }, {
          'src': require('@/assets/images/bangdan5.jpg'),
          'link': '',
          'text': '光合谷旅游渡假区',
          'price': '￥150.00元起',
          'info': '帅过的人都去过了,你还等什么'
        },
        {
          'src': require('@/assets/images/bangdan6.jpg'),
          'link': '',
          'text': '梨木台',
          'price': '￥120.00元起',
          'info': '帅过的人都去过了,你还等什么'
        },
        {
          'src': require('@/assets/images/bangdan7.jpg'),
          'link': '',
          'text': '大沽口炮台遗址',
          'price': '￥90.00元起',
          'info': '帅过的人都去过了,你还等什么'
        },
        {
          'src': require('@/assets/images/bangdan8.jpg'),
          'link': '',
          'text': '塘沽外滩游船',
          'price': '￥180.00元起',
          'info': '帅过的人都去过了,你还等什么'
        },
        {
          'src': require('@/assets/images/bangdan9.jpg'),
          'link': '',
          'text': '静园-末代皇帝溥仪旧居',
          'price': '￥220.00元起',
          'info': '帅过的人都去过了,你还等什么'
        },
        {
          'src': require('@/assets/images/bangdan10.jpg'),
          'link': '',
          'text': '天津泰达航母主题公园',
          'price': '￥190.00元起',
          'info': '帅过的人都去过了,你还等什么'
        }

      ]
    }
  }
}
</script>

<style scoped lang="less">
@import '~styles/common.less';
.flexall() {
  flex: 1;
  width: 100%;
  font-size: 16px;
}
.youlike {
  overflow: hidden;
  .youlikeheader {
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
  .contentall {
    .contentitem {
      width: 96%;
      height: 2rem;
      margin: 0 auto;
      padding: 0 0.2rem;
      overflow: hidden;
      display: flex;
      flex-flow: row nowrap;
      .left {
        flex: 0 0 1.5rem;
        height: 1.5rem;
        margin-top: 0.25rem;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .right {
        flex: 1;
        height: 1.5rem;
        margin-top: 0.25rem;
        margin-left: 0.2rem;
        display: flex;
        flex-flow: column nowrap;
        .title {
          .flexall();
          margin-top: 0.2rem;
          font-size: 16px;
          color: @bgcolor;
        }
        .info {
          .flexall();
          margin-top: 0.1rem;
          font-size: 14px;
          color: red;
        }
        .content {
          .flexall();
          margin-top: 0.1rem;
          font-size: 14px;
          color: @fontcolor;
        }
      }
    }
  }
}
</style>
