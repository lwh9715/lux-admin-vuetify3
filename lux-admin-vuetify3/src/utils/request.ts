import axios from 'axios';
import Config from './config'

//创建实例
const userRequest = axios.create({
  baseURL: Config.USER_DATA_URL,
});

const hotspotRequest = axios.create({
  baseURL: Config.HOTSPOT_DATA_URL,
});

const backyardRequest = axios.create({
  baseURL: Config.BACKYARD_DATA_URL,
});

let reqTime = 0
let cookieArr = document.cookie ? document.cookie.split(';') : new Array();
let cookieObj = {}
cookieArr.forEach(item => {
  let objVal = item.split('=')
  cookieObj[objVal[0]] = objVal[1]
})

function requestFunc(request) {

  // 请求拦截器,在请求头加token
  request.interceptors.request.use(
    // 成功,返回出去
    config => {
      if (window.localStorage.getItem('Authorization')) {
        config.headers.AuthToken = window.localStorage.getItem('Authorization');
      }
      if (cookieObj['AuthToken']) {
        config.headers['AuthToken'] = cookieObj['AuthToken']
      }
      // 请求数加1
      reqTime++
      return config;
    },
    //失败,拒绝
    error => {
      return Promise.reject();
    }
  );
  //响应拦截器
  request.interceptors.response.use(
    response => {
      if (response.status === 200) {
        return response.data;
      } else {
        Promise.reject();
      }
    },
    error => {
      console.log(error);
      return Promise.reject();
    }
  );
}

requestFunc(userRequest)
requestFunc(hotspotRequest)
requestFunc(backyardRequest)
export { userRequest, hotspotRequest, backyardRequest };
