import React from 'react';

const Recommend = () => {
  return (
    <div className="rightRecommend">
      <div className="recommendAll">
        <p className="story">회원님을 위한 추천</p>
        <p className="seeAll">모두 보기</p>
      </div>

      <div className="recommendProfiles">
        <div className="imgRecommend" />
        <div className="recommendNickname">
          <p className="nickRecommend">i_cant_know</p>
          <p className="knowRecommend">중꺽마님 외 3외님이...</p>
        </div>
        <p className="follow">팔로우</p>
      </div>
    </div>
  );
};
export default Recommend;
