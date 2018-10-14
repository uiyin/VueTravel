<template>
  <div>
    <!-- 加prevent是阻止默认事件让touchmove执行 -->
    <div class="lettercontent">
      <div class="letteritem"
           v-for="(item,index) in letters"
           :key="index"
           @touchstart.prevent="startmove"
           @touchmove="move"
           @touchend="end"
           @click="change"
           :ref="item">{{item}}

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cityletter', 'letter'],
  data () {
    return {
      message: '信息',
      status: false,
      timer: null
    }
  },
  computed: {
    // 循环的就是字母
    letters () {
      let letters = []
      for (let i in this.cityletter) {
        letters.push(i)
      }
      return letters
    }
  },
  mounted () {
    setTimeout(() => {
      this.$nextTick(() => {
        this.$refs['A'][0].style.color = 'red'
      })
    }, 200)
  },
  watch: {
    letter () {
      // 获取到对应的值
      let value = this.letter
      // 获取到所有的字母
      let list = this.letters
      for (let i = 0; i < list.length; i++) {
        if (value === list[i]) {
          this.$refs[list[i]][0].style.color = 'red'
        } else {
          this.$refs[list[i]][0].style.color = '#007bb8'
        }
      }
    }
  },
  methods: {
    startmove () {
      // 开启滑动
      this.status = true
    },
    move (e) {
      if (this.status) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let start = e.touches[0].clientY - 176
          let index = Math.floor(start / 20)
          let letter = this.letters
          if (index >= 0 && index <= this.letters.length) {
            let value = this.letters[index]
            for (let i = 0; i < letter.length; i++) {
              if (value === letter[i]) {
                this.$refs[value][0].style.color = 'green'
              } else {
                this.$refs[letter[i]][0].style.color = '#007bb8'
              }
            }
            this.$emit('change', value)
          }
        }, 16)
      }
    },
    end () {
      this.status = false
    },
    change (e) {
      let value = e.target.innerText
      let letter = this.letters
      for (let i = 0; i < letter.length; i++) {
        if (value === letter[i]) {
          this.$refs[value][0].style.color = 'green'
        } else {
          this.$refs[letter[i]][0].style.color = '#007bb8'
        }
      }
      this.$emit('change', value)
    }
  }

}
</script>

<style scoped lang="less">
@import '~styles/common.less';
.lettercontent {
  position: absolute;
  right: 0px;
  top: 1.72rem;
  bottom: 0px;
  width: 0.4rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  .letteritem {
    width: 100%;
    height: 0.4rem;
    text-align: center;
    color: @bgcolor;
    font-size: 12px;
  }
}
</style>
