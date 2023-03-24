import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { Link } from 'react-router-dom';

const LoginCho = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [button, setButton] = useState(true);
  const ChangeBtn = () => {
    if (id.includes('@') & (pw.length >= 5)) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };
  return (
    <form className="login">
      <h1 className="title">instagram</h1>
      <input
        value={id}
        className="id"
        placeholder="전화번호,사용자 이름 또는 이메일"
        onChange={e => {
          setId(e.target.value);
        }}
        onKeyUp={ChangeBtn}
      />

      <input
        value={pw}
        type="password"
        className="pw"
        placeholder="비밀번호"
        onChange={e => {
          //console.log(e.target.value);
          setPw(e.target.value);
        }}
        onKeyUp={ChangeBtn}
      />
      <button className="login-button" disabled={button} onClick={goToMain}>
        로그인
      </button>

      <Link to="/main">비밀번호를 잊으셨나요?</Link>
    </form>
  );
};

export default LoginCho;
