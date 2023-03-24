import React from 'react';
import './Nav.scss';
const Nav = () => {
  return (
    <section className="nav">
      <div className="nav-input-letter">
        <img
          className="insta-logo"
          alt="logo"
          src="../../assets/chogeonho/instalogo.png"
        />
        <p className="insta-title">instagram</p>
      </div>
      <input className="search" type="text" placeholder="검색" />
      <div className="nav-input-imgs">
        <img src="../../assets/chogeonho/navigation.jpeg" alt="navigation" />
        <img
          src="../../assets/chogeonho/heart.jpeg"
          alt="heart"
          className="img-heart"
        />
        <img
          alt="info"
          src="../../public/images/info.png"
          className="img-info"
        />
      </div>
    </section>
  );
};

export default Nav;
