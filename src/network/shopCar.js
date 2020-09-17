import {request} from './request'

export function getShopCar(uid,token){
  return request({
    url:'/shopcar/query',
    method: 'post',
    params:{
      uid,
      token
    }
  })
}

export function delShopCar(uid,token,sid){
  return request({
    url:'/shopcar/delete',
    method: 'post',
    params:{
      uid,
      token,
      sid
    }
  })
}