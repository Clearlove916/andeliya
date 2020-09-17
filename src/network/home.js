import {request} from './request'

export function searchGoods(isrecommend,name){
  return request({
    url:'/product/query',
    method: 'post',
    params:{
      isrecommend,
      name
    }
  })
}

export function getBanner(){
  return request({
    url:'/banner/query',
    method: 'post'
  })
}

export function getNews(){
  return request({
    url:'/news/query',
    method: 'post'
  })
}

export function getGoods(pagesize,pageindex,isrecommend){
  return request({
    url:'/product/query',
    method: 'post',
    params:{
      pagesize,
      pageindex,
      isrecommend
    }
  })
}
