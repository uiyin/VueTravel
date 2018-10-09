<template>
  <div>
    {{message}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '首页'
    }
  }
}
</script>

<style scoped lang="less">
@lvse: green;
div {
  color: @lvse;
}
</style>
