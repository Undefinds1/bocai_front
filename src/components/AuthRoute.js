import { message } from 'antd';
import React from 'react';
import { Route } from 'react-router-dom';
import { Gettoken } from 'utils/localStorage';

export default function AuthRoute(props) {
  const { path, component: AuthComponent, goto } = props;
  return (
    <Route
      path={path}
      render={(props) => {
        if (!!Gettoken()) {
          return <AuthComponent {...props} />;
        }
        message.warn('请先登录！');
        props.history.push(goto);
      }}
    ></Route>
  );
}
