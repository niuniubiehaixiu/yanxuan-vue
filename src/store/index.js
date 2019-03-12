import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import home from './modules/home'
import classify from './modules/classify'
import goods from './modules/goods'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  modules:{
    home,
    classify,
    goods
  }
})
