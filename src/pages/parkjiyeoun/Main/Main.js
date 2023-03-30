import React, { useState, useEffect } from 'react';
import Header from './Header';
import Feeds from './Feeds';
import MainRight from './MainRight';
import './Main.scss';

function Main() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(result => setFeedList(result));
  }, []);

  return (
    <div className="main">
      <Header />
      <main>
        <div class="feed-list">
          {feedList.map(({ id, userAccount, profile, src, reply }) => {
            return (
              <Feeds
                key={id}
                userAccount={userAccount}
                profile={profile}
                src={src}
                reply={reply}
              />
            );
          })}
        </div>
        <MainRight />
      </main>
    </div>
  );
}

export default Main;
