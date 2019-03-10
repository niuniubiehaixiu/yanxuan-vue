/*
首页状态管理模块
 */
import {reqMsiteData} from '../../api'
import {RECRIVE_CATEGORIES} from '../mutation-types'

const state = {
  categorys:[],
}

const mutations ={
  [RECRIVE_CATEGORIES](state,category){
    //mutation直接更新状态
    state.categorys=category
  }
}

const actions ={
  //获取首页的导航数据
  async getCategorys({commit}){
    //发送ajax请求
    const result = await reqMsiteData()
    const category = result.data
    // console.log(category)
    if (result.code===0){
      commit(RECRIVE_CATEGORIES,category)
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
