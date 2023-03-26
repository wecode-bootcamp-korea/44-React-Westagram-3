import React from 'react';
import CommentItem from './CommentItem';

const CommentBoard = ({ commentList, setCommentList }) => {
  const handleRemove = id => {
    const newCommentsToRender = commentList.filter((item, x) => id !== x);
    // const newCommentsToRender = commentList.filter(item => item.id !== id);

    setCommentList(newCommentsToRender);
  };

  return (
    <div>
      <li>
        {commentList.map((item, i) => (
          <CommentItem item={item} handleRemove={handleRemove} id={i} />
        ))}
      </li>
    </div>
  );
};

export default CommentBoard;
