import React, { useState } from 'react';
import './UploadCommentList.scss';
import { AiFillHeart, AiOutlineHeart, AiOutlineDelete } from 'react-icons/ai';

function UploadCommentListItem({ userAccount, reply, onRemove, id }) {
  return (
    <div className="upload-comment-list-item">
      <div className="name">{userAccount}</div>
      {reply}
      <HeartBox />
      <DeleteBox onRemove={onRemove} id={id} />
    </div>
  );
}

function HeartBox() {
  const [isOff, setIsOff] = useState(true);
  const handleHeart = e => {
    setIsOff(!isOff);
  };

  return (
    <div className="icon-heart-box" onClick={handleHeart}>
      {isOff ? (
        <AiOutlineHeart className="icon-heart-off" />
      ) : (
        <AiFillHeart className="icon-heart-on" />
      )}
    </div>
  );
}

function DeleteBox({ onRemove, id }) {
  return (
    <div className="icon-delete-box" onClick={() => onRemove(id)}>
      <AiOutlineDelete className="icon-delete" />
    </div>
  );
}

function UploadCommentList({
  setUploadComment,
  uploadComment,
  id,
  userAccount,
  src,
  reply,
}) {
  const onRemove = id => {
    setUploadComment(uploadComment.filter(list => list.id !== id));
  };
  return (
    <>
      {uploadComment.map(e => (
        <div className="comment" key={e.id}>
          <UploadCommentListItem
            uploadComment={e.uploadComment}
            userAccount={e.userAccount}
            src={e.src}
            reply={e.reply}
            onRemove={onRemove}
            id={e.id}
          />
        </div>
      ))}
    </>
  );
}

export default UploadCommentList;
