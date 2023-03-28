import React, { useState } from 'react';
import heart from '../../assets/chogeonho/heart.png';
import redheart from '../../assets/chogeonho/red.png';
import './Heart.scss';
const Heart = () => {
  const [like, setLike] = useState(true);
  return (
    <span
      onClick={e => {
        setLike(!like);
        console.log(like);
      }}
    >
      {like ? (
        <img className="white-heart" alt="heart" src={heart} />
      ) : (
        <img className="red-heart" src={redheart} alt="redheart" />
      )}
    </span>
  );
};

export default Heart;
