/*
引入ajax模块
 */


import ajax from './ajax'
const prefix = '/api'
//使用代理

//请求首页数据
export const reqMsiteData = () => ajax('/home')

//请求分类页数据

export const reqClassifyData = () => ajax('/classify')

//请求识物导航数据
export const  reqTabs =()=>ajax(`${prefix}/topic/v1/find/getTabs.json`)

// 请求识物下推荐数据
export const reqRecommendData = () => ajax(`${prefix}/topic/v1/find/recManual.json`)

//请求识伍下推荐2的数据
export const reqRecommendDataTwo = () => ajax(`${prefix}/topic/v1/find/recAuto.json`)

//请求Home数据
export const reqhome = () =>ajax(`${prefix}/topic/v1/find/getTabData.json?page=1&size=5&tabId=6`)

//请求晒单数据
export const reqshop = (page, size, type) => ajax(`${prefix}/topic/v1/look/getList.json`, {page, size, type})

//晒单图表数据

export const reqlists = (id) => ajax(`${prefix}/topic/v1/look/getCollection.json`,{id})
