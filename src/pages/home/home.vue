<template>
  <div id="homeContiner">
    <!--头部-->
    <div class="header">
      <div class="header_Top">
        <a class="logo" href="javascript:;"></a>
        <div class="search">
          <i class="iconfont iconziyuan"></i>
          <span>搜索产品，共21909款好物</span>
        </div>
        <div class="loginBt">登陆</div>
      </div>
      <!-- 头部滚动导航  -->
      <div class="header-nav-some-wrap">
        <div class="header-nav-some">
          <div class="nav-list" v-show="!isShowAllCate">
            <div class="tab active">
              <span>推荐</span>
            </div>
            <div class="tab">
              <span>居家生活</span>
            </div>
            <div class="tab">
              <span>服饰鞋包</span>
            </div>
            <div class="tab">
              <span>美食酒水</span>
            </div>
            <div class="tab">
              <span>个人清洁</span>
            </div>
            <div class="tab">
              <span>运动旅行</span>
            </div>
            <div class="tab">
              <span>数码家电</span>
            </div>
            <div class="tab">
              <span>运动旅行</span>
            </div>
            <div class="tab">
              <span>数码家电</span>
            </div>
          </div>
        </div>
        <div class="iconfont iconxiangxia2 toggle-btn" :class="{toggle: isShowAllCate}" @click="toggleShowCate"></div>
      </div>
      <!--全部频道-->
      <div class="header-nav-all" v-show="isShowAllCate">
        <div class="nav-all">
          <span>全部频道</span>
        </div>
        <div class="moreCate">
          <a href="javascript:;" class="active">
            <span>推荐</span>
          </a>
          <a href="javascript:;">
            <span>居家生活</span>
          </a>
          <a href="javascript:;">
            <span>服装鞋包</span>
          </a>
          <a href="javascript:;">
            <span>美食酒水</span>
          </a>
          <a href="javascript:;">
            <span>个人清洁</span>
          </a>
          <a href="javascript:;">
            <span>母婴亲子</span>
          </a>
        </div>
      </div>
    </div>
    <!--主体-->
    <div class="homeContent">
      <!--遮罩层-->
      <div class="mask" v-show="isShowAllCate"></div>
      <!--轮播图-->
      <div class="swiper-banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/fcd73c09a0abb558169372056d0c2d4b.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/cacd06411c2bdda38ab5e25bc14ca6a9.png?imageView&amp;quality=75&amp;thumbnail=750x0">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/456abfb6e481a941444e8840005c88ed.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

        </div>
      </div>
      <!--slogan-->
      <div class="slogan">
        <div class="slogan-item">
          <i class="iconfont iconwangyi"></i>
          <span>网易自营品牌</span>
        </div>
        <div class="slogan-item">
          <i class="iconfont iconweibiaoti-"></i>
          <span>30天无忧退货</span>
        </div>
        <div class="slogan-item">
          <i class="iconfont iconico_home_obligation"></i>
          <span>48小时快速退款</span>
        </div>
      </div>
      <!--商品列表-->
      <div class="shopList">
        <ul class="shoplist-item">
          <li>
            <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
            <span>居家生活</span>
          </li>
          <li>
            <img class="img" src="http://yanxuan.nosdn.127.net/fb9dde0c1593536c18c8e12b6f49eb17.png"
                 data-reactid=".0.4.0.0.0.0.$0/=1$0.$1.0.0">
            <span>服饰鞋包</span>
          </li>
          <li>
            <img class="img" src="http://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png"
                 data-reactid=".0.4.0.0.0.0.$0/=1$0.$2.0.0">
            <span>美食酒水</span>
          </li>
          <li>
            <img class="img" src="http://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"
                 data-reactid=".0.4.0.0.0.0.$0/=1$0.$3.0.0">
            <span>个护清洁</span>
          </li>
          <li>
            <img class="img" src="http://yanxuan.nosdn.127.net/63682bd2df06963251b2715e20f98a75.png"
                 data-reactid=".0.4.0.0.0.0.$0/=1$0.$4.0.0">

            <span>限时购</span>
          </li>
          <li>
            <img class="img" src="http://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"
                 data-reactid=".0.4.0.0.0.0.$0/=1$0.$5.0.0">
            <span>母婴亲子</span>
          </li>
          <li>
            <img class="img" src="http://yanxuan.nosdn.127.net/23be40a05926faf2f2a81a08a1c53164.png"
                 data-reactid=".0.4.0.0.0.0.$0/=1$0.$6.0.0">
            <span>运动旅行</span>
          </li>
          <li>
            <img class="img" src="http://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png"
                 data-reactid=".0.4.0.0.0.0.$0/=1$0.$7.0.0">
            <span>数码家电</span>
          </li>
          <li>
            <img class="img" src="http://yanxuan.nosdn.127.net/e83bd330713b66a8d4e8eb0cefed8996.png"
                 data-reactid=".0.4.0.0.0.0.$0/=1$0.$8.0.0">
            <span>礼品特色</span>
          </li>
          <li>
            <img class="img" src="http://yanxuan.nosdn.127.net/51f5a91f10ba745ec68340b98315acf5.png"
                 data-reactid=".0.4.0.0.0.0.$0/=1$0.$9.0.0">
            <span>超级会员</span>
          </li>
        </ul>
      </div>
      <!--推荐-->
      <div class="recommend">
        <div class="recommend-top">
          <img src="https://yanxuan.nosdn.127.net/15519407811151838.gif?imageView&thumbnail=750x0&quality=75" alt="">
        </div>
        <div class="recommend-bottom">
          <img src="https://yanxuan.nosdn.127.net/15519407902381839.jpg?imageView&thumbnail=375x0&quality=75" alt="">
          <img src="https://yanxuan.nosdn.127.net/15520281195103024.jpg?imageView&thumbnail=375x0&quality=75" alt="">
        </div>
      </div>
      <div class="split"></div>
      <!--新人专享-->
      <div class="exclusive">
        <div class="ex-top">-- 新人专享 --</div>
        <div class="ex-bottom">
          <div class="ex-bottom-left">
            <div class="ex-text">
              新人专享礼包
            </div>
            <div class="ex-img">
              <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" alt="">
            </div>
          </div>
          <div class="ex-bottom-right">
            <div class="is-right-top">
              <div>
                <div class="text1">福利社</div>
                <div class="text2">今日特价</div>
              </div>
              <div class="img">
                <img
                  src="http://yanxuan.nosdn.127.net/1d7f2106b3837a6dc0fd7424d09b2b74.png?imageView&thumbnail=200x200&quality=75"
                  alt="">
              </div>
            </div>
            <div class="is-right-bottom">
              <div>
                <div class="text1">新人拼团</div>
                <div class="text2">1元起包邮</div>
              </div>
              <div class="img">
                <img
                  src="http://yanxuan.nosdn.127.net/cc42465d82beee08db0ba10748d43390.png?imageView&thumbnail=200x200&quality=75"
                  alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <!--私人定制-->
      <div class="personalShop">
        <div class="personalShop-title">私人订制</div>
        <div class="personalShop-carousel">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(personal,index) in personalShopArr" :key="index">
                <div class="personalShop-item" v-for="(good,index) in personal" :key="index">
                  <img class="primaryPic" :src="good.primaryPicUrl" alt="">
                  <div class="text">
                    <span class="name">{{good.name}}</span>
                    <span class="price">¥{{good.retailPrice}}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <!--人气推荐-->
      <div class="popularGoods">
        <div class="popularGoods-header">
          <span class="popularGoods-title">人气推荐</span>
          <span class="more">更多></span>
        </div>
        <div class="spItem" v-for="(popularItem,index) in categorys.popularItemList" v-if="index <= 0" :key="index">
          <div class="spItem-img">
            <!--<img v-lazy="popularItem.primaryPicUrl" alt="">-->
            <img :src="popularItem.primaryPicUrl" alt="">
          </div>
          <div class="spItem-des">
            <div class="name">{{popularItem.name}}</div>
            <div class="desc">{{popularItem.simpleDesc}}</div>
            <div class="price">{{popularItem.retailPrice}}</div>
          </div>
        </div>
        <ul class="popularGoods-goods">
          <li class="popularGoods-good" v-for="(popularItem, index) in categorys.popularItemList" v-if="index > 0"
              :key="index">
            <img class="primaryPic" :src="popularItem.primaryPicUrl" alt="">
            <div class="text">
              <span class="name ellipsis">{{popularItem.name}}</span>
              <span class="price">¥{{popularItem.retailPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="split"></div>
      <!--分类-->
      <div v-for="(category,index) in categorys.categoryModule" :key="index">
        <Category :category="category" :index="index"/>
      </div>

      <!--声明-->
      <div class="ftWrap">
        <div class="ftContent">
          <div class="bd">
            <a class="goApp" href="javascript:;">下载APP</a>
            <a class="goPc" href="javascript:;">电脑版</a>
          </div>
          <p class="copyRight">
            <span>网易公司版权所有 © 1997-</span>
            <span>2019</span>
            <br>
            <span>木木到此一游</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import Category from '../../components/Category/Category'
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        isShowAllCate:false
      }

    },

    mounted () {
      //调用actions获取数据
      this.$store.dispatch('getCategorys')



    },
    computed: {
      ...mapState({
        categorys: state => state.home.categorys,
      }),

      //私人定制列表加工
      personalShopArr () {
        const {categorys} = this
        if (categorys.personalShop){
          const personalShop =categorys.personalShop
          const len = personalShop.length
          const size = 3
          let resultArr=[]
          for (let i = 0; i < len; i+=size) {
            let result = personalShop.slice(i,i+size)
            resultArr.push(result)
          }
          return resultArr
        }

      }
    },
    methods:{
      toggleShowCate() {
        this.isShowAllCate = !this.isShowAllCate
      },
      //滑动
      _initScroll(){
        new BScroll('.header-nav-some', {
          click: true,
          scrollX: true, // 水平滑动
        })
      },

      //轮播图
      _initSwiper(){
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true, // 循环模式
          autoplay: true
        })
      }
    },
    watch:{
      categorys(){
        this.$nextTick(()=>{
          this._initSwiper()
          this._initScroll()
        })
      }
    },
    components: {
      Category
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #homeContiner
    width 100%
    height 100%
    //头部
    .header
      width 100%
      background #fff
      position fixed
      left 0
      top 0
      z-index 200
      .header_Top
        display flex
        align-items center
        justify-content: space-between
        padding 0.21333rem 0.4rem
        .logo
          width 1.84rem
          height 0.53333rem
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
          background-repeat no-repeat
        .search
          width 65%
          height 0.74667rem
          font-size 0.37333rem
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
        .loginBt
          width 0.98667rem
          height 0.5333rem
          line-height 0.5333rem
          text-align center
          color #b4282d
          border 1px solid #b4282d
          border-radius 0.10677rem
          font-size 0.32rem

      .headerNav-title
        display flex
        width 100%
        height 0.8rem
        line-height 0.8rem
        .nav-left
          display flex
          .headerNav-title span
            font-size 0.37333rem
      //头部滚动导航
      .header-nav-some-wrap
        display flex
        justify-content space-around
        width 100%
        .header-nav-some
          width 100%
          height 60px
          overflow hidden
          .nav-list
            display flex
            height: 60px
            width 1500px
            line-height 60px
            padding-left 12px

            .tab
              font-size: 28px
              flex: 1 0 auto;
              margin-left: 15px
              padding: 0 15px;
              text-align: center;
              color #333
              &.active
                color: #b4282d
                border-bottom 4px solid #b4282d


      //切换按钮
      .toggle-btn
        width 60px
        height 60px
        line-height 60px
        font-size 30px
        text-align center
        margin 0 50px 0 65px
        transition all 0.3s
        &.toggle
          transform rotate(180deg)

    //全部频道
    .header-nav-all
      background-color #fff
    .nav-all
      width 650px
      height 60px
      line-height 60px
      margin-left 40px
      font-size 28px
    .moreCate
      font-size: .32rem;
      padding-top: .32rem;
      overflow hidden
      a
        display inline-block
        width: 2rem;
        height: .74667rem;
        line-height: .74667rem;
        text-align: center;
        float: left;
        color #333
        margin-bottom: .53333rem;
        margin-left: .4rem;
        background: #FAFAFA;
        border: 1px solid #CCC;
        border-radius: .05333rem;
        &.active
          border: 1px solid #b4282d;
          color: #b4282d;

    //主体部分
    .homeContent
      margin-bottom 99px
      //遮罩层
      .mask
        position: fixed;
        background: rgba(0, 0, 0, .5);
        z-index 2
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      //轮播图
      .swiper-banner
        width: 100%;
        margin-top 148px
        position: relative
        left 0
        top 0
        .swiper-container
          width 100%
          height 100%
          img
            width 100%
            height 100%

      //slogan
      .slogan
        width 100%
        height 72px
        display flex
        justify-content space-around
        align-items center
        .slogan-item
          font-size 25px
          color #b4282d
        .iconfont
          font-size 25px
          color #b4282d
      //商品列表
      .shopList
        width 100%
        height 392px
        .shoplist-item
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          li
            width 110px
            height 156px
            display flex
            flex-direction column
            align-items center
            padding 10px 20px
            img
              width 110px
              height 110px
              padding-bottom 15px

      //推荐
      .recommend
        width 100%
        height 430px
        margin-bottom 20px
        .recommend-top
          width 100%
          height 197px
          img
            width 100%
            height 100%
        .recommend-bottom
          width 100%
          display flex
          height 253px
          box-sizing border-box
          padding-bottom 15px
          img
            width 100%
            height 100%
      .split
        width 100%
        height 20px
        background-color #eee
      //新人专享
      .exclusive
        width 100%
        height 558px
        margin-top 15px
        margin-bottom 30px
        .ex-top
          height 90px
          line-height 90px
          font-size 35px
          text-align center
        .ex-bottom
          width 100%
          height 484px
          display flex
          justify-content center
          align-items center
          .ex-bottom-left
            width 45%
            height 434px
            background #F9E9CF
            margin-right 5px
            display flex
            flex-direction column
            align-items center
            .ex-text
              padding 35px 30px 15px 10px
              font-size 35px
            .ex-img
              margin 35px auto
          .ex-bottom-right
            width 45%
            height 434px
            .is-right-top
              width 338px
              height 213px
              margin-bottom 8px
              background #FBE2D3
              .text1
                font-size 35px
                padding 20px 0 5px 20px
              .text2
                padding-left 22px
                color #7F7F7F
              .img
                float right
                margin-top -50px
            .is-right-bottom
              width 338px
              height 213px
              background #FFECC2
              .text1
                font-size 35px
                padding 20px 0 5px 20px
              .text2
                padding-left 22px
                color #7F7F7F
              .img
                float right
                margin-top -50px
      // 私人定制
      .personalShop
        .personalShop-title
          width: 100%;
          height: 1.33333rem;
          line-height: 1.33333rem;
          font-size: .42667rem;
          background: #fff;
          overflow: hidden;
          box-sizing border-box
          padding 0 20px

        .personalShop-carousel
          width: 100%

          .swiper-pagination
          .swiper-slide
            position: relative;
            width: 750px;
            height: auto

            .personalShop-item
              padding: 0 !important;
              margin-left: .26667rem;
              width: 2.88rem;
              float: left;

              .primaryPic
                background-color: #f5f5f5;
                margin-bottom: .16rem;
                width: 2.88rem;
                height: 2.88rem;

              .text
                margin-top: 0;
                margin-bottom: .13333rem;
                font-size: .32rem;
                overflow: visible;
                white-space: normal;
                line-height: .48rem;

                .name
                  width: 2.88rem;
                  color: #333;
                  margin-top: 0;
                  margin-bottom: .13333rem;
                  font-size: .32rem;
                  line-height: .48rem;
                  white-space: normal;


                .price
                  color: #b4282d

      // 人气推荐
      .popularGoods
        width: 100%;
        line-height: 0.53333rem;
        background: #fff;
        overflow: hidden;
        box-sizing border-box
        padding 0 10px
        font-size: .42667rem;

        .popularGoods-header
          width: 100%
          line-height: 1.33333rem;
          padding: 0 .2rem;
          clearFix()

          .popularGoods-title
            float left

          .more
            float right
            display: block;
            font-size: .37333rem;
            color: #333;
            line-height: 1.33333rem;
            margin-right .67333rem

        .spItem
          color: #333;
          width: 9.2rem;
          height: 3.73333rem;
          display: flex;
          background: #FEF0DF;
          border-radius: .05333rem;
          margin: 0 .2rem .26667rem;

          .spItem-img
            width: 3.73333rem;
            height: 3.73333rem;
            background: url(//yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png)
            background-size: 100% 100%;
            margin-right: .4rem;

            img
              width: 100%
              height: auto

          .spItem-des
            height 3.73333rem
            padding 1.23333rem 0 0 .2rem

            .name
              font-size: .37333rem;
              width: 4.66667rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

            .desc
              font-size: .32rem;
              color: #7F7F7F;
              width: 4.66667rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

            .price
              font-size: .37333rem;
              color: #b4282d;

        .popularGoods-goods
          clearFix()

          .popularGoods-good
            float left
            padding: 0 0 .17333rem !important;
            margin-left: .26667rem;
            width: 2.88rem;

            .primaryPic
              background-color: #f5f5f5;
              margin-bottom: .16rem;
              width: 2.88rem;
              height: 2.88rem;

            .text
              margin-top: 0;
              margin-bottom: .13333rem;
              font-size: .32rem;
              overflow: visible;
              white-space: normal;
              line-height: .48rem;

              .name
                width: 2.88rem;
                color: #333;
                margin-top: 0;
                margin-bottom: .13333rem;
                font-size: .32rem;
                line-height: .48rem;
                white-space: normal;

              .price
                color: #b4282d

      // footer版权
      .ftWrap
        border-top: 1px solid rgba(0, 0, 0, .15);
        background-color: #414141;
        height 300px
        .ftContent
          text-align: center;
          box-sizing border-box
          padding: 80px .26667rem .37333rem;
          width: 10rem;
          margin-right: auto;
          margin-left: auto;
          .bd
            .goApp
              margin-right: .66667rem;
              padding 0.23333rem 0.53333rem
              width: 2.29333rem;
              font-size: .32rem;
              color: #fff;
              border 1px #fff solid
            .goPc
              width: 2.29333rem;
              padding 0.23333rem 0.53333rem
              font-size: .32rem;
              color: #fff;
              border 1px #fff solid
          .copyRight
            margin-top: .48rem;
            font-size: .32rem;
            line-height: .42667rem;
            color: #999;
</style>
