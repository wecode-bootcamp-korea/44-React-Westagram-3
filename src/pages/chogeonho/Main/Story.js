import React from 'react';
import './Story.scss';

const Story = () => {
  return (
    <div className="story">
      <div className="story-header">
        <p className="story-letter">스토리</p>
        <p className="see-all">모두 보기</p>
      </div>
      <div className="profile">
        <img />
        <div className="profileNickName">
          <p className="nickname">||botndk</p>
          <p className="minute">16 분전</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
