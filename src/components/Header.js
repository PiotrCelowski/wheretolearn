import React from 'react';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/">
        <img
          alt="HowToLearn"
          className={classes.logo}
          src="https://res.cloudinary.com/hilnmyskv/image/upload/w_100,h_100,dpr_2.0//v1461180087/logo-instantsearchjs-avatar.png"
          width={40}
          height={40}
        />
      </a>
      <div className={classes.title_box}>
        <a href="/" className={classes.title}>
          HowToLearn
        </a>
      </div>
    </header>
  );
};

export default Header;
