import React, { useState, useEffect } from 'react';
import CommentBoard from './CommentBoard';
import door from '../../assets/chogeonho/door.avif';
import dot from '../../assets/chogeonho/dot.png';
import beach from '../../assets/chogeonho/beach.jpeg';
import heart from '../../assets/chogeonho/heart.png';
import comment from '../../assets/chogeonho/2.png';
import down from '../../assets/chogeonho/down.png';
import flag from '../../assets/chogeonho/1.png';

import './MainLeft.scss';

const MainLeft = () => {
  const [feedsData, setFeedsdata] = useState([]);

  useEffect(() => {
    fetch('/data/feedsData.json')
      .then(response => response.json())
      .then(data => setFeedsdata(data));
  }, []);

  const [inputValue, setInputvalue] = useState('');
  const [commentList, setCommentList] = useState([]);
  const addComment = e => {
    setCommentList([...commentList, inputValue]);
    e.preventDefault();
  };
  return (
    <div>
      {feedsData.map(info => (
        <section className="main-left">
          <div className="feeds-header">
            <div className="feeds-both">
              <img className="feeds-profile" src={door} alt="door" />
              <p className="name">{info.name}</p>
            </div>

            <img className="feeds-dot" alt="dot" src={dot} />
          </div>

          <img className="img-article" alt="article" src={info.src} />

          <div className="feeds-comments">
            <div className="imgs">
              <img className="img-heart" src={heart} alt="heart" />
              <img className="img-comment" src={comment} alt="comment" />
              <img className="img-share" src={down} alt="down" />
            </div>

            <img className="img-flag" alt="flag" src={flag} />
          </div>
          <div className="aside-like">
            <p>
              <span className="nickname">all_dlwltn</span>님 외 10명이
              좋아합니다
            </p>
          </div>
          <div className="feedsCommit">
            <p>
              <a href="#" className="name">
                {info.name}
              </a>{' '}
              어쩌구저쩌구
              <span>더보기</span>
            </p>
            <ul id="comment-wrapper" className="commentWrapper">
              <CommentBoard
                commentList={commentList}
                setCommentList={setCommentList}
              />
            </ul>
          </div>

          <form className="left-comment">
            <input
              className="input-comment"
              type="text"
              placeholder="댓글 달기..."
              onChange={e => setInputvalue(e.target.value)}
              value={inputValue}
            />
            <button className="input-btn" onClick={addComment}>
              게시
            </button>
          </form>
        </section>
      ))}
    </div>
  );
};

export default MainLeft;
