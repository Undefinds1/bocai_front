import React, { useState } from 'react';
import { Button, Card } from 'antd';
const tabList = [
  {
    key: '1',
    tab: '公告',
  },
  {
    key: '2',
    tab: '站内邮件',
  },
];

const mockData = new Array(10).fill().map(() => ({
  id: Math.random(),
  title: '【公告】12月22日维护公告',
}));
function Right(props) {
  const [activeTabKey, setActiveTabKey] = useState('1');
  return (
    <>
      <div className="rightMenu">
        <Card
          tabList={tabList}
          activeTabKey={activeTabKey}
          onTabChange={(key) => {
            setActiveTabKey(key);
          }}
        >
          {mockData.map((x) => (
            <div className="noticeItem" key={x.id}>
              {x.title}
            </div>
          ))}
        </Card>

        <Card className="online">
          <div className="onlineItem">
            <span>在线客服</span>
            <span>24X7 为您服务</span>
            <span>
              <Button>在线咨询</Button>
            </span>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Right;
