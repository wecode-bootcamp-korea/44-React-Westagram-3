import React from 'react';
import './Main.scss';
import Nav from './Nav';
import RightFirst from './RightFirst';

import Story from './Story';
import Recommend from './Recommend';
import MainLeft from './MainLeft';
const Main = () => {
  return (
    <div className="main">
      <Nav />
      <section className="main">
        <MainLeft />
        <section className="mainRight">
          <RightFirst />
          <Story />
          <Recommend />
        </section>
      </section>
    </div>
  );
};

export default Main;
