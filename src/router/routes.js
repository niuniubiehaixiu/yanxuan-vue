import Home from '../pages/home/home'
import Classify from '../pages/classify/classify'
import ClassifyLists from '../pages/classify/classifyLists'
import Goods from '../pages/goods/goods'
import GoodsContent from '../pages/goods/goodsContent'
import Presonal from '../pages/presonal/presonal'
import Shopcart from '../pages/shopcart/shopcart'

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify,
    redirect:'/classify/classifyList',
    children: [
      {
        path:'/classify/classifyList',
        component:ClassifyLists
      }

    ]
  },
  {
    path: '/goods',
    component: Goods,
    redirect: '/goods/tab/0',
    children: [
      {
        path:'/goods/tab/:id',
        component:GoodsContent
      }
    ]
  },
  {
    path: '/presonal',
    component: Presonal
  },
  {
    path: '/shopcart',
    component: Shopcart
  },

]
