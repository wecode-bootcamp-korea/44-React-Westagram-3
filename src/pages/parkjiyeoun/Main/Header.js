import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="container">
          <div className="logo-set">
            <img
              alt="인스타그램 로고"
              src="/images/parkjiyeoun/logo.png"
              width="20px"
            />
            <span>westagram</span>
          </div>
          <form className="search-input">
            <ul id="search_result">
              <li value="select01" />
              <li value="select02" />
              <li value="select03" />
            </ul>
            <img
              alt="검색 아이콘"
              src="/images/parkjiyeoun/search.png"
              width="10px"
              height="10px"
            />
            <input id="search" type="text" placeholder="검색" width="20px" />
          </form>
          <div className="utility">
            <img
              alt="탐색 아이콘"
              src="/images/parkjiyeoun/explore.png"
              width="20px"
            />
            <img
              alt="하트 아이콘"
              src="/images/parkjiyeoun/heart.png"
              width="20px"
            />
            <img
              alt="내 계정 아이콘"
              src="/images/parkjiyeoun/profile/profile.png"
              width="20px"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
