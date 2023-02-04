import React from 'react';

import { SearchBox } from 'react-instantsearch-dom';

const Searcher = () => {
  return (
    <SearchBox
      className="searchbox"
      translations={{
        placeholder: 'What would you like to learn today?',
      }}
    />
  );
};

export default Searcher;
