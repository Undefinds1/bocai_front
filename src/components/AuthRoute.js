// import { message } from 'antd';
import React from 'react';
import { Route } from 'react-router-dom';

export default function AuthRoute(props) {
  const {
    path,
    component: AuthComponent,
    // goto
  } = props;
  return (
    <Route
      path={path}
      render={(props) => {
        return <AuthComponent {...props} />;
        // message.warn('请先登录！');
        // props.history.push(goto);
      }}
    ></Route>
  );
}
