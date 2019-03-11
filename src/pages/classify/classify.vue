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
          <li class="left-list-item" :class="classify.id === Number($route.query.classifyId) ? 'active' : ''"
              v-for="(classify,index) in classifyList.categoryL1List" :key="index">
            <router-link :to="`/classify/classifyList?classifyId=${classify.id}`">
              {{classify.name}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="content-right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      //调用actions数据
      this.$store.dispatch('getClassifyList')
      new BScroll('.content-left',{
        click:true
      })
    },
    computed:{
      ...mapState({
        classifyList: state =>state.classify.classifyList
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #classifyContiner
    width 100%
    height 100%
    //头部
    .classify-header
      position fixed
      top 0
      left 0
      z-index 100
      width 100%
      height 88px
      box-sizing border-box
      padding 10px 20px
      display flex
      justify-content center
      align-items center
      border-bottom 2px solid #eee
      background #FFF
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
        margin-top 88px
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

      /*.content-right
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
              text-overflow: ellipsis*/
</style>
