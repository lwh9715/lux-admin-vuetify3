import { userRequest } from '../utils/request';

/** 登录 */
export const authLogin = query => {
  return userRequest({
    url: '/user/login',
    method: 'post',
    data: query
  });
};

