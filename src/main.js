//入口文件
import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'
import './mock/mockServer'
import VueLazyload  from 'vue-lazyload'
//图片懒加载
import loading from'./pages/home/image/loading.gif'
Vue.use(VueLazyload,{
  loading
})
//注册store
import store from './store'
//注册路由器
import router from './router/index'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  store

})
