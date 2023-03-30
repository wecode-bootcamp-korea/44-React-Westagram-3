import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isOn, setIsOn] = useState(false);

  const navigate = useNavigate();

  const goToMain = () => {
    if (id.indexOf('@') >= 1 && pw.length >= 5) {
      navigate('/main-park');
    } else {
      alert('다시 입력');
    }
  };

  const handleId = e => {
    setId(e.target.value);
    isValid();
  };

  const handlePw = e => {
    setPw(e.target.value);
    isValid();
  };

  const isValid = () => {
    id.indexOf('@') >= 1 && pw.length >= 5 ? setIsOn(true) : setIsOn(false);
  };

  return (
    <div className="login">
      <div className="container">
        <h1 className="logo-text">westagram</h1>
        <form className="input-set">
          <input
            className="input-id"
            type="text"
            placeholder="전화번호, 사용자 이메일 또는 이메일"
            // input={isValid}a
            onChange={handleId}
          />
          <input
            class="input-pw"
            type="password"
            placeholder="비밀번호"
            // input={isValid}
            onChange={handlePw}
          />
        </form>

        <button
          onClick={goToMain}
          id="btn-login"
          className={isOn ? 'btn-login-on' : 'btn-login-off'}
          disabled={id === '' && pw === '' ? true : false}
        >
          로그인
        </button>
        <button className="btn-text">비밀번호를 잊으셨나요?</button>
      </div>
    </div>
  );
};

export default Login;
