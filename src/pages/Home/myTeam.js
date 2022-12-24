import { Button, Card } from 'antd';
import React from 'react';

function MyTeam(props) {
  return (
    <Card title="我的团队">
      {/* 团队成员 */}
      <div className="content">
        <div>
          <span className="title">团队成员</span>
          <div className="flexItem">
            <div>
              <p>总成员数</p>
              <p>80/100</p>
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
          <div className="btns">
            <div>
              <div className="round"></div>
              <Button type="link">为下级注册账号</Button>
            </div>
            <div>
              <div className="round"></div>
              <Button type="link">获取邀请注册链接</Button>
            </div>
          </div>
        </div>
        <div>
          <span className="title">保费分成</span>
          <div className="flexItem">
            <div>
              <p>今日分成</p>
              <p>999</p>
            </div>
            <div>
              <p>总分成</p>
              <p>555</p>
            </div>
          </div>
          <div className="btns">
            <div>
              <div className="round"></div>
              <Button type="link">点击查看分成规则</Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default MyTeam;
