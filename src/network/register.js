import {request} from './request'

export function Register(data){
  return request({
    url:'/users/register',
    method: 'post',
    params:{
      data
    }
  })
}

export function uploadImg(formData){
  return request({
    url:'/users/imgupload',
    method: 'post',
    params:{
      formData
    }
  })
}