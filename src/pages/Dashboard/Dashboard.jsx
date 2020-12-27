import React from 'react';
import { useQuery } from 'react-apollo';
import { get } from 'lodash';
import { SEARCH_BY_KEYWORD } from '../../graphql/queries';

const Dashboard = () => {
  const data = useQuery(SEARCH_BY_KEYWORD);
  const movies = get(data, 'data.searchByKeyword');
  console.log(movies);
  return (
    <div>
      Dashboard
    </div>
  );
};

export default Dashboard;
