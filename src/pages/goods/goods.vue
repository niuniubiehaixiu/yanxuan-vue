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
          <div class="tab-item"
               :class="{active: +$route.params.id === index}"
               v-for="(tab, index) in tabs" :key="index">
            <RouterLink :to="`/goods/tab/${index}`">
              <span>{{tab.tabName}}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <Split/>
    <!--主体内容-->
    <div class="goods-content">
      <RouterView/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    mounted () {
      this.$store.dispatch('getTabs')
    },
    computed: {
      ...mapState({
        tabs: state => state.goods.tabs
      })
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #goodsContiner
    width 100%
    height 100%
    .goods-header
      width 100%
      height 160px
      background #fff
      position fixed
      .header-top
        width 100%
        height 85px
        display flex
        align-items center
        justify-content space-between
        box-sizing border-box
        padding 0px 15px
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
            &.active
              color: #B4282D;
              border-bottom: .04rem solid #B4282D;
              span
                color: #B4282D;

    .goods-content
      margin-top 160px
</style>
