/*
引入ajax模块
 */


import ajax from './ajax'

//请求首页数据
export const reqMsiteData = () => ajax('/home')

//请求分类页数据

export const reqClassifyData = () => ajax('/classify')
