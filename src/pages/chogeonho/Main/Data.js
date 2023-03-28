import React from 'react';

const Data = () => {
  return (
    <ul>
      {DATA_LIST.map(item => {
        return <li key={item.id}>{item.title}</li>;
      })}

      {/* <li>소개</li>
      <li>도움말</li>
      <li>홍보센터</li>
      <li>API</li>
      <li>채용 정보</li>
      <li>개인정보처리방침</li>
      <li>약관</li>
      <li>위치</li>
      <li>인기 계정</li>
      <li>해쉬태그</li>
      <li>언어</li> */}
    </ul>
  );
};

export default Data;

const DATA_LIST = [
  { id: 1, title: '소개' },
  { id: 2, title: '도움말' },
  { id: 3, title: '홍보센터' },
  { id: 4, title: 'API' },
  { id: 5, title: '채용 정보' },
  { id: 5, title: '개인정보처리방침' },
  { id: 6, title: '약관' },
  { id: 7, title: '위치' },
  { id: 8, title: '인기 계정' },
  { id: 9, title: '해쉬태그' },
  { id: 10, title: '언어' },
];
