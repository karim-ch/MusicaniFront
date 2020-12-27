import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useApolloNetworkStatus } from 'react-apollo-network-status';
import NProgress from 'nprogress';
import DashboardRoutes from './DashboardRoutes';

const Routes = () => {
  const apolloStatus = useApolloNetworkStatus();
  if (
    apolloStatus.numPendingQueries > 0 ||
        apolloStatus.numPendingMutations > 0
  ) {
    NProgress.start();
  } else {
    NProgress.done();
  }

  return (
    <Router>
      <Switch>
        <Route
          path="/"
        >
          <DashboardRoutes />
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
