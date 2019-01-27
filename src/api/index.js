/**
 * 请求方法
 */
import ajax from './ajax'
import {key,RequestBasePath} from './config'
import md5 from 'md5'
/**
 * 冠军/冠亚军玩法列表
 */
 export const getPlayList = () => ajax(114)
/**
 * 冠军/冠亚军-我的订单
 */
export const getMyOrder = (pageIndex,pageSize) => ajax(116,{pageIndex,pageSize})

/**
 * 冠军/冠亚军-订单详情
 */
export const getOrderDetail = (id) => ajax(117,{id})

/**
 *冠军/冠亚军-下注接口
 */
export const playBets = (PlayTypeID,BuyContent,Multiple,Share,AssureMoney) => ajax(115,{PlayTypeID,BuyContent,Multiple,Share,AssureMoney})
