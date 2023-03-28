import React, { useState } from 'react';
import insta from '../../assets/chogeonho/instalogo.png';
import navigation from '../../assets/chogeonho/navigation.jpeg';
import heart from '../../assets/chogeonho/heart.png';
import info from '../../assets/chogeonho/img.info.png';
import Info from './Info';

import './Nav.scss';

const Nav = () => {
  const [infoShow, setInfoShow] = useState(false);

  return (
    <section className="nav">
      <div className="nav-input-letter">
        <img className="insta-logo" alt="insta-logo" src={insta} />
        <p className="insta-title">instagram</p>
      </div>
      <input className="search" type="text" placeholder="검색" />
      <div className="nav-input-imgs">
        <img className="img-navigation" src={navigation} alt="navigation" />
        <img src={heart} alt="heart" className="img-heart" />

        <img
          onClick={() => {
            setInfoShow(!infoShow);
          }}
          alt="info"
          src={info}
          className="img-info"
        />
      </div>

      {infoShow ? <Info /> : null}
    </section>
  );
};

export default Nav;
