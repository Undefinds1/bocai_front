import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { Button, Dropdown, Layout, Menu, Card } from 'antd';
import styles from './index.module.scss';
import User from '@/pages/User';
import Right from './right';
import Home from '@/pages/Home';
import Vip from '@/pages/Vip';
import Team from '@/pages/Team';
import Settlement from '@/pages/Settlement';
import routeOption from '@/utils/routeOption';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import logo from '@/assets/logo.png';
import _ from 'lodash';
import Footer from '@/components/Footer';
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

  let menuItem = [
    {
      key: '1',
      label: (
        <Card className={styles.myUser}>
          <div>
            <UserOutlined fontSize={99} />
            <span>10001@qq.com</span>
          </div>
          <div>
            <Button>基本资料</Button>
            <Button>实名认证</Button>
            <Button>简体中文</Button>
          </div>
          <div>
            <Button block>安全管控</Button>
            <Button block>访问控制</Button>
            <Button block>accesskeys</Button>
            <Button block>会员权益</Button>
            <Button block>推荐返利后台</Button>
            <Button block>推荐返利后台</Button>
          </div>
          <div>
            <Button block>退出管理控制台</Button>
          </div>
        </Card>
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
                className="dropdown"
              >
                <UserOutlined className="user" fontSize={88} />
              </Dropdown>
            </div>
          </div>
        </Header>
        <Layout style={{ height: 'calc( 100vh - 64px )' }}>
          <Sider
            className="site-layout-background"
            theme="light"
            collapsible
            defaultCollapsed
            trigger={
              <div className="triggerBox">
                <Button size="large" className="menu">
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
              <Redirect from="/" to="/Home" exact />
              {routeOption.map(({ key }) => (
                <Route key={key} path={key} component={Routes[key.slice(1)]} />
              ))}
            </Switch>
            <Footer />
          </Layout>
          <Right />
        </Layout>
      </Layout>
    </div>
  );
}
