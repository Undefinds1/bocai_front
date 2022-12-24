import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { Button, Dropdown, Layout, Menu } from 'antd';
import styles from './index.module.scss';
import User from '@/pages/User';
import Right from './right';
import Home from '@/pages/Home';
import Vip from '@/pages/Vip';
import Team from '@/pages/Team';
import Settlement from '@/pages/Settlement';
import routeOption from '@/utils/routeOption';
import { useState } from 'react';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.png';
import _ from 'lodash';
const { Header, Sider } = Layout;

const Routes = {
  User,
  Home,
  Settlement,
  Vip,
  Team,
};

export default function BigLayout(props) {
  const pathname = props.location.pathname;
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);

  let menuItem = [
    {
      key: '1',
      label: (
        <span target="_blank" rel="noopener noreferrer">
          右侧用户操作区
        </span>
      ),
    },
  ];
  return (
    <div className={styles.layout}>
      <Layout>
        <Header
          className="header"
          style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}
        >
          <div className="logo">
            <img src={logo} className="login-logo" alt="" />

            <div className="right">
              <Menu
                mode="horizontal"
                items={routeOption.map((x) => _.omit(x, 'icon'))}
                onSelect={({ key }) => history.push(key)}
                selectedKeys={[pathname]}
                theme="light"
                style={{ width: '100%' }}
              />

              <Dropdown
                menu={{
                  items: menuItem,
                }}
              >
                <UserOutlined className="user" fontSize={88} />
              </Dropdown>
            </div>
          </div>
        </Header>
        <Layout style={{ height: 'calc( 100vh - 64px )' }}>
          <Sider
            collapsed={collapsed}
            onCollapse={(e) => setCollapsed(e)}
            width={200}
            className="site-layout-background"
            theme="light"
            collapsible
            defaultCollapsed
            trigger={
              <div className="triggerBox">
                <Button
                  size="large"
                  onClick={() => setCollapsed((o) => !o)}
                  className="menu"
                >
                  <MenuOutlined />
                </Button>
              </div>
            }
          >
            <Menu
              theme="light"
              mode="inline"
              selectedKeys={[pathname]}
              style={{ height: '100%', borderRight: 0 }}
              items={routeOption}
              onSelect={({ key }) => history.push(key)}
            />
          </Sider>

          <Layout
            style={{
              padding: '0 24px 0px',
              marginTop: '15px',
              overflow: 'auto',
            }}
          >
            <Switch>
              <Redirect from="/" to="/CashierConfiguration" exact />
              {routeOption.map(({ key }) => (
                <Route key={key} path={key} component={Routes[key.slice(1)]} />
              ))}
            </Switch>
          </Layout>
          <Right />
        </Layout>
      </Layout>
    </div>
  );
}
