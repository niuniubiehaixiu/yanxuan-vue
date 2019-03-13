<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/home'}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont iconshouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/classify/classifyList'}" @click="goto('/classify/classifyList')">
      <span class="item_icon">
        <i class="iconfont iconbingzhuangtu"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path.includes('/goods/tab')}" @click="goto('/goods')">
      <span class="item_icon">
        <i class="iconfont iconshitu"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shopcart'}" @click="goto('/shopcart')">
      <span class="item_icon">
        <i class="iconfont icongouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/presonal'}" @click="goto('/presonal')">
      <span class="item_icon">
        <i class="iconfont iconwode"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer_guide
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 98px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #b4282d
      span
        font-size 28px
        margin-top 10px
        .iconfont
          font-size 40px
</style>
