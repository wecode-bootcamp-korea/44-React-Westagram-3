import React from 'react';

import Heart from './Heart';

import './CommentItem.scss';
const CommentItem = ({ item, handleRemove, id }) => {
  // console.log(props);
  return (
    <div className="comment-item">
      {item}

      <div className="function">
        <Heart />

        <div
          onClick={() => {
            handleRemove(id);
            //console.log(id);
          }}
        >
          x
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
