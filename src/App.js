import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
// import Register from './pages/Register';
import Layout from './pages/Layout';
import AuthRoute from './components/AuthRoute';
import history from 'utils/history';
import Loading from '@/components/Loading';

export default function App() {
  return (
    <Router history={history}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path={'/login'} component={Login} />
          {/* <Route path={'/register'} component={Register} /> */}
          <AuthRoute path={'/'} component={Layout} goto={'/login'} />
        </Switch>
      </Suspense>
    </Router>
  );
}
