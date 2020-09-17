import {request} from './request'


export function Login(account,pwd){
  return request({
    url:'/users/logincheck',
    method: 'post',
    params:{
      account,
      pwd
    }
  })
}
