import axios from 'axios'
import { baseURL } from './config'
/**
  * 请求函数
  * @param url          请求路径
  * @param data         请求参数
  * @param method       请求类型
  * @param isError      错误是否返回
  * @param isDownExcel  是否下载Excel
  **/
// 定义私有方法
const _request = Symbol('_request')
const _interceptors = Symbol('_interceptors')
const _getConfig = Symbol('_getConfig')
class HttpRequest {
  [_request] (url, data, method, isError) {
    const http = axios.create()
    var options = {
      url,
      data,
      method
    }
    options = Object.assign(this[_getConfig](), options)
    this[_interceptors](http, isError)
    return http(options)
  }
  [_interceptors] (http, isError) {
    // 请求拦截
    http.interceptors.request.use(config => {
      config.headers = {
        // 设置请求头
        'Authorization': localStorage.getItem('Authorization')
      }
      return config
    })
    // 响应拦截
    http.interceptors.response.use(res => {
      const { data } = res

      // 公共处理请求完毕数据
      // 请求失败
      if (data.ack === 0) {
        if (isError) {
          return data
        } else {
          window.VW.$message.warning(data.msg)
        }
      } else {
        return isError ? data : data.data
      }
    }, err => {
      console.log(err)
    })
  }
  // 创建实例时设置配置的默认值
  [_getConfig] () {
    return {
      baseURL
    }
  }
  // post请求
  post (url, data = {}, isError = false) {
    return this[_request](url, data, 'post', isError)
  }
  // get请求
  get (url, data = {}, isError = false) {
    // 封装get参数
    let dataStr = '?'
    Object.keys(data)
      .forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
    if (dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      url = url + dataStr
    }
    return this[_request](url, {}, 'get', isError)
  }
  // delete请求
  delete (url, data = {}, isError = false) {
    return this[_request](url, data, 'delete', isError)
  }
  // put请求
  put (url, data = {}, isError = false) {
    return this[_request](url, data, 'put', isError)
  }
}

export default HttpRequest
