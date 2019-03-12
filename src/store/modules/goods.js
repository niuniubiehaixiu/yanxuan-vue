//管理goods组件状态
import {reqTabs, reqRecommendData, reqRecommendDataTwo, reqhome,reqshop,reqlists} from '../../api'
import {RECRIVE_TABS, RECRIVE_RECOMMEND, RECRIVE_RECOMMENDTWO,RECRIVE_HOME,RECRIVE_SHOP,RECRIVE_List} from '../mutation-types'

const state = {
  tabs: [],//goods 导航数据
  recommendData: [], //识物数据
  reqRecommendDataTwo: [],//识物数据2
  reqHomes:[],//识物数据HOME
  reqshops:[], //识物晒单数据
  reqlist:[]
}

const mutations = {
  //更新tab数据
  [RECRIVE_TABS] (state, {tabs}) {
    state.tabs = tabs
  },
  //更新推荐数据
  [RECRIVE_RECOMMEND] (state, {recommendData}) {
    state.recommendData = recommendData
  },
  //更新推荐数据2
  [RECRIVE_RECOMMENDTWO] (state, {reqRecommendDataTwo}) {
    state.reqRecommendDataTwo = reqRecommendDataTwo
  },
  //更新HOME数据
  [RECRIVE_HOME] (state,{reqHomes}){
    state.reqHomes = reqHomes
  },
  //更新shop数据
  [RECRIVE_SHOP] (state,{reqshops}){
    state.reqshops=reqshops
  },
  //更新shoplist数据
  [RECRIVE_List] (state,{reqlist}){
    state.reqlist=reqlist
  }

}

const actions = {
  //获取tab数据
  async getTabs ({commit}) {
    const result = await reqTabs()
    console.log(result)
    if (result.code === '200') {
      const tabs = result.data
      commit(RECRIVE_TABS, {tabs})
    }
  },
  //获取识物页面数据
  async getrecommend ({commit}) {
    const result = await reqRecommendData()
    if (result.code === '200') {
      const recommendData = result.data
      commit(RECRIVE_RECOMMEND, {recommendData})
    }
  },
  //获取识物页面数据2
  async getrecommendtwo ({commit}) {
    const result = await reqRecommendDataTwo()
    if (result.code === '200') {
      const reqRecommendDataTwo = result.data
      commit(RECRIVE_RECOMMENDTWO, {reqRecommendDataTwo})
    }
  },
  //获取识物页面HOME数据
  async gethomes ({commit}){
    const result = await reqhome()
    if (result.code === '200'){
      const reqHomes = result.data
      commit(RECRIVE_HOME,{reqHomes})
    }
  },
  //获取识伍页面的晒单数据
  async getshops ({commit}){
    const result = await reqshop(1, 20, 1)
    if (result.code==='200'){
      const reqshops = result.data
      commit(RECRIVE_SHOP,{reqshops})
    }
  },
  async getlist ({commit},callback){
    const result = await reqlists(57)
    console.log(result);
    if (result.code==='200'){
      const reqlist = result.data
      commit(RECRIVE_List,{reqlist})
      callback()
    }
  },
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
