import React, { useState } from 'react';

const Like = () => {
  const [Like, setLike] = useState(true)
console.log(Like);
  return (<div>
    <h2 onClick={()=>setLike((prevLike)=>
      !prevLike)}>like: {Like?('♥️'):('♡')}  
      </h2>

    </div>
    );
};

export default Like;