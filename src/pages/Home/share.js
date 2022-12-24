import { Button, Card } from 'antd';
import React from 'react';

function Share(props) {
  return (
    <Card title="新用户教程">
      <div className="share">
        <div>
          <div>图文教程</div>
          <span>
            <Button>下载</Button>
            <Button>分享</Button>
          </span>
        </div>
        <div>
          <div>视频教程</div>
          <span>
            <Button>下载</Button>
            <Button>分享</Button>
          </span>
        </div>
      </div>
    </Card>
  );
}

export default Share;
