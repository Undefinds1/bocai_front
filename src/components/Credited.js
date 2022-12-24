import React from 'react';
import { Result } from 'antd';

function Credited() {
  return <Result status="warning" title="您的系统余额已不足,请联系客服充值" />;
}

export default Credited;
