<template>
    <div id="Three-continer">
      <div class="title">
        {{topic.title}}
      </div>
      <div class="desc">
        {{topic.subTitle}}
      </div>
      <ul class="banner">
        <li class="img" v-for="(item,index) in topic.itemList" :key="index">
          <img v-lazy="item.itemUrl" alt="">
        </li>
      </ul>
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
  #Three-continer
    width 100%
    height 100%
    box-sizing border-box
    padding 30px
    .title
      font-size 40px
      margin-bottom 10px
    .desc
      width 100%
      font-size 28px
      margin-top 10px
      line-height 30px
      color #7f7f7f
    .banner
      width 100%
      height 100%
      display flex
      flex-wrap wrap
      justify-content space-between
      img
        width 168px
        height 168px
        margin 10px 0
        background #f4f4f4
    .seeNum
      margin-top 15px
      font-size 25px
      color #999
      pa
      .iconfont
        font-size 25px
        margin-right 15px

</style>
