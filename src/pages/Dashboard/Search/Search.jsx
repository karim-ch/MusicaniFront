import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { get } from 'lodash';
import { useDispatch } from 'react-redux';
import { SEARCH_BY_KEYWORD } from '../../../graphql/queries';
import { formatFieldsForQuery } from '../../../shared/utils';
import { setVideos } from '../../../redux/actions';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const data = useQuery(SEARCH_BY_KEYWORD, {
    variables: {
      filters: formatFieldsForQuery({
        keyword,
        count: '5'
      })
    },
    skip: keyword.length < 2
  });

  const movies = get(data, 'data.searchByKeyword', []);
  dispatch(setVideos(movies));

  const onChange = ({ target: { value } }) => {
    setKeyword(value);
  };

  return (
    <div>
      <input name="search" type="text" onChange={onChange} />
    </div>
  );
};

export default Search;
