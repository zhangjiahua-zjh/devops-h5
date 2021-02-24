/** **   http.js   ****/
// 导入封装好的axios实例
import request from './request';

const http = {
  /**
     * methods: 请求
     * @param url 请求地址
     * @param params 请求参数
     */
  get (url, params) {
    const config = {
      method: 'get',
      url: url
    };
    if (params) config.params = params;
    return request(config);
  },
  post (url, params, responseType) {
    const config = {
      url: url,
      data: params,
      method: 'post'
    };
    //下载文件的时候需要指定 responseType 为 'blob'
    if(responseType){
      config['responseType'] = responseType;
    }
    return request(config);
  },
  put (url, params) {
    const config = {
      url: url,
      data: params,
      method: 'put'
    };
    return request(config);
  },
  down (url, params) {
    const config = {
      url: url,
      method: 'get',
      responseType: 'blob'
    };
    if (params) config.params = params;
    return request(config);
  },
  delete (url, params) {
    const config = {
      method: 'delete',
      url: url
    };
    if (params) config.params = params;
    return request(config);
  },
  deletes (url, params) {
    const config = {
      method: 'delete',
      url: url,
      data: params,
    };
    return request(config);
  }
};
// 导出
export default http;
