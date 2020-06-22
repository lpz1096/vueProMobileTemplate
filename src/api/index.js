import HttpRequest from './axios'
const request = new HttpRequest()
/**
 * 获取类目
 */
export const getCategoryList = () => request.post('/category/list')
