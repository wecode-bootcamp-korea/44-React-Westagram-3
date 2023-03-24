import React from 'react';
import './Recommend.scss';

const Recommend = () => {
  return (
    <div className="recommend">
      <div className="recommend-all">
        <p className="for-recommend">회원님을 위한 추천</p>
        <p className="see-all">모두 보기</p>
      </div>

      <div className="profiles">
        <img alt="하트" src="../../../assets/chogeonho/heart.png" />
        {/* <img alt="하트" src="./images/chogeonho/profile04.jpg" /> */}
        <div className="nickname-wrap">
          <p className="nickname">i_cant_know</p>
          <p className="know">중꺽마님 외 3외님이...</p>
        </div>
        <p className="follow">팔로우</p>
      </div>
    </div>
  );
};
export default Recommend;
