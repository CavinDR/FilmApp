import axios from 'axios';
import { Indicator } from 'mint-ui'; 
var request  = axios.create({
        baseURL:'/mz',
        // 延迟
        timeout:5000
})

//拦截器

request.interceptors.request.use((config)=>{
   config.headers["X-Client-Info"]=`{"a":"3000","ch":"1002","v":"5.0.4","e":"1563442745133143986751"}`
   if(config.data["X-Host"]){
     config.headers["X-Host"]=config.data["X-Host"]
   }
    //console.log("任何axios发出都会经过我")
   //console.log(config)
   Indicator.open({
    text: 'Loading...',
    spinnerType: 'fading-circle'
  });
    return config;
})
request.interceptors.response.use((res)=>{
    Indicator.close()
    return res;
})

export default request;