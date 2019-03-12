<template>
    <div id="Four-continer">
      <div class="title">
        {{topic.title}}
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(look,index) in topic.lookList" :key="index">
            <img v-lazy="look.picUrl" alt="">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="seeNum">
        <i class="iconfont iconyan"></i>
        <span>{{topic.readCount}}人看过</span>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    props:{
      topic:Object
    },
    mounted(){
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 10,
          slideShadows : true
        }
      });
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #Four-continer
    width 100%
    height 100%
    box-sizing border-box
    padding 30px
    .title
      font-size 40px
      margin-bottom 10px
      padding-bottom 20px
    .swiper-container
      width 100%
      height 250px
      .swiper-slide
        width 250px
        height 250px
        img
          width 250px
          height 250px
          border-radius 25px
    .seeNum
      margin-top 40px
      font-size 25px
      color #999
      pa
      .iconfont
        font-size 25px
        margin-right 15px

</style>
