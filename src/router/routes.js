import Home from '../pages/home/home'
import Classify from '../pages/classify/classify'
import Goods from '../pages/goods/goods'
import Presonal from '../pages/presonal/presonal'
import Shopcart from '../pages/shopcart/shopcart'

export default [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
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
