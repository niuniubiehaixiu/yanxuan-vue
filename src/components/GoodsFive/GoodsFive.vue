<template>
    <div id="Five-continer">
      <div class="header">
        <div class="shop-title">
          让生活更好的N种方式
        </div>
        <div class="shop-slogon">
          “{{reqlist.title}}”
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(look,index) in reqlist.lookList" :key="index">
              <img v-lazy="look.banner.picUrl" alt="">
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <Split/>
      <div class="content">
        <div class="shopContent-title">
          TA们的严选生活
        </div>
        <div class="shopContent-btn">
          <div class="text on">最新</div>
          <div class="text">本月最热</div>
          <div class="text">晒单合辑</div>
        </div>
        <div class="shopContent-show-wrapper">
          <div class="show-left">
            <div class="content" v-for="(topic,index) in reqshops" :key="index" v-show="index">
              <div class="banner">
                <img v-lazy="topic.bannerInfo.picUrl"
                     :style="{height:topic.bannerInfo.height<1000? 300 +'px' : 460 +'px'}" alt="">
              </div>
              <div class="text ellipsis">
                {{topic.content}}
              </div>
              <div class="desc">
                <div class="img">
                  <img :src="topic.avatar" alt="">
                </div>
                <div class="name">{{topic.nickName}}</div>
                <i class="iconfont icondianzan"></i>
                <span>0</span>
              </div>
              <div class="splic"></div>
            </div>

          </div>
          <div class="show-right">
            <div class="content"  v-for="(topic,index) in reqshops" :key="index" v-show="index + '-label'">
              <div class="banner">
                <img v-lazy="topic.bannerInfo.picUrl"
                     :style="{height:topic.bannerInfo.height<1000? 300 +'px' : 460 +'px'}"
                     alt="">
              </div>
              <div class="text ellipsis">
                {{topic.content}}
              </div>
              <div class="desc">
                <div class="img">
                  <img :src="topic.avatar" alt="">
                </div>
                <div class="name">{{topic.nickName}}</div>
                <i class="iconfont icondianzan"></i>
                <span>0</span>
              </div>
              <div class="splic"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {

    mounted(){
      this.$store.dispatch('getlist', ()=>{
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 30,
            freeMode: true
          });
        })
      })

    },
    computed:{
      ...mapState({
        reqshops:state=>state.goods.reqshops,
        reqlist:state=>state.goods.reqlist
      })
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #Five-continer
    width 100%
    height 100%
    .header
      width 100%
      padding 20px 0
      .shop-title
        width 100%
        height 40px
        line-height 40px
        font-size 30px
        color #7f7f7f
        text-align center
        margin-bottom 20px
      .shop-slogon
        width 100%
        height 48px
        line-height 48px
        font-size 35px
        text-align center
      .swiper-container
        width 100%
        height 248px
        margin 30px 0
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide img
            width 240px
            height 240px
            border-radius 20px

    .shopContent-title
      width 100%
      height 32px
      font-size 32px
      line-height 32px
      text-align center
      font-weight bold
      margin-top 80px
    .shopContent-btn
      display flex
      justify-content space-around
      margin 70px 0
      .text
        width 172px
        height 60px
        line-height 60px
        text-align center
        font-size 30px
        border-radius 15px
        background #f4f4f4
      .on
        background palegoldenrod
        color #b0955f
    .shopContent-show-wrapper
      width 100%
      height 100%
      display flex
      box-sizing border-box
      padding 0 20px
      .show-left
        width 50%
        height 100%
        .content
          width 100%
          height 100%
          .banner img
            width 345px
            height 460px
          .text
            width 345px
            height 40px
            font-size 30px
            margin 20px 10px 0 10px
          .desc
            width 100%
            height 50px
            display flex
            align-items center
            .img img
              width 48px
              height 48px
              border-radius 100%
              margin-right 10px
            .iconfont
              font-size 35px
              margin-left  150px
              color: #7f7f7f;
          .splic
            width 98%
            height 15px
            background #eee
      .show-right
        width 50%
        height 100%
        padding-left 10px
        .content
          width 100%
          height 100%
          .banner img
            width 345px
            height 460px
          .text
            width 345px
            height 40px
            font-size 30px
            margin 20px 10px 0 10px
          .desc
            width 100%
            height 50px
            display flex
            align-items center
            .img img
              width 48px
              height 48px
              border-radius 100%
              margin-right 10px
            .iconfont
              font-size 35px
              margin-left  150px
              color: #7f7f7f;
          .splic
            width 98%
            height 15px
            background #eee
</style>
