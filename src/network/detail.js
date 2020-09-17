import {request} from './request'


export function getGoodsByname(isrecommend,name){
  return request({
    url:'/product/query',
    method: 'post',
    params:{
      isrecommend,
      name,
    }
  })
}
