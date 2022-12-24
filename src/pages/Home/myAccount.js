import { Button, Card } from 'antd';
import React from 'react';

function MyAccount(props) {
  return (
    <Card title="我的账户" extra={<Button type="link"> 资金记录</Button>}>
      {/* 账号余额 */}
      <div className="content">
        <div>
          <span className="title">账号余额</span>
          <div className="flexItem">
            <div className="amount">
              <span>￥</span> <span>50000</span>
              <span>.00</span>
            </div>
            <Button>激活协议</Button>
            <Button>绑定娱乐城账号</Button>
          </div>

          <div className="flexItem" style={{ justifyContent: 'space-between' }}>
            <div>
              <p>在保资金</p>
              <p>2150</p>
            </div>
            <div>
              <p>可用金额</p>
              <p>2500</p>
            </div>
            <div>
              <p>今日保费分成</p>
              <p>350</p>
            </div>
          </div>
        </div>
        <div>
          <span className="title">账号状态</span>
          <div className="vipRule">
            <div>
              <div>VIP等级：普通VIP1</div>
              <div>
                <Button type="link">查看VIP规则</Button>
              </div>
            </div>
            <div>
              <Button>升级VIP</Button>
              <Button>成为VIP</Button>
            </div>
          </div>
        </div>

        <div>
          <span className="title">每日保障</span>
          {/* <Calendar
          value={value}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
        /> */}
        </div>
      </div>
    </Card>
  );
}

export default MyAccount;
