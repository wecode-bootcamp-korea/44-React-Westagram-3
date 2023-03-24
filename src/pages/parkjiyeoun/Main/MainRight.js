import React from 'react';
import './MainRight.scss';

function MainRight() {
  return (
    <div className="main-right">
      <div className="profile">
        <div className="image" />
        <div className="id">
          <span>wecode_bootcamp</span>
          <span>WeCode | 위코드</span>
        </div>
      </div>
      <div className="story">
        <div className="title">
          <span>스토리</span>
          <button>모두 보기</button>
        </div>
        <ul>
          <li className="profile">
            <div className="image-live">
              <img className="image" alt="프로필" src="/images/profile00.jpg" />
            </div>
            <div className="id">
              <span>_yum_s</span>
              <span>16분 전</span>
            </div>
          </li>
          <li className="profile">
            <div className="image-live">
              <img className="image" alt="프로필" src="/images/profile04.jpg" />
            </div>
            <div className="id">
              <span>drink_eat_drink</span>
              <span>3시간 전</span>
            </div>
          </li>
          <li className="profile">
            <div className="image-live">
              <img
                className="image"
                alt="프로필이미지"
                src="/images/profile03.jpg"
              />
            </div>
            <div className="id">
              <span>drink_eat_drink</span>
              <span>3시간 전</span>
            </div>
          </li>
          <li className="profile">
            <div className="image-live">
              <img
                className="image"
                alt="프로필이미지"
                src="/images/profile06.jpg"
              />
            </div>
            <div className="id">
              <span>drink_eat_drink</span>
              <span>3시간 전</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="recommend">
        <div className="title">
          <span>회원님을 위한 추천</span>
          <button>모두 보기</button>
        </div>
        <ul>
          <li className="profile">
            <div className="image-live">
              <img
                className="image"
                alt="프로필이미지"
                src="/images/profile06.jpg"
              />
            </div>
            <div className="id">
              <span>joaaaaaaahye</span>
              <span>_legend_a님 외 2명이...</span>
            </div>
            <button>팔로우</button>
          </li>
          <li className="profile">
            <div className="image-live">
              <img
                className="image"
                alt="프로필이미지"
                src="images/profile02.jpg"
              />
            </div>
            <div className="id">
              <span>rampart81</span>
              <span>jimmmiee님 외 1명...</span>
            </div>
            <button>팔로우</button>
          </li>
          <li className="profile">
            <div className="image-live">
              <img className="image" alt="프로필" src="/images/profile05.jpg" />
            </div>
            <div className="id">
              <span>joaaaaaaahye</span>
              <span>ringo.in.seoul님 외 12명...</span>
            </div>
            <button>팔로우</button>
          </li>
        </ul>
      </div>
      <div className="info">
        <p>
          Instagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침
          · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
        </p>
        <p>ⓒ 2019 INSTAGRAM</p>
      </div>
    </div>
  );
}

export default MainRight;
