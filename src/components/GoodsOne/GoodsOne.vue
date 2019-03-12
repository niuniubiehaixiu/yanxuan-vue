<template>
    <div id="One-continer">
      <div class="header">
        <img v-lazy="topic.avatar" alt="">
        <span>{{topic.nickname}}</span>
      </div>
      <div class="title">
       {{topic.title}}
      </div>
      <div class="banner">
        <img v-lazy="topic.picUrl" alt="">
      </div>
      <div class="seeNum">
        <i class="iconfont iconyan"></i>
        <span>{{topic.readCount}}人看过</span>
      </div>
    </div>
</template>

<script>
  export default {
    props:{
      topic:Object
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #One-continer
    width 100%
    height 100%
    box-sizing border-box
    padding 20px
    .header
      width 100%
      height 30px
      padding-bottom 40px
      img
        width 41px
        height 41px
        border-radius 100%
      span
        vertical-align super
        font-size 30px
        margin-left 15px
    .title
      width 100%
      height 92px
      font-size 35px
      line-height 50px
      padding-bottom 10px
    .banner
      width 100%
      height 394px
      img
        width 100%
        height 100%
    .seeNum
      margin-top 15px
      font-size 30px
      color #999
      pa
      .iconfont
        font-size 30px
        margin-right 15px
</style>
