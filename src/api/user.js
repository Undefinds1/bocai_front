import request from 'utils/request';
import { Gettoken } from '@/utils/localStorage';

export const login = (data) => {
  return request({
    url: '/api/home',
    method: 'post',
    data,
  });
};

export const GetuserInfo = () => {
  return request({
    url: '/api/users',
    params: {
      key: Gettoken(),
    },
  });
};

export const addPassInfo = (info) => {
  return request({
    url: '/api/handle',
    data: { ...info, key: Gettoken() },
    method: 'post',
  });
};

export const handleInfo = (info) => {
  return request({
    url: '/api/handle',
    data: { ...info, key: Gettoken() },
    method: 'put',
  });
};

export const delInfo = (info) => {
  return request({
    url: '/api/handle',
    data: { ...info, key: Gettoken() },
    method: 'delete',
  });
};

export const editUserPass = (params) => {
  return request({
    url: '/api/handle',
    params: { ...params, key: Gettoken() },
    method: 'get',
  });
};

export const addMerchant = (data) => {
  return request({
    url: '/auth/users',
    method: 'put',
    data: { ...data, key: Gettoken() },
  });
};

export const getMerchant = () => {
  return request({
    url: '/auth/users',
    method: 'get',
    params: {
      key: Gettoken(),
    },
  });
};

export const delMerchant = (data) => {
  return request({
    url: '/auth/users',
    method: 'delete',
    data: {
      ...data,
      key: Gettoken(),
    },
  });
};

export const resetPwd = (data) => {
  return request({
    url: '/auth/users',
    method: 'post',
    data: {
      ...data,
      key: Gettoken(),
    },
  });
};

export const delOrders = (data) => {
  return request({
    url: '/auth/orders',
    method: 'delete',
    data: {
      ...data,
      key: Gettoken(),
    },
  });
};

export const addCost = (data) => {
  return request({
    url: '/auth/orders',
    method: 'put',
    data: {
      ...data,
      key: Gettoken(),
    },
  });
};

export const setRate = (data) => {
  return request({
    url: '/auth/orders',
    method: 'post',
    data: {
      ...data,
      key: Gettoken(),
    },
  });
};

export const payMentByTest = (data) => {
  return request({
    url: '/api/pay/createOrder',
    method: 'put',
    data,
  });
};

export const handleSupplement = (data) => {
  return request({
    url: '/api/pay/queryOrder',
    method: 'put',
    data: {
      ...data,
      key: Gettoken(),
    },
  });
};

export const queryOrder = (data) => {
  return request({
    url: '/api/pay/queryOrder',
    method: 'post',
    data: {
      ...data,
      key: Gettoken(),
    },
  });
};

export const getOrder = (data) => {
  return request({
    url: '/api/users',
    method: 'put',
    data: {
      ...data,
      key: Gettoken(),
    },
  });
};
