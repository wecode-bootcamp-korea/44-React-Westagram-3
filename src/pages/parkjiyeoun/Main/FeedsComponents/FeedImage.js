import React from 'react';
import './FeedImage.scss';

function FeedImage({ src, userAccount, profile }) {
  return (
    <div className="feed">
      <div className="profile">
        <img className="profile-image" alt="프로필이미지" src={profile} />
        <span>{userAccount}</span>
        <img
          className="icon-more"
          alt="더보기 아이콘"
          src="/images/parkjiyeoun/more.png"
        />
      </div>
      <img className="uploaded-img" alt="업로드 이미지" src={src} />
    </div>
  );
}

export default FeedImage;
