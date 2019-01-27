/**
 * 请求核心数据配置
 */
/**
 * 身份信息
 * os           终端系统
 * crc          签名
 * imei         机器码
 * Token        用户身份标识
 * time_stamp   时间截
 * os_version   终端系统版本
 * app_version  APP版本号
 * @type {{os: string, : string, imei: string, Token: string, time_stamp: *, os_version: string, app_version: string}}
 */
export const  auth = {
  "crc": '',
  "imei": "",
  "uid": -1,  //用户id  需要接收
  "loginType":"1",
  "time_stamp": '',
  "os":''     //用户os  需要接收
}
/**
 * 网关加密KEY,网关签名使用
 * @type {string}
 */
export const key = ''
/**
 * 服务器地址
 */
export const RequestBasePath = 'http://192.168.0.121:8088/'
