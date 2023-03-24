import React from 'react';
import CommentItem from './CommentItem';

const CommentBoard = props => {
  return (
    <div>
      <li>
        {props.commentList.map(item => (
          <CommentItem item={item} />
        ))}
      </li>
    </div>
  );
};

export default CommentBoard;
