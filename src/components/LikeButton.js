import React, { useState } from "react";

export default function LikeButton() {
    const initial_youLiked = "Like this";
    const [youLiked, set_youLiked] = useState(initial_youLiked);
  
    const liked = () => {
      if (youLiked === "Like this"){
        set_youLiked("You liked this. Click to unlike")
      } else {
        set_youLiked(initial_youLiked)
      }
    };
  
    return (
      <div>
        <p>
    <button onClick={liked}>{youLiked}</button>
        </p>
      </div>
    );
  }

