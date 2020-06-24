class Utils {
  //构造函数
  constructor(){
    this.instance=null;
  }
  //单例模式
  static getInstance(){
    if(!this.instance){
      this.instance = new Utils();
    }
    return this.instance;
  }

  /**
   * 获取当前时间（毫秒值）
   * @returns {number}
   */
  getNowTimeStamp(){
    return new Date().getTime()
  }

  /**
   * 获取URL中的？后面的参数
   * @returns {string}
   */
  getUrlParam(){
    return document.location.toString().split("?")[1]
  }


  /**
   * 存储localStorage
   */
  setStore(name, content){
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
  }

  /**
   * 获取localStorage
   */
  getStore(name){
    if (!name) return
    return window.localStorage.getItem(name)
  }
  /**
   * 删除localStorage
   */
  removeStore(name){
    if (!name) return
    window.localStorage.removeItem(name)
  }
  /**
   * 存储sessionStorage
   */
  setSessionStore(name, content){
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.sessionStorage.setItem(name, content)
  }

  /**
   * 获取sessionStorage
   */
  getSessionStore(name){
    if (!name) return
    return window.sessionStorage.getItem(name)
  }
  /**
   * 删除sessionStorage
   */
  removeSessionStore(name){
    if (!name) return
    window.sessionStorage.removeItem(name)
  }

  /**
   * 排序工具类
   * 依据数组中对象的某个属性排序
   * @param property  属性
   * @param sort      升序降序    boolean
   * @returns {function(*, *): number}
   */
  compareSort(property,sort){
    return (a,b) =>{
      return sort?a[property] - b[property]:b[property] - a[property]
    }
  }

  /**
   * 判断是否为空
   */
  isNull(str){
    return str !== undefined && str !== null && str != ''
  }

  /**
   * 生成guid随机数
   * @returns {string}
   */
  guid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    })
  }
  /**
   * 判断设备 Android/IOS
   */
  getUserDevice = () => {
    let request = ''
    let u = navigator.userAgent
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //android终端或者uc浏览器
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端！
    if (isAndroid) {
      request = {
        isAndroid:true
      }
    }
    if (isiOS) {
      request = request = {
        isIOS:true
      }
    }
    return request
  }
}
const UTILS = Utils.getInstance()

export default UTILS
