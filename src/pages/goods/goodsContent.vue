<template>
  <div>
    <Split/>
    <!--推荐-->
    <div class="goodsWraper" v-if="$route.params.id*1===0">
      <div class="goodsContent">
        <ul v-for="(item,index) in recommendData" :key="index">
          <li v-for="(topic,index) in item.topics" :key="index">
            <GoodsOne v-if="topic.style===1" :topic="topic"/>
            <GoodsTwo v-if="topic.style===2" :topic="topic"/>
            <Split/>
          </li>
        </ul>
        <ul v-for="(items,index) in reqRecommendDataTwo.result" :key="index + '-label'">
          <li v-for="(topic,index) in items.topics" :key="index">
            <GoodsOne v-if="topic.style===1" :topic="topic"/>
            <GoodsTwo v-if="topic.style===2" :topic="topic"/>
            <GoodsThree v-if="topic.style===3" :topic="topic"/>
            <GoodsFour v-if="topic.style===4" :topic="topic"/>
            <Split/>
          </li>
        </ul>
      </div>
    </div>
    <!--晒单-->
    <div class="goodsWraper" v-if="$route.params.id*1===3">
      <div class="goodsContent">
        <ul>
          <li>
            <GoodsFive/>
          </li>
        </ul>
      </div>
    </div>
    <!--HOME-->
    <div class="goodsWraper" v-if="$route.params.id*1===6">
      <div class="goodsContent">
        <ul v-for="(item,index) in reqHomes" :key="index">
          <li v-for="(topic,index) in item" :key="index">
            <GoodsOne v-if="topic.style===0" :topic="topic"/>
            <Split/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import {mapState} from 'vuex'
  import GoodsOne from '../../components/GoodsOne/GoodsOne'
  import GoodsTwo from '../../components/GoodsTwo/GoodsTwo'
  import GoodsThree from '../../components/GoodsThree/GoodsThree'
  import GoodsFour from '../../components/GoodsFour/GoodsFour'
  import GoodsFive from '../../components/GoodsFive/GoodsFive'

  export default {
    data () {
      return {
        num: 1
      }
    },
    mounted () {
      this.$store.dispatch('getrecommend')
      this.$store.dispatch('getrecommendtwo')
      this.$store.dispatch('gethomes')
      this.$store.dispatch('getshops',this.num)
        this.$nextTick(() => {
          let oScroll = new Bscroll('.goodsWraper', {
            probeType: 2,
            //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
            //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
            pullUpLoad: {
              threshold: 10
            },
            mouseWheel: {    // pc端同样能滑动
              speed: 20,
              invert: false
            },
            useTransition: false  // 防止iphone微信滑动卡顿
          })
          oScroll.on('pullingUp', () => {
            //alert('已到最底部');
            console.log('加载ajax数据')
            this.num++
            this.$store.dispatch('getshops',this.num)
            oScroll.finishPullUp()//可以多次执行上拉刷新
          })
          oScroll.refresh()
        })

    },
    computed: {
      ...mapState({
        recommendData: state => state.goods.recommendData,
        reqRecommendDataTwo: state => state.goods.reqRecommendDataTwo,
        reqHomes: state => state.goods.reqHomes,
        autoRecommendData: state => state.goods.autoRecommendData,
      })
    },
    components: {
      GoodsOne,
      GoodsTwo,
      GoodsThree,
      GoodsFour,
      GoodsFive
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .goodsWraper
    width 100%
    height 1000px
    .goodsContent
      width 100%
      margin-bottom 100px
</style>
