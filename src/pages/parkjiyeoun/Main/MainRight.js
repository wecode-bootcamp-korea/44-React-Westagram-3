import React from 'react';
import { Link } from 'react-router-dom';
import './MainRight.scss';

function MainRight() {
  return (
    <div className="main-right">
      <div className="profile">
        <img
          className="profile-image"
          alt="프로필이미지"
          src="/images/parkjiyeoun/profile/profile-05.jpg"
        />
        <div className="id">
          <span>pajiyee</span>
          <span>jijijij@gmail.com</span>
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
              <img
                className="profile-image"
                alt="프로필이미지"
                src="/images/parkjiyeoun/profile/profile-04.jpg"
              />
            </div>
            <div className="id">
              <span>_yum_s</span>
              <span>16분 전</span>
            </div>
          </li>
          <li className="profile">
            <div className="image-live">
              <img
                className="profile-image"
                alt="프로필이미지"
                src="/images/parkjiyeoun/profile/profile-03.jpg"
              />
            </div>
            <div className="id">
              <span>drink</span>
              <span>3시간 전</span>
            </div>
          </li>
          <li className="profile">
            <div className="image-live">
              <img
                className="profile-image"
                alt="프로필이미지"
                src="/images/parkjiyeoun/profile/profile-01.jpg"
              />
            </div>
            <div className="id">
              <span>eat</span>
              <span>3시간 전</span>
            </div>
          </li>
          <li className="profile">
            <div className="image-live">
              <img
                className="profile-image"
                alt="프로필이미지"
                src="/images/parkjiyeoun/profile/profile-00.jpg"
              />
            </div>
            <div className="id">
              <span>googog</span>
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
            <img
              className="profile-image"
              alt="프로필이미지"
              src="/images/parkjiyeoun/profile/profile-06.jpg"
            />
            <div className="id">
              <span>joaaaaaaahye</span>
              <span>_legend_a님 외 2명이...</span>
            </div>
            <button>팔로우</button>
          </li>
          <li className="profile">
            <img
              className="profile-image"
              alt="프로필이미지"
              src="/images/parkjiyeoun/profile/profile-07.jpg"
            />
            <div className="id">
              <span>rampart81</span>
              <span>jimmmiee님 외 1명...</span>
            </div>
            <button>팔로우</button>
          </li>
          <li className="profile">
            <img
              className="profile-image"
              alt="프로필이미지"
              src="/images/parkjiyeoun/profile/profile-02.jpg"
            />
            <div className="id">
              <span>joaaaaaaahye</span>
              <span>ringo.in.seoul님 외 12명...</span>
            </div>
            <button>팔로우</button>
          </li>
        </ul>
      </div>
      <div className="info">
        <ul>
          {ASIDE.map(menu => (
            <li key={menu.id}>
              <Link className="link" to={menu.link}>
                <span>{menu.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p>ⓒ 2019 INSTAGRAM</p>
      </div>
    </div>
  );
}

export default MainRight;

const ASIDE = [
  { id: 1, name: 'Instagram 정보 · ', link: '/main-park' },
  { id: 2, name: '지원 · ', link: '/main-park' },
  { id: 3, name: '홍보 센터 · ', link: '/main-park' },
  { id: 4, name: ' API · ', link: '/main-park' },
  { id: 5, name: '채용 정보 · ', link: '/main-park' },
  { id: 6, name: '개인정보처리방침 · ', link: '/main-park' },
  { id: 7, name: '약관 · ', link: '/main-park' },
  { id: 8, name: '디렉터리 · ', link: '/main-park' },
  { id: 9, name: '프로필 · ', link: '/main-park' },
  { id: 10, name: '해시태그 · ', link: '/main-park' },
  { id: 11, name: '언어', link: '/main-park' },
];
