import UTILS from './utils.js'

const UtilPlugin={}

UtilPlugin.install=function(Vue){
  Vue.prototype.$utils=UTILS
}
export default UtilPlugin
