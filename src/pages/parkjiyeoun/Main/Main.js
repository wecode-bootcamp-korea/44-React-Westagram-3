import React from "react";
import "./Main.scss";
import Header from "./Header";
import Feeds from "./Feeds";
import MainRight from "./MainRight";

function Main() {
  return (
    <div className="main">
      <Header />
      <main>
        <Feeds />
        <MainRight />
      </main>
    </div>
  );
}

export default Main;
