/*
分类状态页数据管理
 */
import {reqClassifyData} from '../../api/'

import {RECRIVE_CLASSLIST} from '../mutation-types'


const state = {
  classifyList:[]
}

const mutations = {
  //数据直接更新
  [RECRIVE_CLASSLIST](state,classifyList){
    state.classifyList=classifyList
  }

}

const actions = {
  //获取分类数据
  async getClassifyList({commit}){
    //发送请求
    const result = await reqClassifyData()
    const classifyList = result.data
    if (result.code===0){
      commit(RECRIVE_CLASSLIST,classifyList)
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
