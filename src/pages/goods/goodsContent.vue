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
  import {mapState} from 'vuex'
  import GoodsOne from '../../components/GoodsOne/GoodsOne'
  import GoodsTwo from '../../components/GoodsTwo/GoodsTwo'
  import GoodsThree from '../../components/GoodsThree/GoodsThree'
  import GoodsFour from '../../components/GoodsFour/GoodsFour'
  import GoodsFive from '../../components/GoodsFive/GoodsFive'

  export default {
    mounted () {
      this.$store.dispatch('getrecommend')
      this.$store.dispatch('getrecommendtwo')
      this.$store.dispatch('gethomes')
    },
    computed: {
      ...mapState({
        recommendData: state => state.goods.recommendData,
        reqRecommendDataTwo: state => state.goods.reqRecommendDataTwo,
        reqHomes: state => state.goods.reqHomes
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
    height 16rem
    .goodsContent
      width 100%
      margin-bottom 100px
</style>
