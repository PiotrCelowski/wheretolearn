import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import './App.css';
import Header from './components/Header';
import Searcher from './components/Searcher';
import Facets from './components/Facets';
import CustomHits from './components/CustomHits'

const searchClient = algoliasearch(
  'I18R4F5SXY',
  '5d3addaf7da84ba1675a572d9fd138c6'
);

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="courses">
          <Configure hitsPerPage={5} />
          <Searcher />
          <div className="search-panel">
            <Facets className="search-panel__filters" />
            <CustomHits />
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

export default App;
