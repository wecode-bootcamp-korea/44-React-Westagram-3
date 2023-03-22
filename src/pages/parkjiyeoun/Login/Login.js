import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import '../../../styles/common.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };
  const [idValue, setId] = React.useState('');
  const [pwValue, setPw] = React.useState('');
  const [isOn, setIsOn] = React.useState(false);
  const handleId = e => {
    setId(e.target.value);
  };
  const handlePw = e => {
    setPw(e.target.value);
  };
  const isValid = () => {
    return idValue.indexOf('@') >= 1 && pwValue.length >= 5
      ? setIsOn(true)
      : setIsOn(false);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="contents">
          <h1 className="logo_text">westagram</h1>

          <form className="input_set">
            <input
              className="input_id"
              type="text"
              placeholder="전화번호, 사용자 이메일 또는 이메일"
              input={handleId}
            />
            <input
              class="input_pw"
              type="password"
              placeholder="비밀번호"
              input={handlePw}
            />
          </form>

          <button
            id="btn_login"
            className={isOn ? 'btnLoginOn' : 'btnLoginOff'}
            onClick={isValid ? goToMain : null}
          >
            로그인
          </button>

          <button className="btn_text">비밀번호를 잊으셨나요?</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
