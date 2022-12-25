import { Button, Card, Form, Input, message } from 'antd';
import React from 'react';
import styles from './index.module.scss';
import { login } from '@/api/user';
import { SetAuth } from '@/utils/auth';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Footer from '@/components/Footer';
const Login = (props) => {
  const { history } = props;
  const onFinish = async (values) => {
    const { userName, passWord } = values;
    const userNamePattern = /^[a-zA-Z0-9_-]{4,16}$/;
    const pwdPattern = /^[a-zA-Z0-9_-]{4,16}$/;
    let result = userNamePattern.test(userName) && pwdPattern.test(passWord);
    if (result) {
      const { code, msg, key, auth } = await login(values);
      if (code === 1) {
        message.success(msg);
        if (+auth === 1) {
          SetAuth({ auth, key });
        }

        window.location.reload();
      } else {
        message.error(msg);
      }
    } else {
      message.warning('您输入的账号密码格式不正确,请稍后重试!');
    }
  };

  return (
    <div className={styles.login}>
      <Card title="登录">
        <Form onFinish={onFinish} autoComplete="off">
          <Form.Item
            label=""
            name="userName"
            rules={[
              {
                required: true,
                message: '请输入登录账号',
              },
            ]}
          >
            <Input
              placeholder="账号/手机号码"
              style={{ width: 388 }}
              prefix={<UserOutlined className="user" />}
              allowClear
            />
          </Form.Item>

          <Form.Item
            label=""
            name="passWord"
            rules={[
              {
                required: true,
                message: '请输入登录密码!',
              },
            ]}
          >
            <Input.Password
              placeholder="请输入登录密码"
              prefix={<LockOutlined className="user" />}
              style={{ width: 388 }}
            />
          </Form.Item>

          <Form.Item>
            <Button
              className="submit"
              size="large"
              type="primary"
              block
              htmlType="submit"
            >
              登录
            </Button>
          </Form.Item>

          <Form.Item className="btns">
            <Button type="link">忘记密码</Button>
            <Button type="link">忘记用户名</Button>
            <Button
              type="link"
              onClick={() => {
                history.push('/register');
              }}
            >
              免费注册
            </Button>
          </Form.Item>
          <Form.Item className="contact">
            <Button size="large" block type="primary">
              联系客服
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
