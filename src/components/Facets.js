import React from 'react';
import {
    RefinementList,
    Panel,
    ClearRefinements,
    RatingMenu
  } from "react-instantsearch-dom";
  
  const Facets = (props) => {
    return (
      <aside>
        <ClearRefinements
          translations={{
            reset: "Clear all filters",
          }}
        />
  
        {/* <Panel header="Categories">
          <RefinementList attribute="categories" operator="or" limit={10} />
        </Panel>
  
        <Panel header="Rating">
          <RatingMenu attribute="rating" max={5} />
        </Panel> */}
      </aside>
    );
  };
  
  export default Facets;