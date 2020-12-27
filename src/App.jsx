import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloNetworkStatusProvider } from 'react-apollo-network-status';
import Routes from './routes/Routes';
import client from './graphql';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <ApolloNetworkStatusProvider>
            <Routes />
          </ApolloNetworkStatusProvider>
        </ApolloProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
