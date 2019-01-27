import axios from 'axios'
import md5 from 'md5'
import {auth,key} from './config'
import {getNowTimeStamp} from '../common/js/utils'
/**
 * Ajax请求函数
 * @param opt   接口编号
 * @param info  业务参数
 * @returns {Promise<any>}
 */
export default function ajax(opt,info="{}") {
  return new Promise(function (resolve) {
    let promise;
    auth.time_stamp = getNowTimeStamp()
    if(info != "{}"){
      info = JSON.stringify(info)
    }

    if(window.uid !=undefined){
      auth.uid = window.uid
      auth.os =  window.os
    }
    auth.crc = md5(auth.time_stamp + auth.imei + auth.uid + md5(key)+info)
    const data = 'auth='+JSON.stringify(auth)+'&opt='+opt+'&info='+info;
    promise = axios.post("/apiPath",data);
    promise.then((response) => {
        resolve(response.data)
    }).catch(function (error) {
      console.error("请求失败:"+error);
    })
    return promise
  })
}
