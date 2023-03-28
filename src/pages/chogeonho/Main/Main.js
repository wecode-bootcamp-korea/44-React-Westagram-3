import React from 'react';
import './Main.scss';
import Nav from './Nav';
import RightFirst from './RightFirst';

import Story from './Story';
import Recommend from './Recommend';
import MainLeft from './MainLeft';
import Data from './Data';
const Main = () => {
  return (
    <div className="main">
      <Nav />
      <section className="main-bottom">
        <MainLeft />
        <section className="main-right">
          <RightFirst />
          <Story />
          <Recommend />
          <Data />
        </section>
      </section>
    </div>
  );
};

export default Main;
