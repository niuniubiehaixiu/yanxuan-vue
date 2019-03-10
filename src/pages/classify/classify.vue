<template>
  <div id="classifyContiner">
    <!--头部-->
    <div class="classify-header">
      <div class="search">
        <i class="iconfont iconziyuan"></i>
        <span>搜索产品，共21909款好物</span>
      </div>
    </div>
    <!--内容-->
    <div class="classify-content">
      <div class="content-left">
        <ul class="left-list">
          <li class="left-list-item active">推荐专区</li>
          <li class="left-list-item">冬季专区</li>
          <li class="left-list-item">爆品专区</li>
          <li class="left-list-item">新品专区</li>
          <li class="left-list-item">居家专区</li>
          <li class="left-list-item">服装专区</li>
          <li class="left-list-item">美食酒水</li>
          <li class="left-list-item">个人清洁</li>
          <li class="left-list-item">母婴亲子</li>
          <li class="left-list-item">运动旅行</li>
          <li class="left-list-item">数码家电</li>
          <li class="left-list-item">礼品特色</li>
        </ul>
      </div>
      <div class="content-right">
        <div class="right-content">
          <div class="right-content-img">
            <img src="http://yanxuan.nosdn.127.net/9eb09ecd7fc58151568f4b0b616db1cf.jpg" alt="">
          </div>
          <div class="right-content-list">
            <ul class="list">
              <li class="ilist-tem" >
                <img src="http://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span class="text">每日特惠好货每</span>
              </li>
              <li class="ilist-tem" >
                <img src="http://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span class="text">每日特惠好货</span>
              </li>
              <li class="ilist-tem" >
                <img src="http://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span class="text">每日特惠好货</span>
              </li>
              <li class="ilist-tem" >
                <img src="http://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span class="text">每日特惠好货</span>
              </li>
              <li class="ilist-tem" >
                <img src="http://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
                <span class="text">每日特惠好货</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #classifyContiner
    width 100%
    height 100%
    //头部
    .classify-header
      width 100%
      height 88px
      box-sizing border-box
      padding 10px 20px
      display flex
      justify-content center
      align-items center
      border-bottom 2px solid #eee
      .search
        width 90%
        height 56px
        font-size 25px
        background-color #ededed
        border-radius 0.10667rem
        display flex
        justify-content center
        align-items center
        padding 0
        .iconfont
          font-size 0.40rem
          padding-right 0.2rem
        span
          color #666
          font-size 0.373rem
    //内容
    .classify-content
      width 100%
      height 1148px
      display flex
      .content-left
        width 20%
        height 100%
        .left-list
          display flex
          flex-direction column
          align-items center
          .left-list-item
            margin-top 38px
            font-size 28px
            width 100%
            height 50px
            line-height 50px
            text-align center
            &.active
              border-left 10px solid #b4282d

      .content-right
        width 80%
        height 100%
        box-sizing border-box
        padding 35px
        .right-content-img
          height 192px
          width 528px
          margin-bottom 35px
          img
            width 100%
            height 100%
        .right-content-list
          height 648px
          width 528px
          .list
            width 100%
            height 100%
          .ilist-tem
            width 144px
            height 216px
            display block
            float left
            margin-right 32px
            .text
              font-size 23px
              color: #333
              text-align center
              line-height 30px
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis
</style>
