import { Button, Card, Form, Input, message } from 'antd';
import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import { login } from '@/api/user';
import { SetAuth } from '@/utils/auth';
const Register = (props) => {
  const { history } = props;
  const [countdown, setCountdown] = useState('获取验证码');
  const timeId = useRef();
  const sendCode = () => {
    if (Number.isFinite(countdown)) {
      return;
    }
    setCountdown(60);
    timeId.current = setInterval(() => {
      if (countdown <= 0) {
        clearInterval(timeId.current);
        setCountdown('再次获取验证码');
        return;
      }
      setCountdown((o) => o - 1);
    }, 1000);
  };

  const onFinish = async (values) => {
    const { userName, passWord } = values;
    const userNamePattern = /^[a-zA-Z0-9_-]{6,16}$/;
    const pwdPattern = /^[a-zA-Z0-9_-]{6,16}$/;
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
    <div className={styles.register}>
      <Card
        title={
          <div className="registerTitle">
            <span className="title">欢迎注册</span>
            <div className="rightLogin">
              <span onClick={() => history.push('/login')}>
                已有账号? <Button type="link">快速登录 &gt;&gt;&gt; </Button>
              </span>
            </div>
          </div>
        }
      >
        <Form onFinish={onFinish} className="registerFrom" autoComplete="off">
          <Form.Item
            label=""
            name="userName"
            rules={[
              {
                required: true,
                message: '请设置会员名! ',
              },
            ]}
          >
            <Input placeholder="设置会员名" style={{ width: 388 }} allowClear />
          </Form.Item>

          <Form.Item
            label=""
            name="passWord"
            rules={[
              {
                required: true,
                message: '请设置你的登录密码!',
              },
            ]}
          >
            <Input.Password
              placeholder="设置你的登录密码"
              style={{ width: 388 }}
            />
          </Form.Item>

          <Form.Item
            label=""
            name="passWord"
            rules={[
              {
                required: true,
                message: '请再次输入你的登录密码!',
              },
            ]}
          >
            <Input.Password
              placeholder="请再次输入你的登录密码"
              style={{ width: 388 }}
            />
          </Form.Item>

          <Form.Item
            label=""
            name="phone"
            rules={[
              {
                required: true,
                message: '请输入真实姓名!',
              },
            ]}
          >
            <Input placeholder="请输入真实姓名" style={{ width: 388 }} />
          </Form.Item>

          <Form.Item
            label=""
            name="phone"
            rules={[
              {
                required: true,
                message: '请输入手机号码!',
              },
            ]}
          >
            <Input
              placeholder="请输入手机号码"
              prefix={<span className="phone">+86</span>}
              style={{ width: 388 }}
            />
          </Form.Item>
          <Form.Item
            label=""
            name="phone"
            rules={[
              {
                required: true,
                message: '请输入验证码!',
              },
            ]}
          >
            <Input
              placeholder="请输入验证码"
              suffix={
                <span className="sendCode" onClick={sendCode}>
                  {countdown}
                </span>
              }
              style={{ width: 388 }}
            />
          </Form.Item>

          <Form.Item
            label=""
            name="sell"
            rules={[
              {
                required: true,
                message: '请输入推荐人!',
              },
            ]}
          >
            <Input placeholder="请输入推荐人" style={{ width: 388 }} />
          </Form.Item>

          <Form.Item>
            <Button
              className="submit"
              size="large"
              type="primary"
              htmlType="submit"
              block
            >
              同意条款并注册
            </Button>
          </Form.Item>

          <Form.Item className="contact">
            <Button size="large" block type="primary">
              联系客服
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
