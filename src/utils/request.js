import axios from "axios";
import {useUserStore} from '@/stores'
import {ElMessage}from 'element-plus'
import router from'@/router'
const baseURL=""
const instance = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net',
  timeout: 1000,
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //携带token
   const userinfo=useUserStore()
   if(userinfo.token){
    config.headers.Authorization=userinfo.token
   }

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use( (res)=>{
    // 对响应数据做点什么
    if(res.data.code===0){
       
        return res
    }
    console.log(res)
    ElMessage({ message: res.data.message || '服务异常', type: 'error' })
    return Promise.reject(res.data)
    
  }, function (err) {
    // 对响应错误做点什么
     ElMessage({ message: err.response.data.message || '服务异常', type: 'error' })
   
    if (err.response?.status === 401) {
      router.push('/login')
    }
    return Promise.reject(err);
  });
  export default instance
  export {baseURL}

