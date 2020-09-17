import {request} from './request'


export function getCategoiry(){
  return request({
    url:'/categoiry/query',
    method: 'post'
  })
}

export function getGoods(pagesize,pageindex,isrecommend,cid){
  return request({
    url:'/product/query',
    method: 'post',
    params:{
      pagesize,
      pageindex,
      isrecommend,
      cid
    }
  })
}