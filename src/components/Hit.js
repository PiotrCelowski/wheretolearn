import React from 'react';

import classes from "./Hit.module.css"
import { Highlight } from 'react-instantsearch-dom';

const Hit = props => {
  return (
    <article className={classes.result}>
        <div>
          <Highlight attribute="title" hit={props.hit} />
        </div>
    </article>
  );
};

export default Hit;
