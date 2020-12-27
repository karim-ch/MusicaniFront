import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import Layout from '../shared/Layout';
import reducers from '../redux/reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const DashboardRoutes = () => (
  <Provider store={store}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Layout>
  </Provider>

);

export default DashboardRoutes;
