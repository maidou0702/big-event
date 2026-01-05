import {defineStore} from 'pinia'
import {ref} from 'vue'

import{userGetuserService}from '@/utils/user'
export const useUserStore=defineStore('vue3',()=>{
    //定义用户信息
     const token = ref('') // 定义 token
    //设置用户token
    const setToken=(newValue)=>{
        token.value=newValue
    }
    //获取用户信息
    const userinfo=ref({})
    const getUser= async ()=>{
        const res = await userGetuserService()
        userinfo.value=res.data.data
    }
    
     //删除用户token信息
    const removetoken=()=>{
         token.value=''
     }
     //删除用户信息
     const removeUserinfo=(obj)=>{
         userinfo.value=obj
     }
   
    return {
       token,
        setToken,
        getUser,
        userinfo,
        removetoken,
        removeUserinfo
    }
},
{
    persist:true
}
)


