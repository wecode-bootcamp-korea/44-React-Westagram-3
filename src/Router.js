import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 조건호의 컴포넌트
import LoginCho from './pages/chogeonho/Login/Login';
import MainCho from './pages/chogeonho/Main/Main';

// 박지연의 컴포넌트
import LoginPark from './pages/parkjiyeoun/Login/Login';
import MainPark from './pages/parkjiyeoun/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-cho" element={<LoginCho />} />
        <Route path="/main-cho" element={<MainCho />} />
        <Route path="/login-park" element={<LoginPark />} />
        <Route path="/main-park" element={<MainPark />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
