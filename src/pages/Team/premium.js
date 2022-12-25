import { Card } from 'antd';
import React from 'react';

function Premium(props) {
  return (
    <Card title="保费分成规则介绍">
      <div className="content">
        <div>
          <p>邀请下级注册激活即可享受每日保费分成的额外收入。</p>
          <p>享受直接下级每日保费的20%</p>
          <p>享受二级下级每日保费的10%</p>
          <p>享受三级下级每日保费的5%</p>
        </div>
        <div>
          <img className="ruleImg" alt="" src="1" />
        </div>
      </div>
    </Card>
  );
}

export default Premium;
