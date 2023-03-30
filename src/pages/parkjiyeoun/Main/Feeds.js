import React, { useState } from 'react';
import FeedImage from './FeedsComponents/FeedImage';
import FeedIconSet from './FeedsComponents/FeedIconSet';
import UploadCommentList from './FeedsComponents/UploadCommentList';
import './Feeds.scss';

function Feeds({ id, userAccount, profile, src, reply }) {
  const [inputValue, setInputValue] = useState('');
  const [isUpload, setIsUpload] = useState(false);
  const [uploadComment, setUploadComment] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    const id = Date.now();
    const userAccount = 'parkjiyeoun';
    const reply = inputValue;
    setUploadComment([...uploadComment, { id, userAccount, reply }]);
    setInputValue('');
  };

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const onClick = e => {
    inputValue.length >= 1 ? setIsUpload(true) : setIsUpload(false);
  };

  return (
    <article className="feeds">
      <FeedImage
        userAccount={userAccount}
        src={src}
        reply={reply}
        profile={profile}
      />
      <div className="comment-area">
        <FeedIconSet />
        <div className="upload-comment-container">
          {isUpload ? (
            <UploadCommentList
              setUploadComment={setUploadComment}
              uploadComment={uploadComment}
              userAccount={userAccount}
              reply={reply}
              profile={profile}
            />
          ) : null}
          <span className="time">42분 전</span>
        </div>
      </div>
      <form className="comment-input-wrap" onSubmit={onSubmit}>
        <input
          className="comment-input"
          type="text"
          placeholder="댓글 달기..."
          onChange={onChange}
          value={inputValue}
        />
        <button
          className={inputValue === '' ? 'comment-btn-off' : 'comment-btn-on'}
          disabled={inputValue === '' ? true : false}
          onClick={onClick}
        >
          게시
        </button>
      </form>
    </article>
  );
}

export default Feeds;
