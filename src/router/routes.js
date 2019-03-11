import Home from '../pages/home/home'
import Classify from '../pages/classify/classify'
import ClassifyLists from '../pages/classify/classifyLists'
import Goods from '../pages/goods/goods'
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
    component: Goods
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
