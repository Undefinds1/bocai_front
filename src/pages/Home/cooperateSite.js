import { Button, Card } from 'antd';
import React from 'react';
import {
  DollarCircleOutlined,
  DeploymentUnitOutlined,
  ExperimentOutlined,
  FieldNumberOutlined,
} from '@ant-design/icons';

let sites = [
  {
    icon: <DollarCircleOutlined />,
    title: '乐博娱乐',
    url: 'https://www.baidu.com',
  },
  {
    icon: <DeploymentUnitOutlined />,
    title: '亚博体育',
    url: 'https://www.baidu.com',
  },
  {
    icon: <ExperimentOutlined />,
    title: 'SDK 体育',
    url: 'https://www.baidu.com',
  },
  {
    icon: <FieldNumberOutlined />,
    title: '威尼斯人娱乐城',
    url: 'https://www.baidu.com',
  },
];
function CooperateSite(props) {
  return (
    <Card title="合作网站">
      <div className="sites">
        {sites.map((x) => (
          <div>
            <span>
              {x.icon}
              <span>{x.title}</span>
            </span>
            <span>
              <span>
                <Button>进入网站</Button>
              </span>
              <span>
                <Button>绑定账号</Button>
              </span>
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default CooperateSite;
