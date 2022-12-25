import React from 'react';
import { Card } from 'antd';

function MyTeam(props) {
  return (
    <Card title="我的团队">
      {/* 账号余额 */}
      <div className="content">
        <div>
          <span className="title">团队成员</span>

          <div className="flexItem">
            <div>
              <p>总成员数</p>
              <p>
                80 <span className="small">/100</span>
              </p>
            </div>
            <div>
              <p>今日注册</p>
              <p>10</p>
            </div>
            <div>
              <p>今日激活</p>
              <p>5</p>
            </div>
          </div>
        </div>
        <div>
          <span className="title">保费分成</span>
          <div className="flexItem">
            <div>
              <p>今日分成</p>
              <p>350</p>
            </div>
            <div>
              <p>总分成</p>
              <p>14500</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default MyTeam;
