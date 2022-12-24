import { message } from 'antd';
import axios from 'axios';
import history from '@/utils/history';
// export const baseURL = 'http://127.0.0.1:6744';
// export const baseURL = 'http://8.210.218.97:6744';
export const baseURL = window.location.origin;
const Reaquest = axios.create({
  baseURL,
});

// 请求拦截器
Reaquest.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
Reaquest.interceptors.response.use(
  function (response) {
    if (response?.data?.code === 401) {
      window.localStorage.clear();
      history.push('/login');
      message.warn(response?.data?.msg || '您的登录身份已过期,请重新登录');
    }
    return response.data;
  },
  function (error) {
    if (error.code === 'ERR_BAD_RESPONSE') {
      message.error('您点击的太快了！请刷新后重试!');
    }
    message.error('您网速已经超过5G,请稍后试试');

    return Promise.reject(error);
  }
);

export default Reaquest;
