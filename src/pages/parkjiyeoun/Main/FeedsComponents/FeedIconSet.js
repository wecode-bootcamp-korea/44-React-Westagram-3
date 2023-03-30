import React from 'react';
import './FeedIconSet.scss';

function FeedIconSet() {
  return (
    <div className="feed-icon-set">
      <div className="icon-comment">
        <img
          alt="피드 좋아요 아이콘"
          src="/images/parkjiyeoun/heart.png"
          width="26px"
        />
        <img
          alt="피드 댓글 아이콘"
          src="/images/parkjiyeoun/bubble-chat.png"
          width="24px"
        />
        <img
          alt="피드 업로드 아이콘"
          src="/images/parkjiyeoun/upload.png"
          width="20px"
        />
        <img
          className="icon-bookmark"
          alt="피드 북마크 아이콘"
          src="/images/parkjiyeoun/bookmark-white.png"
          width="20px"
        />
      </div>
      <div className="like-comment">
        <img
          className="profile-image"
          alt="프로필이미지"
          src="/images/parkjiyeoun/profile/profile-00.jpg"
        />
        <span>
          <strong>mino</strong>님 외<strong>10</strong>
          명이 좋아합니다
        </span>
      </div>
    </div>
  );
}

export default FeedIconSet;
