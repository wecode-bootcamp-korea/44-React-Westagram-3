import React from 'react';

const CommentItem = props => {
  return (
    <div>
      {props.item}
      <img alt="heart" src="../../assets/Main/heart.png" />

      <button>삭제</button>
    </div>
  );
};

export default CommentItem;
