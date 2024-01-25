import { hotspotRequest } from '../utils/request';

/**  */
export const weiboHotYear = query => {
  return hotspotRequest({
    url: '/weibo/year/top',
    method: 'get',
    headers: { 'Authorization': localStorage.getItem("market_jungle_token") }
  });
};

