import React from 'react';

import classes from './CustomHits.module.css';
import { connectHits } from 'react-instantsearch-dom';

const Hits = ({ hits }) => (
  <div className={classes.results}>
    {hits.map(hit => {
      const icons = [];
      for (let i = 0; i < 5; i++) {
        let star = i >= hit.overall_rating ? 'full-star.svg' : 'empty-star.svg';

        icons.push(
          <img src={star} width="18" height="18" className={classes.star} />
        );
      }

      return (
        <div key={hit.objectID} className={classes.block}>
          <div className={classes.result}>
            <div className={classes.name}>{hit.title}</div>
            <div className={classes.footer}>
              <p className={classes.rating}>Overall rating:</p>
              <div className={classes.stars}>{icons}</div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

const CustomHits = connectHits(Hits);

export default CustomHits;
