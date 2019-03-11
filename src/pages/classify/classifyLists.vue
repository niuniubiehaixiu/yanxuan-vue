<template>
  <div id="content-wraper">
    <div class="right-content" v-if="category">
      <div class="scroll-wraper">
        <div class="right-content-img">
          <img v-lazy="category.wapBannerUrl" alt="">
        </div>
        <div class="right-content-list">
          <ul class="list">
            <li class="ilist-tem" v-for="(subCate, index) in category.subCateList" :key="index">
              <img v-lazy="subCate.wapBannerUrl" alt="">
              <span class="text">每日特惠好货每</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        classifyList: state => state.classify.classifyList
      }),
      category () {
        if (this.classifyList.categoryL1List) {
          let result = this.classifyList.categoryL1List.find(item => item.id === this.$route.query.classifyId * 1)
          if (!result) {
            return this.classifyList.categoryL1List[0]
          } else {
            // 初次显示
            return result
          }
        }
      }
    },
    watch: {
      category () {
        this.$nextTick(() => {
          this.scroll = new BScroll('.right-content', {
            click: true
          })

        })
      }
    },
    mounted () {

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #content-wraper
    margin-top 88px
    width 80%
    height 100%
    box-sizing border-box
    padding 35px
    .right-content
      width 528px
      height 100%
      .scroll-wraper
        width 100%
        height 1300px
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
          img
            width 100%
            height 150px
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
