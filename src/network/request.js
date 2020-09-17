import axios from 'axios'

export function request(urlConfig){
  const query=axios.create({
    baseURL:'http://101.200.88.248:8044',
    timeout:5000
  })

  query.interceptors.request.use(urlConfig=>{
    return urlConfig;
  },err=>{
    console.log(err)
  })

  query.interceptors.response.use(urlConfig=>{
    return urlConfig;
  },err=>{
    console.log(err)
  })

  return query(urlConfig);
}
