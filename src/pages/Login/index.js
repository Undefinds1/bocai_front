import { Button, Form, Input, message } from 'antd';
import React, { useEffect } from 'react';
import styles from './index.module.scss';
import { login } from '@/api/user';
import logo from '@/assets/logo.png';
import { Settoken, Gettoken } from '@/utils/localStorage';
import { SetAuth } from '@/utils/auth';
const Login = (props) => {
  const { history } = props;

  const handleInit = async () => {
    const key = Gettoken();
    if (key) {
      message.success('您已登录,欢迎使用！');
      history.push('/');
      return;
    }
  };

  useEffect(() => {
    handleInit();
    // eslint-disable-next-line
  }, []);

  const onFinish = async (values) => {
    const { userName, passWord } = values;
    const userNamePattern = /^[a-zA-Z0-9_-]{4,16}$/;
    const pwdPattern = /^[a-zA-Z0-9_-]{4,16}$/;
    let result = userNamePattern.test(userName) && pwdPattern.test(passWord);
    if (result) {
      const { code, msg, key, auth } = await login(values);
      if (code === 1) {
        Settoken(key);
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
    <div className={styles.login_PayLayout}>
      <div className={styles.logo}>
        <img src={logo} alt="最稳定的三方系统" />
      </div>
      <Form onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="账号"
          name="userName"
          rules={[
            {
              required: true,
              message: '请输入登录账号',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="passWord"
          rules={[
            {
              required: true,
              message: '请输入登录密码!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            进入
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
