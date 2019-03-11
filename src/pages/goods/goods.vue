<template>
    <div id="goodsContiner">
      <!--头部-->
      <div class="goods-header">
        <div class="header-top">
          <div class="left">
            <i class="iconfont iconshouye"></i>
          </div>
          <div class="center">
            <span class="text">发现</span>
            <span class="text1">甄选家</span>
          </div>
          <div class="right">
            <i class="iconfont iconziyuan"></i>
            <i class="iconfont icongouwuche"></i>
          </div>
        </div>
        <div class="header-bottom">
          <div class="tab">
            <div class="tab-item">
              <router-link to="/goods/tab1" replace>推荐</router-link>
            </div>
            <div class="tab-item">
              <router-link to="/goods/tab2" replace>收纳秘诀</router-link>
            </div>
            <div class="tab-item">
              <router-link to="/goods/tab3" replace>20元好物</router-link>
            </div>
            <div class="tab-item">
              <router-link to="/goods/tab4" replace>晒单</router-link>
            </div>
            <div class="tab-item">
              <router-link to="/goods/tab5" replace>达人</router-link>
            </div>
            <div class="tab-item">
              <router-link to="/goods/tab6" replace>HOME</router-link>
            </div>
          </div>
        </div>
      </div>
      <Split/>
    </div>
</template>

<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #goodsContiner
    width 100%
    height 100%
    .goods-header
      width 100%
      height 150px
      background #fff
      .header-top
        width 100%
        height 85px
        display flex
        align-items center
        justify-content space-between
        box-sizing border-box
        padding  0px 15px
        border-bottom 2px solid #eee
        .iconfont
          font-size 50px
        .center
          padding-left 40px
        .center .text
          font-size 40px
          font-weight bold
          color #b4282d
          vertical-align middle
          padding 0 15px
        .center .text1
          font-size 30px
          padding 0 15px
          vertical-align middle
        .right .iconfont
          padding-right 15px


      .header-bottom
        width 100%
        height 75px
        .tab
          display flex
          justify-content space-between
          align-items center
          box-sizing border-box
          padding 0 20px
          .tab-item
            font-size 30px
            height 75px
            line-height 75px

</style>
