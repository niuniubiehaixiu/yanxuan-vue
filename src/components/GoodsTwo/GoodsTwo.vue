<template>
  <div id="Two-continer">
    <div class="left">
      <div class="header">
        <img v-lazy="topic.avatar" alt="">
        <span>{{topic.nickname}}</span>
      </div>
      <div class="title ellipsis">
        {{topic.title}}
      </div>
      <div class="decs">
        {{topic.subTitle}}
      </div>
      <div class="seeNum">
        <i class="iconfont iconyan"></i>
        <span>{{topic.readCount}}人看过</span>
      </div>
    </div>
    <div class="right">
      <div class="banner">
        <img v-lazy="topic.picUrl" alt="">
      </div>
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
  #Two-continer
    width 100%
    height 100%
    box-sizing border-box
    padding 30px
    display flex
    .left
      width 60%
      height 280px
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
      .decs
        width 100%
        height 43.5px
        margin-top 10px
        font-size 30px
        color #7f7f7f
      .seeNum
        margin-top 15px
        font-size 25px
        color #999
        pa
        .iconfont
          font-size 25px
          margin-right 15px

    .right
      width 40%
      height 280px
      img
        width 280px
        height 280px
</style>
