import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Layout from '../shared/Layout';

const DashboardRoutes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </Layout>
);

export default DashboardRoutes;
