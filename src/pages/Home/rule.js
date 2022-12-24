import React from 'react';
import { Button, Card } from 'antd';

function Rule(props) {
  return (
    <Card className="rule" size="small">
      <Button type="link" block>
        《条件与规则》点击查看
      </Button>
    </Card>
  );
}

export default Rule;
