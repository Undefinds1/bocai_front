import {
  BarsOutlined,
  SettingOutlined,
  RocketOutlined,
  PartitionOutlined,
  ApartmentOutlined,
} from '@ant-design/icons';
const items = [
  {
    label: '首页',
    key: '/Home',
    icon: <RocketOutlined />,
  },
  {
    label: 'VIP',
    key: '/Vip',
    icon: <SettingOutlined />,
  },
  {
    label: '理赔',
    key: '/Settlement',
    icon: <PartitionOutlined />,
  },
  {
    label: '团队',
    key: '/Team',
    icon: <BarsOutlined />,
  },
  {
    label: '用户中心',
    key: '/User',
    icon: <ApartmentOutlined />,
  },
];

export default items;
