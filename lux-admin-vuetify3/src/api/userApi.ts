import { userRequest } from '../utils/request';

/** 登录 */
export const authLogin = query => {
  return userRequest({
    url: '/user/login',
    method: 'post',
    data: query
  });
};


/** 用户列表 */
export const userList = query => {
  return userRequest({
    url: '/user/list',
    method: 'get',
    params: query,
    headers: { 'Authorization': localStorage.getItem("market_jungle_token") }
  });
};
