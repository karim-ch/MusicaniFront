import React, { useState } from 'react';
import useSearch from './useSearch';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const { search } = useSearch();

  const onChange = ({ target: { value } }) => {
    setKeyword(value);
  };

  return (
    <div>
      <input name="search" type="text" onChange={onChange} />
      <button type="button" onClick={() => search({ keyword })}> Search </button>
    </div>
  );
};

export default Search;
