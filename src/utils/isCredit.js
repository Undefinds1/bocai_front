import { message, notification } from 'antd';
const isCredit = (info) => {
  const { code, msg, rate, cost, auth } = info;
  if (code === 250) {
    notification.warning({
      message: '警告提示',
      description: msg,
    });
    return false;
  }
  if (10 * rate >= +cost && +auth !== 1) {
    message.error('您的系统余额已不足,请及时充值');
    return false;
  }

  return true;
};

export default isCredit;
