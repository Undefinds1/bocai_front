import { Button, Card, Col, Input, Row } from 'antd';
import React from 'react';
import { copyText } from '@/utils/copy';
function MyLink(props) {
  return (
    <div className="myLink">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="推荐新用户" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="推荐二维码" bordered={false}>
            <img style={{ width: 100, height: 100 }} src="11" alt="" />
            {/* <QRCode value="https://www.baidu.com/" /> */}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="推荐链接" bordered={false}>
            <Input value={'www.baidu.com'} disabled />
            <Button onClick={() => copyText('www.baidu.com')}>复制链接</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MyLink;
